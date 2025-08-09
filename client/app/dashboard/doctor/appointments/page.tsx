"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Calendar,
  Clock,
  MapPin,
  Video,
  Plus,
  Search,
  Users,
  CheckCircle,
  XCircle,
  AlertCircle,
  MessageCircle,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function DoctorAppointmentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterType, setFilterType] = useState("all")

  const appointments = [
    {
      id: 1,
      patient: "John Smith",
      age: 45,
      gender: "Male",
      date: "2024-01-15",
      time: "9:00 AM",
      type: "In-person",
      status: "confirmed",
      reason: "Regular checkup",
      notes: "Annual physical examination",
      avatar: "/placeholder.svg?height=40&width=40",
      duration: "30 min",
      lastVisit: "6 months ago",
      conditions: ["Hypertension"],
    },
    {
      id: 2,
      patient: "Maria Garcia",
      age: 32,
      gender: "Female",
      date: "2024-01-15",
      time: "10:30 AM",
      type: "Video call",
      status: "confirmed",
      reason: "Follow-up consultation",
      notes: "Review test results and adjust medication",
      avatar: "/placeholder.svg?height=40&width=40",
      duration: "45 min",
      lastVisit: "2 weeks ago",
      conditions: ["Diabetes Type 2"],
    },
    {
      id: 3,
      patient: "David Johnson",
      age: 28,
      gender: "Male",
      date: "2024-01-15",
      time: "2:00 PM",
      type: "In-person",
      status: "pending",
      reason: "Chest pain evaluation",
      notes: "Patient reports intermittent chest pain",
      avatar: "/placeholder.svg?height=40&width=40",
      duration: "60 min",
      lastVisit: "First visit",
      conditions: [],
    },
  ]

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
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

  const todayAppointments = appointments.filter((apt) => apt.date === "2024-01-15")
  const upcomingAppointments = appointments.filter((apt) => apt.date > "2024-01-15")

  return (
    <DashboardLayout userRole="doctor" userName="Dr. Sarah Johnson" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
            <p className="text-gray-600">Manage your patient appointments and consultations</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Appointment Slot
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Today's Appointments</p>
                  <p className="text-2xl font-bold text-gray-900">{todayAppointments.length}</p>
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
                  <p className="text-2xl font-bold text-green-600">
                    {appointments.filter((a) => a.status === "confirmed").length}
                  </p>
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
                  <p className="text-2xl font-bold text-yellow-600">
                    {appointments.filter((a) => a.status === "pending").length}
                  </p>
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
                  placeholder="Search patients or appointment reasons..."
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

        {/* Appointments Tabs */}
        <Tabs defaultValue="today" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-none lg:flex bg-white border shadow-sm">
            <TabsTrigger value="today" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Today ({todayAppointments.length})
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Upcoming ({upcomingAppointments.length})
            </TabsTrigger>
            <TabsTrigger value="all" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              All ({filteredAppointments.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="today" className="space-y-4">
            {todayAppointments.map((appointment) => (
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
                            {appointment.age}y, {appointment.gender}
                          </Badge>
                        </div>
                        <p className="text-emerald-600 font-medium mb-1">{appointment.reason}</p>
                        <p className="text-gray-600 mb-2">{appointment.notes}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
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
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{appointment.lastVisit}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            {appointment.duration}
                          </Badge>
                          {appointment.conditions.map((condition, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                              {condition}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-3">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(appointment.status)}
                        <Badge className={`${getStatusColor(appointment.status)} border-0`}>{appointment.status}</Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          View Patient
                        </Button>
                        {appointment.type === "Video call" && (
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Video className="h-3 w-3 mr-1" />
                            Join Call
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-4">
            {upcomingAppointments.map((appointment) => (
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
                            {appointment.age}y, {appointment.gender}
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
                            {appointment.duration}
                          </Badge>
                          {appointment.conditions.map((condition, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                              {condition}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-3">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(appointment.status)}
                        <Badge className={`${getStatusColor(appointment.status)} border-0`}>{appointment.status}</Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          View Patient
                        </Button>
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="all" className="space-y-4">
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
                            {appointment.age}y, {appointment.gender}
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
                            {appointment.duration}
                          </Badge>
                          {appointment.conditions.map((condition, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                              {condition}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-3">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(appointment.status)}
                        <Badge className={`${getStatusColor(appointment.status)} border-0`}>{appointment.status}</Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          View Patient
                        </Button>
                        {appointment.type === "Video call" && appointment.status === "confirmed" && (
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Video className="h-3 w-3 mr-1" />
                            Join Call
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
