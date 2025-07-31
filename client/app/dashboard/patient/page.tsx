"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, MessageCircle, Heart, Clock, MapPin, Phone, Video, Plus, Bell, Filter, Activity } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "General Practice",
      date: "Today",
      time: "2:30 PM",
      type: "In-person",
      clinic: "Community Health Center",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Cardiology",
      date: "Tomorrow",
      time: "10:00 AM",
      type: "Video call",
      clinic: "Heart Care Clinic",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const recentMessages = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      message: "Your test results are ready. Please check your health records.",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      message: "Remember to take your medication as prescribed.",
      time: "1 day ago",
      unread: false,
    },
  ]

  const healthMetrics = [
    { label: "Blood Pressure", value: "120/80", status: "normal", icon: Heart },
    { label: "Heart Rate", value: "72 bpm", status: "normal", icon: Activity },
    { label: "Weight", value: "70 kg", status: "stable", icon: Activity },
    { label: "Last Checkup", value: "2 weeks ago", status: "recent", icon: Calendar },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <Heart className="h-8 w-8 text-emerald-600" />
                <span className="text-xl font-bold text-gray-900">WellCareCircle</span>
              </Link>
              <div className="hidden md:flex items-center space-x-1">
                <Button
                  variant={activeTab === "overview" ? "default" : "ghost"}
                  onClick={() => setActiveTab("overview")}
                  className={activeTab === "overview" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                >
                  Overview
                </Button>
                <Button
                  variant={activeTab === "appointments" ? "default" : "ghost"}
                  onClick={() => setActiveTab("appointments")}
                  className={activeTab === "appointments" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                >
                  Appointments
                </Button>
                <Button
                  variant={activeTab === "messages" ? "default" : "ghost"}
                  onClick={() => setActiveTab("messages")}
                  className={activeTab === "messages" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                >
                  Messages
                </Button>
                <Button
                  variant={activeTab === "health" ? "default" : "ghost"}
                  onClick={() => setActiveTab("health")}
                  className={activeTab === "health" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                >
                  Health Records
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Here's your health overview for today.</p>
        </div>

        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="grid md:grid-cols-4 gap-4">
              <Link href="/book-appointment">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-emerald-100">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Book Appointment</h3>
                    <p className="text-sm text-gray-600">Schedule with a doctor</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/messages">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-blue-100">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Messages</h3>
                    <p className="text-sm text-gray-600">Chat with doctors</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/health-records">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-purple-100">
                  <CardContent className="p-6 text-center">
                    <Heart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Health Records</h3>
                    <p className="text-sm text-gray-600">View your history</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/emergency">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-red-100">
                  <CardContent className="p-6 text-center">
                    <Phone className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Emergency</h3>
                    <p className="text-sm text-gray-600">Get immediate help</p>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Health Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-emerald-600" />
                  <span>Health Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {healthMetrics.map((metric, index) => {
                    const IconComponent = metric.icon
                    return (
                      <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                        <IconComponent className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                        <Badge variant="secondary" className="mt-2">
                          {metric.status}
                        </Badge>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Upcoming Appointments */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-emerald-600" />
                    <span>Upcoming Appointments</span>
                  </CardTitle>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Book New
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <Avatar>
                        <AvatarImage src={appointment.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {appointment.doctor
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{appointment.doctor}</h4>
                        <p className="text-sm text-gray-600">{appointment.specialty}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span>
                              {appointment.date} at {appointment.time}
                            </span>
                          </div>
                          <Badge variant="outline">
                            {appointment.type === "Video call" ? (
                              <Video className="h-3 w-3 mr-1" />
                            ) : (
                              <MapPin className="h-3 w-3 mr-1" />
                            )}
                            {appointment.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Messages */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5 text-blue-600" />
                    <span>Recent Messages</span>
                  </CardTitle>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentMessages.map((message) => (
                    <div key={message.id} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {message.doctor
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-900 text-sm">{message.doctor}</h4>
                          <span className="text-xs text-gray-500">{message.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{message.message}</p>
                        {message.unread && (
                          <Badge variant="default" className="mt-2 bg-blue-600">
                            New
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "appointments" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">My Appointments</h2>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="h-4 w-4 mr-2" />
                Book New Appointment
              </Button>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <Input placeholder="Search appointments..." className="w-full" />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            <div className="grid gap-4">
              {upcomingAppointments.map((appointment) => (
                <Card key={appointment.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={appointment.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {appointment.doctor
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                          <p className="text-gray-600">{appointment.specialty}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <div className="flex items-center space-x-1 text-sm text-gray-500">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {appointment.date} at {appointment.time}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-gray-500">
                              <MapPin className="h-4 w-4" />
                              <span>{appointment.clinic}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">
                          {appointment.type === "Video call" ? (
                            <Video className="h-3 w-3 mr-1" />
                          ) : (
                            <MapPin className="h-3 w-3 mr-1" />
                          )}
                          {appointment.type}
                        </Badge>
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                        <Button variant="outline" size="sm">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
