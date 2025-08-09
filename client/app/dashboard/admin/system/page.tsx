"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Activity,
  Server,
  Cpu,
  MemoryStickIcon as Memory,
  Network,
  Database,
  AlertTriangle,
  CheckCircle,
  Users,
  XCircle,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function AdminSystemPage() {
  const [systemHealth, setSystemHealth] = useState({
    cpuUsage: 35,
    memoryUsage: 60,
    networkTraffic: 150,
    databaseLoad: 40,
    uptime: "24 days, 10 hours",
    lastBackup: "2024-01-14",
    activeUsers: 125,
    doctorsOnline: 15,
    patientsOnline: 80,
  })

  const [recentEvents, setRecentEvents] = useState([
    {
      id: 1,
      type: "User Login",
      description: "John Smith logged in",
      timestamp: "2024-01-15 08:30 AM",
      status: "success",
    },
    {
      id: 2,
      type: "Database Backup",
      description: "Scheduled database backup completed",
      timestamp: "2024-01-15 06:00 AM",
      status: "success",
    },
    {
      id: 3,
      type: "High CPU Usage",
      description: "CPU usage exceeded 80%",
      timestamp: "2024-01-14 11:45 PM",
      status: "warning",
    },
    {
      id: 4,
      type: "New Doctor Added",
      description: "Dr. Sarah Johnson added to the system",
      timestamp: "2024-01-14 02:15 PM",
      status: "success",
    },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-100 text-green-800"
      case "warning":
        return "bg-yellow-100 text-yellow-800"
      case "error":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "error":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <CheckCircle className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <DashboardLayout userRole="admin" userName="Admin User" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">System Health</h1>
            <p className="text-gray-600">Monitor the health and performance of the platform</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">Run System Diagnostics</Button>
        </div>

        {/* System Health Metrics */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">CPU Usage</p>
                  <p className="text-2xl font-bold text-gray-900">{systemHealth.cpuUsage}%</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Cpu className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Memory Usage</p>
                  <p className="text-2xl font-bold text-green-600">{systemHealth.memoryUsage}%</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Memory className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Network Traffic</p>
                  <p className="text-2xl font-bold text-purple-600">{systemHealth.networkTraffic} Mbps</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Network className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Database Load</p>
                  <p className="text-2xl font-bold text-yellow-600">{systemHealth.databaseLoad}%</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Database className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5 text-emerald-600" />
                System Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-600">Uptime</p>
                <p className="text-sm text-gray-900">{systemHealth.uptime}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-600">Last Backup</p>
                <p className="text-sm text-gray-900">{systemHealth.lastBackup}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-emerald-600" />
                Active Users
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-600">Total Active Users</p>
                <p className="text-sm text-gray-900">{systemHealth.activeUsers}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-600">Doctors Online</p>
                <p className="text-sm text-gray-900">{systemHealth.doctorsOnline}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-600">Patients Online</p>
                <p className="text-sm text-gray-900">{systemHealth.patientsOnline}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Events */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-emerald-600" />
              Recent Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{event.description}</p>
                    <p className="text-sm text-gray-600">{event.timestamp}</p>
                  </div>
                  <Badge className={`${getStatusColor(event.status)} border-0`}>
                    {getStatusIcon(event.status)}
                    {event.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
