"use client"

import { CardDescription } from "@/components/ui/card"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Users, Calendar, DollarSign, TrendingUp } from "lucide-react"

export default function AdminAnalyticsPage() {
  const [timeRange, setTimeRange] = useState("month")

  const platformActivityData = [
    { name: "Mon", patients: 150, doctors: 20, appointments: 30 },
    { name: "Tue", patients: 180, doctors: 22, appointments: 35 },
    { name: "Wed", patients: 160, doctors: 21, appointments: 28 },
    { name: "Thu", patients: 200, doctors: 25, appointments: 40 },
    { name: "Fri", patients: 170, doctors: 23, appointments: 32 },
    { name: "Sat", patients: 80, doctors: 10, appointments: 15 },
    { name: "Sun", patients: 50, doctors: 8, appointments: 10 },
  ]

  const revenueData = [
    { month: "Jan", revenue: 12000, expenses: 5000 },
    { month: "Feb", revenue: 15000, expenses: 6000 },
    { month: "Mar", revenue: 13000, expenses: 5500 },
    { month: "Apr", revenue: 17000, expenses: 7000 },
    { month: "May", revenue: 16000, expenses: 6500 },
    { month: "Jun", revenue: 19000, expenses: 7500 },
  ]

  const appointmentTypeData = [
    { name: "In-person", value: 600 },
    { name: "Video Call", value: 400 },
    { name: "Phone Call", value: 150 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]

  return (
    <DashboardLayout userRole="admin" userName="Admin User" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Analytics</h1>
            <p className="text-gray-600">Comprehensive insights into platform performance and operations</p>
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
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold text-gray-900">1,250</p>
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
                  <p className="text-sm font-medium text-gray-600">Total Appointments</p>
                  <p className="text-2xl font-bold text-green-600">1,150</p>
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
                  <p className="text-sm font-medium text-gray-600">Revenue (MTD)</p>
                  <p className="text-2xl font-bold text-purple-600">$15,000</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">New Registrations</p>
                  <p className="text-2xl font-bold text-yellow-600">85</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Platform Activity</CardTitle>
              <CardDescription>Daily active users, doctors, and appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  patients: { label: "Patients", color: "hsl(var(--chart-1))" },
                  doctors: { label: "Doctors", color: "hsl(var(--chart-2))" },
                  appointments: { label: "Appointments", color: "hsl(var(--chart-3))" },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={platformActivityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line type="monotone" dataKey="patients" stroke="var(--color-patients)" />
                    <Line type="monotone" dataKey="doctors" stroke="var(--color-doctors)" />
                    <Line type="monotone" dataKey="appointments" stroke="var(--color-appointments)" />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Monthly Revenue & Expenses</CardTitle>
              <CardDescription>Overview of financial performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  revenue: { label: "Revenue", color: "hsl(var(--chart-1))" },
                  expenses: { label: "Expenses", color: "hsl(var(--chart-2))" },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="revenue" fill="var(--color-revenue)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="expenses" fill="var(--color-expenses)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg lg:col-span-2">
            <CardHeader>
              <CardTitle>Appointment Type Distribution</CardTitle>
              <CardDescription>Breakdown of appointments by type</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <ChartContainer
                config={{
                  "In-person": { label: "In-person", color: "hsl(var(--chart-1))" },
                  "Video Call": { label: "Video Call", color: "hsl(var(--chart-2))" },
                  "Phone Call": { label: "Phone Call", color: "hsl(var(--chart-3))" },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={appointmentTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      nameKey="name"
                    >
                      {appointmentTypeData.map((entry, index) => (
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
        </div>
      </div>
    </DashboardLayout>
  )
}
