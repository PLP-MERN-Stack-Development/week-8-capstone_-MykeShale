"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  MessageCircle,
  Heart,
  Clock,
  MapPin,
  Phone,
  Video,
  Plus,
  Activity,
  TrendingUp,
  Brain,
  AlertTriangle,
  CheckCircle,
  Pill,
  Thermometer,
  Weight,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [healthScore, setHealthScore] = useState(85)

  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "General Practice",
      date: "Today",
      time: "2:30 PM",
      type: "Video call",
      clinic: "Community Health Center",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "confirmed",
      priority: "high",
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Cardiology",
      date: "Tomorrow",
      time: "10:00 AM",
      type: "In-person",
      clinic: "Heart Care Clinic",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "confirmed",
      priority: "medium",
    },
    {
      id: 3,
      doctor: "Dr. Emily Rodriguez",
      specialty: "Dermatology",
      date: "Dec 28",
      time: "3:00 PM",
      type: "Video call",
      clinic: "Skin Health Center",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "pending",
      priority: "low",
    },
  ]

  const healthMetrics = [
    {
      label: "Blood Pressure",
      value: "120/80",
      unit: "mmHg",
      status: "normal",
      trend: "stable",
      icon: Heart,
      color: "emerald",
      lastUpdated: "2 hours ago",
    },
    {
      label: "Heart Rate",
      value: "72",
      unit: "bpm",
      status: "normal",
      trend: "improving",
      icon: Activity,
      color: "blue",
      lastUpdated: "1 hour ago",
    },
    {
      label: "Temperature",
      value: "98.6",
      unit: "°F",
      status: "normal",
      trend: "stable",
      icon: Thermometer,
      color: "orange",
      lastUpdated: "3 hours ago",
    },
    {
      label: "Weight",
      value: "70",
      unit: "kg",
      status: "normal",
      trend: "decreasing",
      icon: Weight,
      color: "purple",
      lastUpdated: "1 day ago",
    },
  ]

  const medications = [
    {
      name: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      remaining: 15,
      total: 30,
      nextDose: "8:00 AM",
      prescribedBy: "Dr. Sarah Johnson",
    },
    {
      name: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      remaining: 8,
      total: 60,
      nextDose: "12:00 PM",
      prescribedBy: "Dr. Michael Chen",
    },
  ]

  const aiInsights = [
    {
      type: "recommendation",
      title: "Exercise Recommendation",
      message: "Based on your recent vitals, consider adding 30 minutes of light cardio to your routine.",
      confidence: 92,
      icon: TrendingUp,
    },
    {
      type: "alert",
      title: "Medication Reminder",
      message: "Your Lisinopril prescription will run out in 5 days. Schedule a refill appointment.",
      confidence: 100,
      icon: AlertTriangle,
    },
    {
      type: "insight",
      title: "Health Trend",
      message: "Your blood pressure has been consistently stable for the past month. Great job!",
      confidence: 88,
      icon: CheckCircle,
    },
  ]

  return (
    <DashboardLayout userRole="patient" userName="John Doe" userAvatar="/placeholder.svg?height=48&width=48">
      {/* Welcome Section with Health Score */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John! 👋</h1>
            <p className="text-gray-600">Here's your personalized health overview for today.</p>
          </div>
          <div className="mt-4 lg:mt-0">
            <Card className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full border-4 border-white/30 flex items-center justify-center">
                      <span className="text-2xl font-bold">{healthScore}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm opacity-90">Health Score</div>
                    <div className="text-lg font-semibold">Excellent</div>
                    <div className="text-xs opacity-75">+5 from last week</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-none lg:flex bg-white border shadow-sm">
          <TabsTrigger value="overview" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="appointments"
            className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
          >
            Appointments
          </TabsTrigger>
          <TabsTrigger value="health" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
            Health Records
          </TabsTrigger>
          <TabsTrigger
            value="medications"
            className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
          >
            Medications
          </TabsTrigger>
          <TabsTrigger value="insights" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
            AI Insights
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Quick Actions */}
          <div className="grid md:grid-cols-4 gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/book-appointment">
                <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-emerald-50 to-emerald-100 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Book Appointment</h3>
                    <p className="text-sm text-gray-600">Schedule with a doctor</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/messages">
                <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Messages</h3>
                    <p className="text-sm text-gray-600">Chat with doctors</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/telemedicine">
                <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Video className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telemedicine</h3>
                    <p className="text-sm text-gray-600">Video consultations</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/emergency">
                <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-red-50 to-red-100 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Emergency</h3>
                    <p className="text-sm text-gray-600">Get immediate help</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>

          {/* Health Metrics */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-emerald-600" />
                <span>Real-Time Health Monitoring</span>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                  Live
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {healthMetrics.map((metric, index) => {
                  const IconComponent = metric.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border"
                    >
                      <div
                        className={`w-12 h-12 bg-${metric.color}-500 rounded-full flex items-center justify-center mx-auto mb-3`}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        {metric.value}
                        <span className="text-sm text-gray-500 ml-1">{metric.unit}</span>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${
                          metric.status === "normal" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {metric.status}
                      </Badge>
                      <div className="text-xs text-gray-500 mt-1">{metric.lastUpdated}</div>
                    </motion.div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Upcoming Appointments */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-emerald-600" />
                  <span>Upcoming Appointments</span>
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-emerald-200 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Book New
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingAppointments.slice(0, 3).map((appointment, index) => (
                  <motion.div
                    key={appointment.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border hover:shadow-md transition-shadow"
                  >
                    <Avatar className="border-2 border-emerald-200">
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
                        <Badge variant="outline" className="text-xs">
                          {appointment.type === "Video call" ? (
                            <Video className="h-3 w-3 mr-1" />
                          ) : (
                            <MapPin className="h-3 w-3 mr-1" />
                          )}
                          {appointment.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge
                        variant={appointment.status === "confirmed" ? "default" : "secondary"}
                        className={appointment.status === "confirmed" ? "bg-green-500" : ""}
                      >
                        {appointment.status}
                      </Badge>
                      {appointment.type === "Video call" && appointment.date === "Today" && (
                        <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                          <Video className="h-3 w-3 mr-1" />
                          Join
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Medications */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Pill className="h-5 w-5 text-blue-600" />
                  <span>Current Medications</span>
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  View All
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {medications.map((medication, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-gradient-to-r from-blue-50 to-white rounded-xl border"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{medication.name}</h4>
                        <p className="text-sm text-gray-600">
                          {medication.dosage} • {medication.frequency}
                        </p>
                        <p className="text-xs text-gray-500">Prescribed by {medication.prescribedBy}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Next: {medication.nextDose}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Remaining</span>
                        <span className="font-medium">
                          {medication.remaining}/{medication.total} pills
                        </span>
                      </div>
                      <Progress value={(medication.remaining / medication.total) * 100} className="h-2" />
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-purple-600" />
                <span>AI-Powered Health Insights</span>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  Powered by AI
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {aiInsights.map((insight, index) => {
                const IconComponent = insight.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-white rounded-xl border shadow-sm"
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          insight.type === "alert"
                            ? "bg-yellow-100 text-yellow-600"
                            : insight.type === "recommendation"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-green-100 text-green-600"
                        }`}
                      >
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{insight.title}</h4>
                        <p className="text-gray-600 mb-2">{insight.message}</p>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {insight.confidence}% confidence
                          </Badge>
                          <span className="text-xs text-gray-500">AI Analysis</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}
