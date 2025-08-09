"use client"

import { CardDescription } from "@/components/ui/card"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Users, Clock, Heart, CheckCircle } from "lucide-react"

export default function DoctorAnalyticsPage() {
  const [timeRange, setTimeRange] = useState("month")

  const appointmentData = [
    { name: "Mon", appointments: 12, completed: 10, cancelled: 2 },
    { name: "Tue", appointments: 15, completed: 13, cancelled: 2 },
    { name: "Wed", appointments: 10, completed: 9, cancelled: 1 },
    { name: "Thu", appointments: 18, completed: 16, cancelled: 2 },
    { name: "Fri", appointments: 14, completed: 12, cancelled: 2 },
    { name: "Sat", appointments: 5, completed: 4, cancelled: 1 },
    { name: "Sun", appointments: 3, completed: 3, cancelled: 0 },
  ]

  const patientDemographics = [
    { name: "18-30", value: 120 },
    { name: "31-50", value: 250 },
    { name: "51-70", value: 180 },
    { name: "70+", value: 70 },
  ]

  const conditionData = [
    { name: "Hypertension", patients: 85 },
    { name: "Diabetes", patients: 60 },
    { name: "Asthma", patients: 40 },
    { name: "Anxiety", patients: 35 },
    { name: "Arthritis", patients: 25 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"]

  return (
    <DashboardLayout userRole="doctor" userName="Dr. Sarah Johnson" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Doctor Analytics</h1>
            <p className="text-gray-600">Insights into your practice performance and patient health trends</p>
          </div>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Last 24 Hours</SelectItem>
              <SelectItem value="week">Last 7 Days</SelectItem>
              <SelectItem value="month">Last 30 Days</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Patients</p>
                  <p className="text-2xl font-bold text-gray-900">620</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Appointments Completed</p>
                  <p className="text-2xl font-bold text-green-600">125</p>
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
                  <p className="text-sm font-medium text-gray-600">Average Consultation Time</p>
                  <p className="text-2xl font-bold text-purple-600">25 min</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Patient Satisfaction</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    4.9 <span className="text-lg font-normal">/ 5</span>
                  </p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Daily Appointments Overview</CardTitle>
              <CardDescription>Total, completed, and cancelled appointments over the last 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  appointments: { label: "Total Appointments", color: "hsl(var(--chart-1))" },
                  completed: { label: "Completed", color: "hsl(var(--chart-2))" },
                  cancelled: { label: "Cancelled", color: "hsl(var(--chart-3))" },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={appointmentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="appointments" fill="var(--color-appointments)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="completed" fill="var(--color-completed)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="cancelled" fill="var(--color-cancelled)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Patient Age Demographics</CardTitle>
              <CardDescription>Distribution of patients by age groups</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <ChartContainer
                config={{
                  "18-30": { label: "18-30", color: "hsl(var(--chart-1))" },
                  "31-50": { label: "31-50", color: "hsl(var(--chart-2))" },
                  "51-70": { label: "51-70", color: "hsl(var(--chart-3))" },
                  "70+": { label: "70+", color: "hsl(var(--chart-4))" },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={patientDemographics}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      nameKey="name"
                    >
                      {patientDemographics.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg lg:col-span-2">
            <CardHeader>
              <CardTitle>Top Medical Conditions</CardTitle>
              <CardDescription>Most common conditions among your patients</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  patients: { label: "Number of Patients", color: "hsl(var(--chart-1))" },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={conditionData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" width={120} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="patients" fill="var(--color-patients)" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
