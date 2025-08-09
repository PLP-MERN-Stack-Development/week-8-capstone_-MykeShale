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
  Calendar,
  Clock,
  MapPin,
  Video,
  Plus,
  Search,
  MoreVertical,
  Star,
  CheckCircle,
  XCircle,
  AlertCircle,
  Edit,
  Trash2,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function PatientAppointmentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterType, setFilterType] = useState("all")
  const [selectedAppointment, setSelectedAppointment] = useState(null)

  const appointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "General Practice",
      date: "2024-01-15",
      time: "2:30 PM",
      type: "Video call",
      status: "confirmed",
      clinic: "Community Health Center",
      reason: "Regular checkup",
      notes: "Annual physical examination",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.9,
      duration: "30 min",
      price: "Free",
      canReschedule: true,
      canCancel: true,
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Cardiology",
      date: "2024-01-16",
      time: "10:00 AM",
      type: "In-person",
      status: "confirmed",
      clinic: "Heart Care Clinic",
      reason: "Follow-up consultation",
      notes: "Review test results and adjust medication",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.8,
      duration: "45 min",
      price: "Free",
      canReschedule: true,
      canCancel: true,
    },
  ]

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.doctor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.reason.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = filterStatus === "all" || appointment.status === filterStatus
    const matchesType = filterType === "all" || appointment.type.toLowerCase().includes(filterType.toLowerCase())

    return matchesSearch && matchesStatus && matchesType
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "pending":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />
      case "completed":
        return <CheckCircle className="h-4 w-4 text-blue-500" />
      case "cancelled":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <DashboardLayout userRole="patient" userName="John Doe" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
            <p className="text-gray-600">Manage your healthcare appointments and consultations</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="h-4 w-4 mr-2" />
            Book New Appointment
          </Button>
        </div>

        {/* Filters */}
        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search appointments, doctors, or specialties..."
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
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="video">Video Call</SelectItem>
                  <SelectItem value="person">In-Person</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Appointments List */}
        <div className="space-y-4">
          {filteredAppointments.map((appointment) => (
            <Card
              key={appointment.id}
              className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <Avatar className="h-16 w-16 border-2 border-emerald-200">
                      <AvatarImage src={appointment.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {appointment.doctor
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{appointment.doctor}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">{appointment.rating}</span>
                        </div>
                      </div>
                      <p className="text-emerald-600 font-medium mb-1">{appointment.specialty}</p>
                      <p className="text-gray-600 mb-2">{appointment.reason}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{appointment.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{appointment.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {appointment.type === "Video call" ? (
                            <Video className="h-4 w-4" />
                          ) : (
                            <MapPin className="h-4 w-4" />
                          )}
                          <span>{appointment.type}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {appointment.duration}
                        </Badge>
                        <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                          {appointment.price}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-3">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(appointment.status)}
                      <Badge className={`${getStatusColor(appointment.status)} border-0`}>{appointment.status}</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedAppointment(appointment)}>
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Appointment Details</DialogTitle>
                            <DialogDescription>Complete information about your appointment</DialogDescription>
                          </DialogHeader>
                          {selectedAppointment && (
                            <div className="space-y-6">
                              <div className="flex items-center space-x-4">
                                <Avatar className="h-20 w-20 border-2 border-emerald-200">
                                  <AvatarImage src={selectedAppointment.avatar || "/placeholder.svg"} />
                                  <AvatarFallback>
                                    {selectedAppointment.doctor
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <h3 className="text-xl font-semibold">{selectedAppointment.doctor}</h3>
                                  <p className="text-emerald-600 font-medium">{selectedAppointment.specialty}</p>
                                  <div className="flex items-center space-x-1 mt-1">
                                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                    <span className="text-sm">{selectedAppointment.rating} rating</span>
                                  </div>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Appointment Details</h4>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Date:</span>
                                      <span>{selectedAppointment.date}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Time:</span>
                                      <span>{selectedAppointment.time}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Duration:</span>
                                      <span>{selectedAppointment.duration}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Type:</span>
                                      <span>{selectedAppointment.type}</span>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Location</h4>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Clinic:</span>
                                      <span>{selectedAppointment.clinic}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Fee:</span>
                                      <span className="text-green-600 font-medium">{selectedAppointment.price}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 mb-2">Reason for Visit</h4>
                                <p className="text-gray-600">{selectedAppointment.reason}</p>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 mb-2">Notes</h4>
                                <p className="text-gray-600">{selectedAppointment.notes}</p>
                              </div>
                              {selectedAppointment.status === "confirmed" && (
                                <div className="flex space-x-3">
                                  {selectedAppointment.type === "Video call" && (
                                    <Button className="bg-blue-600 hover:bg-blue-700">
                                      <Video className="h-4 w-4 mr-2" />
                                      Join Video Call
                                    </Button>
                                  )}
                                  {selectedAppointment.canReschedule && (
                                    <Button variant="outline">
                                      <Edit className="h-4 w-4 mr-2" />
                                      Reschedule
                                    </Button>
                                  )}
                                  {selectedAppointment.canCancel && (
                                    <Button
                                      variant="outline"
                                      className="text-red-600 hover:text-red-700 bg-transparent"
                                    >
                                      <Trash2 className="h-4 w-4 mr-2" />
                                      Cancel
                                    </Button>
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      {appointment.status === "confirmed" && appointment.type === "Video call" && (
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <Video className="h-3 w-3 mr-1" />
                          Join
                        </Button>
                      )}
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
      </div>
    </DashboardLayout>
  )
}
