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
  CheckCircle,
  XCircle,
  AlertCircle,
  Edit,
  Trash2,
  Stethoscope,
  Eye,
  MoreVertical,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function AdminAppointmentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterType, setFilterType] = useState("all")
  const [filterDoctor, setFilterDoctor] = useState("all")
  const [filterPatient, setFilterPatient] = useState("all")
  const [selectedAppointment, setSelectedAppointment] = useState(null)

  const doctors = [
    { id: 1, name: "Dr. Sarah Johnson" },
    { id: 2, name: "Dr. Michael Chen" },
  ]

  const patients = [
    { id: 1, name: "John Smith" },
    { id: 2, name: "Maria Garcia" },
  ]

  const appointments = [
    {
      id: 1,
      patient: "John Smith",
      doctor: "Dr. Sarah Johnson",
      specialty: "General Practice",
      date: "2024-01-15",
      time: "9:00 AM",
      type: "In-person",
      status: "confirmed",
      clinic: "Community Health Center",
      reason: "Regular checkup",
      notes: "Annual physical examination",
      patientAvatar: "/placeholder.svg?height=40&width=40",
      doctorAvatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      patient: "Maria Garcia",
      doctor: "Dr. Michael Chen",
      specialty: "Cardiology",
      date: "2024-01-16",
      time: "10:30 AM",
      type: "Video call",
      status: "pending",
      clinic: "Heart Care Clinic",
      reason: "Follow-up consultation",
      notes: "Review test results and adjust medication",
      patientAvatar: "/placeholder.svg?height=40&width=40",
      doctorAvatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      patient: "David Johnson",
      doctor: "Dr. Sarah Johnson",
      specialty: "General Practice",
      date: "2024-01-14",
      time: "2:00 PM",
      type: "In-person",
      status: "completed",
      clinic: "Community Health Center",
      reason: "Chest pain evaluation",
      notes: "Patient reports intermittent chest pain",
      patientAvatar: "/placeholder.svg?height=40&width=40",
      doctorAvatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.doctor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.reason.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = filterStatus === "all" || appointment.status === filterStatus
    const matchesType = filterType === "all" || appointment.type.toLowerCase().includes(filterType.toLowerCase())
    const matchesDoctor = filterDoctor === "all" || appointment.doctor === filterDoctor
    const matchesPatient = filterPatient === "all" || appointment.patient === filterPatient

    return matchesSearch && matchesStatus && matchesType && matchesDoctor && matchesPatient
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

  const totalAppointments = appointments.length
  const confirmedAppointments = appointments.filter((a) => a.status === "confirmed").length
  const pendingAppointments = appointments.filter((a) => a.status === "pending").length

  return (
    <DashboardLayout userRole="admin" userName="Admin User" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Appointment Management</h1>
            <p className="text-gray-600">Oversee and manage all appointments across the platform</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="h-4 w-4 mr-2" />
            Create New Appointment
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Appointments</p>
                  <p className="text-2xl font-bold text-gray-900">{totalAppointments}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Confirmed</p>
                  <p className="text-2xl font-bold text-green-600">{confirmedAppointments}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600">{pendingAppointments}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Video Calls</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {appointments.filter((a) => a.type === "Video call").length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Video className="h-6 w-6 text-purple-600" />
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
                  placeholder="Search appointments, doctors, or patients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterDoctor} onValueChange={setFilterDoctor}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Filter by doctor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Doctors</SelectItem>
                  {doctors.map((doctor) => (
                    <SelectItem key={doctor.id} value={doctor.name}>
                      {doctor.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={filterPatient} onValueChange={setFilterPatient}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Filter by patient" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Patients</SelectItem>
                  {patients.map((patient) => (
                    <SelectItem key={patient.id} value={patient.name}>
                      {patient.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
                      <AvatarImage src={appointment.patientAvatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {appointment.patient
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{appointment.patient}</h3>
                        <Badge variant="outline" className="text-xs">
                          <Stethoscope className="h-3 w-3 mr-1" /> {appointment.doctor}
                        </Badge>
                      </div>
                      <p className="text-emerald-600 font-medium mb-1">{appointment.reason}</p>
                      <p className="text-gray-600 mb-2">{appointment.notes}</p>
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
                          {appointment.specialty}
                        </Badge>
                        <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                          {appointment.clinic}
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
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Appointment Details</DialogTitle>
                            <DialogDescription>Complete information about this appointment</DialogDescription>
                          </DialogHeader>
                          {selectedAppointment && (
                            <div className="space-y-6">
                              <div className="flex items-center space-x-4">
                                <Avatar className="h-20 w-20 border-2 border-emerald-200">
                                  <AvatarImage src={selectedAppointment.patientAvatar || "/placeholder.svg"} />
                                  <AvatarFallback>
                                    {selectedAppointment.patient
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <h3 className="text-xl font-semibold">{selectedAppointment.patient}</h3>
                                  <p className="text-emerald-600 font-medium">{selectedAppointment.reason}</p>
                                  <Badge className={`${getStatusColor(selectedAppointment.status)} mt-1`}>
                                    {selectedAppointment.status}
                                  </Badge>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Appointment Information</h4>
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
                                      <span className="text-gray-600">Type:</span>
                                      <span>{selectedAppointment.type}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Clinic:</span>
                                      <span>{selectedAppointment.clinic}</span>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Doctor Information</h4>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Doctor:</span>
                                      <span>{selectedAppointment.doctor}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Specialty:</span>
                                      <span>{selectedAppointment.specialty}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 mb-2">Notes</h4>
                                <p className="text-gray-600">{selectedAppointment.notes}</p>
                              </div>
                              <div className="flex space-x-3">
                                <Button className="bg-emerald-600 hover:bg-emerald-700">
                                  <Edit className="h-4 w-4 mr-2" />
                                  Edit Appointment
                                </Button>
                                <Button variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Cancel Appointment
                                </Button>
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
      </div>
    </DashboardLayout>
  )
}
