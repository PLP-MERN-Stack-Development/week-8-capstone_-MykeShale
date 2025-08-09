"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Calendar, TrendingUp, Activity, UserPlus, Stethoscope, Building } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = [
    { label: "Total Patients", value: "2,847", change: "+12%", icon: Users, color: "emerald" },
    { label: "Active Doctors", value: "45", change: "+3", icon: Stethoscope, color: "blue" },
    { label: "Appointments Today", value: "127", change: "+8%", icon: Calendar, color: "purple" },
    { label: "System Health", value: "99.9%", change: "+0.1%", icon: Activity, color: "green" },
  ]

  const recentPatients = [
    {
      id: 1,
      name: "John Smith",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      joinDate: "2024-01-15",
      status: "active",
      lastVisit: "2 days ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria@example.com",
      phone: "+1 (555) 234-5678",
      joinDate: "2024-01-10",
      status: "active",
      lastVisit: "1 week ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "David Johnson",
      email: "david@example.com",
      phone: "+1 (555) 345-6789",
      joinDate: "2024-01-08",
      status: "inactive",
      lastVisit: "2 weeks ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "General Practice",
      email: "sarah.johnson@clinic.com",
      phone: "+1 (555) 111-2222",
      patients: 156,
      rating: 4.9,
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Cardiology",
      email: "michael.chen@clinic.com",
      phone: "+1 (555) 222-3333",
      patients: 89,
      rating: 4.8,
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      email: "emily.rodriguez@clinic.com",
      phone: "+1 (555) 333-4444",
      patients: 203,
      rating: 4.9,
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const recentAppointments = [
    {
      id: 1,
      patient: "John Smith",
      doctor: "Dr. Sarah Johnson",
      date: "Today",
      time: "2:30 PM",
      type: "In-person",
      status: "confirmed",
    },
    {
      id: 2,
      patient: "Maria Garcia",
      doctor: "Dr. Michael Chen",
      date: "Today",
      time: "3:00 PM",
      type: "Video call",
      status: "confirmed",
    },
    {
      id: 3,
      patient: "David Johnson",
      doctor: "Dr. Emily Rodriguez",
      date: "Tomorrow",
      time: "10:00 AM",
      type: "In-person",
      status: "pending",
    },
  ]

  return (
    <DashboardLayout userRole="admin" userName="Admin User" userAvatar="/placeholder.svg?height=48&width=48">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Manage your healthcare platform and monitor system performance.</p>
      </div>

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
                    <div className={`p-3 bg-${stat.color}-100 rounded-full`}>
                      <IconComponent className={`h-6 w-6 text-${stat.color}-600`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Patients */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-emerald-600" />
                <span>Recent Patients</span>
              </CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentPatients.slice(0, 3).map((patient) => (
                <div key={patient.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <Avatar>
                    <AvatarImage src={patient.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {patient.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{patient.name}</h4>
                    <p className="text-sm text-gray-600">{patient.email}</p>
                    <p className="text-xs text-gray-500">Last visit: {patient.lastVisit}</p>
                  </div>
                  <Badge variant={patient.status === "active" ? "default" : "secondary"}>{patient.status}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Appointments */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span>Today's Appointments</span>
              </CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentAppointments.slice(0, 3).map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">{appointment.patient}</h4>
                    <p className="text-sm text-gray-600">{appointment.doctor}</p>
                    <p className="text-xs text-gray-500">
                      {appointment.date} at {appointment.time}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">{appointment.type}</Badge>
                    <Badge variant={appointment.status === "confirmed" ? "default" : "secondary"} className="ml-2">
                      {appointment.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-emerald-100">
            <CardContent className="p-6 text-center">
              <UserPlus className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Add Patient</h3>
              <p className="text-sm text-gray-600">Register new patient</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-blue-100">
            <CardContent className="p-6 text-center">
              <Stethoscope className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Add Doctor</h3>
              <p className="text-sm text-gray-600">Onboard new doctor</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-purple-100">
            <CardContent className="p-6 text-center">
              <Building className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Clinic Settings</h3>
              <p className="text-sm text-gray-600">Manage clinic info</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-orange-100">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Analytics</h3>
              <p className="text-sm text-gray-600">View detailed reports</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
