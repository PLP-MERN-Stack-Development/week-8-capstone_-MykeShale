"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Calendar,
  MessageCircle,
  Heart,
  Clock,
  Users,
  Video,
  Plus,
  Bell,
  Filter,
  Star,
  FileText,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const todayAppointments = [
    {
      id: 1,
      patient: "John Smith",
      time: "9:00 AM",
      type: "In-person",
      status: "confirmed",
      reason: "Regular checkup",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      patient: "Maria Garcia",
      time: "10:30 AM",
      type: "Video call",
      status: "confirmed",
      reason: "Follow-up consultation",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      patient: "David Johnson",
      time: "2:00 PM",
      type: "In-person",
      status: "pending",
      reason: "Chest pain evaluation",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const recentMessages = [
    {
      id: 1,
      patient: "Sarah Wilson",
      message: "Thank you for the prescription. When should I schedule my next visit?",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 2,
      patient: "Michael Brown",
      message: "I'm experiencing some side effects from the medication.",
      time: "3 hours ago",
      unread: true,
    },
  ]

  const stats = [
    { label: "Today's Patients", value: "12", change: "+2", icon: Users },
    { label: "This Week", value: "48", change: "+8", icon: Calendar },
    { label: "Patient Rating", value: "4.9", change: "+0.1", icon: Star },
    { label: "Response Time", value: "15min", change: "-5min", icon: Clock },
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
                  variant={activeTab === "patients" ? "default" : "ghost"}
                  onClick={() => setActiveTab("patients")}
                  className={activeTab === "patients" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                >
                  Patients
                </Button>
                <Button
                  variant={activeTab === "messages" ? "default" : "ghost"}
                  onClick={() => setActiveTab("messages")}
                  className={activeTab === "messages" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                >
                  Messages
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
                <Badge className="ml-1 bg-red-500 text-white text-xs">3</Badge>
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Good morning, Dr. Johnson!</h1>
          <p className="text-gray-600">You have 12 appointments scheduled for today.</p>
        </div>

        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                          <div className="flex items-center space-x-2">
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            <Badge variant="secondary" className="text-green-600 bg-green-100">
                              {stat.change}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-3 bg-emerald-100 rounded-full">
                          <IconComponent className="h-6 w-6 text-emerald-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Today's Schedule */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-emerald-600" />
                    <span>Today's Schedule</span>
                  </CardTitle>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {todayAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <Avatar>
                        <AvatarImage src={appointment.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {appointment.patient
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{appointment.patient}</h4>
                        <p className="text-sm text-gray-600">{appointment.reason}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span>{appointment.time}</span>
                          </div>
                          <Badge variant="outline">
                            {appointment.type === "Video call" ? (
                              <Video className="h-3 w-3 mr-1" />
                            ) : (
                              <Users className="h-3 w-3 mr-1" />
                            )}
                            {appointment.type}
                          </Badge>
                          <Badge
                            variant={appointment.status === "confirmed" ? "default" : "secondary"}
                            className={appointment.status === "confirmed" ? "bg-green-600" : ""}
                          >
                            {appointment.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                        {appointment.type === "Video call" && (
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Video className="h-4 w-4 mr-1" />
                            Join
                          </Button>
                        )}
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
                    <span>Patient Messages</span>
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
                          {message.patient
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-900 text-sm">{message.patient}</h4>
                          <span className="text-xs text-gray-500">{message.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{message.message}</p>
                        {message.unread && (
                          <Badge variant="default" className="mt-2 bg-blue-600">
                            New
                          </Badge>
                        )}
                      </div>
                      <Button size="sm" variant="outline">
                        Reply
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-4 gap-4">
              <Link href="/patients/new">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-emerald-100">
                  <CardContent className="p-6 text-center">
                    <Plus className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Add Patient</h3>
                    <p className="text-sm text-gray-600">Register new patient</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/prescriptions">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-blue-100">
                  <CardContent className="p-6 text-center">
                    <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Prescriptions</h3>
                    <p className="text-sm text-gray-600">Manage prescriptions</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/analytics">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-purple-100">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Analytics</h3>
                    <p className="text-sm text-gray-600">View practice insights</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/schedule">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-orange-100">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Schedule</h3>
                    <p className="text-sm text-gray-600">Manage availability</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        )}

        {activeTab === "appointments" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="h-4 w-4 mr-2" />
                Block Time Slot
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
              {todayAppointments.map((appointment) => (
                <Card key={appointment.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={appointment.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {appointment.patient
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-900">{appointment.patient}</h3>
                          <p className="text-gray-600">{appointment.reason}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <div className="flex items-center space-x-1 text-sm text-gray-500">
                              <Clock className="h-4 w-4" />
                              <span>{appointment.time}</span>
                            </div>
                            <Badge variant="outline">
                              {appointment.type === "Video call" ? (
                                <Video className="h-3 w-3 mr-1" />
                              ) : (
                                <Users className="h-3 w-3 mr-1" />
                              )}
                              {appointment.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant={appointment.status === "confirmed" ? "default" : "secondary"}
                          className={appointment.status === "confirmed" ? "bg-green-600" : ""}
                        >
                          {appointment.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {appointment.type === "Video call" && (
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Video className="h-4 w-4 mr-1" />
                            Join Call
                          </Button>
                        )}
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
