"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Video,
  Calendar,
  Clock,
  Mic,
  Camera,
  PhoneOff,
  Volume2,
  Maximize,
  Share2,
  Plus,
  Search,
  CheckCircle,
  AlertCircle,
  XCircle,
  FileText,
  Download,
  Trash2,
  Eye,
  MoreVertical,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function DoctorTelemedicinePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [selectedConsultation, setSelectedConsultation] = useState(null)
  const [inCall, setInCall] = useState(false)

  const consultations = [
    {
      id: 1,
      patientName: "John Smith",
      date: "2024-01-15",
      time: "9:00 AM",
      type: "Video Call",
      status: "scheduled",
      reason: "Follow-up on hypertension",
      notes: "Discussing medication efficacy and side effects.",
      patientAvatar: "/placeholder.svg?height=40&width=40",
      callLink: "#",
      recordingAvailable: false,
      transcriptAvailable: false,
    },
    {
      id: 2,
      patientName: "Maria Garcia",
      date: "2024-01-15",
      time: "10:30 AM",
      type: "Video Call",
      status: "scheduled",
      reason: "New patient consultation",
      notes: "Initial assessment for chronic fatigue.",
      patientAvatar: "/placeholder.svg?height=40&width=40",
      callLink: "#",
      recordingAvailable: false,
      transcriptAvailable: false,
    },
    {
      id: 3,
      patientName: "David Johnson",
      date: "2024-01-14",
      time: "2:00 PM",
      type: "Video Call",
      status: "completed",
      reason: "Anxiety management",
      notes: "Reviewed breathing exercises and coping strategies.",
      patientAvatar: "/placeholder.svg?height=40&width=40",
      callLink: "#",
      recordingAvailable: true,
      transcriptAvailable: true,
    },
    {
      id: 4,
      patientName: "Lisa Wilson",
      date: "2024-01-13",
      time: "11:00 AM",
      type: "Video Call",
      status: "cancelled",
      reason: "Cold symptoms",
      notes: "Patient cancelled due to improved symptoms.",
      patientAvatar: "/placeholder.svg?height=40&width=40",
      callLink: "#",
      recordingAvailable: false,
      transcriptAvailable: false,
    },
  ]

  const filteredConsultations = consultations.filter((consultation) => {
    const matchesSearch =
      consultation.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      consultation.reason.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = filterStatus === "all" || consultation.status === filterStatus

    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled":
        return "bg-blue-100 text-blue-800"
      case "completed":
        return "bg-green-100 text-green-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      case "in-progress":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "scheduled":
        return <Clock className="h-4 w-4 text-blue-500" />
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "cancelled":
        return <XCircle className="h-4 w-4 text-red-500" />
      case "in-progress":
        return <Video className="h-4 w-4 text-purple-500" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />
    }
  }

  const scheduledConsultations = consultations.filter((c) => c.status === "scheduled")
  const completedConsultations = consultations.filter((c) => c.status === "completed")

  return (
    <DashboardLayout userRole="doctor" userName="Dr. Sarah Johnson" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Telemedicine Consultations</h1>
            <p className="text-gray-600">Manage your virtual appointments and patient calls</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="h-4 w-4 mr-2" />
            Schedule New Call
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Consultations</p>
                  <p className="text-2xl font-bold text-gray-900">{consultations.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Video className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Scheduled Today</p>
                  <p className="text-2xl font-bold text-green-600">{scheduledConsultations.length}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed Calls</p>
                  <p className="text-2xl font-bold text-purple-600">{completedConsultations.length}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Average Call Duration</p>
                  <p className="text-2xl font-bold text-yellow-600">20 min</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search consultations by patient or reason..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Telemedicine Consultations List */}
        <div className="space-y-4">
          {filteredConsultations.map((consultation) => (
            <Card
              key={consultation.id}
              className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <Avatar className="h-16 w-16 border-2 border-emerald-200">
                      <AvatarImage src={consultation.patientAvatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {consultation.patientName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{consultation.patientName}</h3>
                      <p className="text-emerald-600 font-medium mb-1">{consultation.reason}</p>
                      <p className="text-gray-600 mb-2">{consultation.notes}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{consultation.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{consultation.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Video className="h-4 w-4" />
                          <span>{consultation.type}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        {consultation.recordingAvailable && (
                          <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                            Recording
                          </Badge>
                        )}
                        {consultation.transcriptAvailable && (
                          <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700">
                            Transcript
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-3">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(consultation.status)}
                      <Badge className={`${getStatusColor(consultation.status)} border-0`}>{consultation.status}</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      {consultation.status === "scheduled" && (
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700" onClick={() => setInCall(true)}>
                          <Video className="h-3 w-3 mr-1" />
                          Start Call
                        </Button>
                      )}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedConsultation(consultation)}>
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Consultation Details</DialogTitle>
                            <DialogDescription>
                              Complete information about this telemedicine consultation
                            </DialogDescription>
                          </DialogHeader>
                          {selectedConsultation && (
                            <div className="space-y-6">
                              <div className="flex items-center space-x-4">
                                <Avatar className="h-20 w-20 border-2 border-emerald-200">
                                  <AvatarImage src={selectedConsultation.patientAvatar || "/placeholder.svg"} />
                                  <AvatarFallback>
                                    {selectedConsultation.patientName
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <h3 className="text-xl font-semibold">{selectedConsultation.patientName}</h3>
                                  <p className="text-emerald-600 font-medium">{selectedConsultation.reason}</p>
                                  <Badge className={`${getStatusColor(selectedConsultation.status)} mt-1`}>
                                    {selectedConsultation.status}
                                  </Badge>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Consultation Information</h4>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Date:</span>
                                      <span>{selectedConsultation.date}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Time:</span>
                                      <span>{selectedConsultation.time}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Type:</span>
                                      <span>{selectedConsultation.type}</span>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Additional Details</h4>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Notes:</span>
                                      <span className="text-right">{selectedConsultation.notes}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Recording:</span>
                                      <span>{selectedConsultation.recordingAvailable ? "Available" : "N/A"}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Transcript:</span>
                                      <span>{selectedConsultation.transcriptAvailable ? "Available" : "N/A"}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex space-x-3">
                                {selectedConsultation.status === "scheduled" && (
                                  <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setInCall(true)}>
                                    <Video className="h-4 w-4 mr-2" />
                                    Start Call Now
                                  </Button>
                                )}
                                {selectedConsultation.recordingAvailable && (
                                  <Button variant="outline">
                                    <Download className="h-4 w-4 mr-2" />
                                    Download Recording
                                  </Button>
                                )}
                                {selectedConsultation.transcriptAvailable && (
                                  <Button variant="outline">
                                    <FileText className="h-4 w-4 mr-2" />
                                    View Transcript
                                  </Button>
                                )}
                                {selectedConsultation.status === "scheduled" && (
                                  <Button variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Cancel Consultation
                                  </Button>
                                )}
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* In-Call Interface */}
        {inCall && (
          <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
            <div className="relative w-full h-full flex flex-col">
              {/* Video Area */}
              <div className="flex-1 flex items-center justify-center bg-gray-900 relative">
                <img
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Patient Video"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 w-32 h-24 bg-gray-700 rounded-lg border-2 border-white overflow-hidden">
                  <img
                    src="/placeholder.svg?height=96&width=128"
                    alt="Doctor Self View"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4 text-white text-lg font-semibold">
                  Dr. Sarah Johnson - Consultation with John Smith
                </div>
                <div className="absolute top-4 right-4 text-white text-lg font-semibold">
                  <Clock className="inline-block h-5 w-5 mr-2" /> 08:45
                </div>
              </div>

              {/* Call Controls */}
              <div className="bg-gray-800 p-4 flex items-center justify-center space-x-6">
                <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700">
                  <Mic className="h-6 w-6" />
                  <span className="sr-only">Toggle Microphone</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700">
                  <Camera className="h-6 w-6" />
                  <span className="sr-only">Toggle Camera</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700">
                  <Volume2 className="h-6 w-6" />
                  <span className="sr-only">Toggle Volume</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700">
                  <Share2 className="h-6 w-6" />
                  <span className="sr-only">Share Screen</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700">
                  <Maximize className="h-6 w-6" />
                  <span className="sr-only">Full Screen</span>
                </Button>
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full"
                  onClick={() => setInCall(false)}
                >
                  <PhoneOff className="h-6 w-6 mr-2" />
                  End Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
