"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts"
import {
  Heart,
  Activity,
  Thermometer,
  Weight,
  Brain,
  Moon,
  Footprints,
  Target,
  TrendingUp,
  TrendingDown,
  Plus,
  AlertTriangle,
  CheckCircle,
  Download,
  Filter,
  BarChart3,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { motion } from "framer-motion"

export default function HealthMetricsPage() {
  const [selectedMetric, setSelectedMetric] = useState("bloodPressure")
  const [timeRange, setTimeRange] = useState("week")
  const [selectedGoal, setSelectedGoal] = useState(null)

  // Sample health data
  const bloodPressureData = [
    { date: "Jan 1", systolic: 120, diastolic: 80, time: "8:00 AM" },
    { date: "Jan 2", systolic: 118, diastolic: 78, time: "8:15 AM" },
    { date: "Jan 3", systolic: 122, diastolic: 82, time: "8:30 AM" },
    { date: "Jan 4", systolic: 119, diastolic: 79, time: "8:00 AM" },
    { date: "Jan 5", systolic: 121, diastolic: 81, time: "8:10 AM" },
    { date: "Jan 6", systolic: 117, diastolic: 77, time: "8:20 AM" },
    { date: "Jan 7", systolic: 120, diastolic: 80, time: "8:05 AM" },
  ]

  const heartRateData = [
    { date: "Jan 1", resting: 72, active: 145, max: 180 },
    { date: "Jan 2", resting: 70, active: 142, max: 175 },
    { date: "Jan 3", resting: 74, active: 148, max: 182 },
    { date: "Jan 4", resting: 71, active: 140, max: 178 },
    { date: "Jan 5", resting: 73, active: 146, max: 181 },
    { date: "Jan 6", resting: 69, active: 138, max: 176 },
    { date: "Jan 7", resting: 72, active: 144, max: 179 },
  ]

  const weightData = [
    { date: "Week 1", weight: 70.5, bmi: 23.1 },
    { date: "Week 2", weight: 70.2, bmi: 23.0 },
    { date: "Week 3", weight: 69.8, bmi: 22.9 },
    { date: "Week 4", weight: 69.5, bmi: 22.8 },
  ]

  const sleepData = [
    { date: "Jan 1", hours: 7.5, deep: 2.1, rem: 1.8, light: 3.6 },
    { date: "Jan 2", hours: 8.2, deep: 2.3, rem: 2.0, light: 3.9 },
    { date: "Jan 3", hours: 6.8, deep: 1.9, rem: 1.5, light: 3.4 },
    { date: "Jan 4", hours: 7.8, deep: 2.2, rem: 1.9, light: 3.7 },
    { date: "Jan 5", hours: 8.0, deep: 2.4, rem: 2.1, light: 3.5 },
    { date: "Jan 6", hours: 7.2, deep: 2.0, rem: 1.7, light: 3.5 },
    { date: "Jan 7", hours: 7.9, deep: 2.3, rem: 1.9, light: 3.7 },
  ]

  const activityData = [
    { date: "Jan 1", steps: 8500, calories: 2100, distance: 6.2 },
    { date: "Jan 2", steps: 9200, calories: 2250, distance: 6.8 },
    { date: "Jan 3", steps: 7800, calories: 1950, distance: 5.7 },
    { date: "Jan 4", steps: 10500, calories: 2400, distance: 7.8 },
    { date: "Jan 5", steps: 9800, calories: 2300, distance: 7.2 },
    { date: "Jan 6", steps: 8900, calories: 2150, distance: 6.5 },
    { date: "Jan 7", steps: 9600, calories: 2280, distance: 7.1 },
  ]

  const healthMetrics = [
    {
      id: "bloodPressure",
      name: "Blood Pressure",
      icon: Heart,
      color: "emerald",
      current: "120/80",
      unit: "mmHg",
      status: "normal",
      trend: "stable",
      change: "0%",
      target: "< 120/80",
      lastReading: "2 hours ago",
      data: bloodPressureData,
    },
    {
      id: "heartRate",
      name: "Heart Rate",
      icon: Activity,
      color: "red",
      current: "72",
      unit: "bpm",
      status: "normal",
      trend: "improving",
      change: "-2%",
      target: "60-100",
      lastReading: "1 hour ago",
      data: heartRateData,
    },
    {
      id: "weight",
      name: "Weight",
      icon: Weight,
      color: "blue",
      current: "69.5",
      unit: "kg",
      status: "normal",
      trend: "decreasing",
      change: "-1.4%",
      target: "68-72",
      lastReading: "1 day ago",
      data: weightData,
    },
    {
      id: "sleep",
      name: "Sleep",
      icon: Moon,
      color: "purple",
      current: "7.9",
      unit: "hours",
      status: "good",
      trend: "improving",
      change: "+5%",
      target: "7-9",
      lastReading: "Last night",
      data: sleepData,
    },
    {
      id: "steps",
      name: "Daily Steps",
      icon: Footprints,
      color: "orange",
      current: "9,600",
      unit: "steps",
      status: "good",
      trend: "stable",
      change: "+2%",
      target: "10,000",
      lastReading: "Today",
      data: activityData,
    },
    {
      id: "temperature",
      name: "Temperature",
      icon: Thermometer,
      color: "yellow",
      current: "98.6",
      unit: "°F",
      status: "normal",
      trend: "stable",
      change: "0%",
      target: "97-99",
      lastReading: "3 hours ago",
      data: [],
    },
  ]

  const healthGoals = [
    {
      id: 1,
      title: "Lose 5 kg",
      category: "Weight Management",
      target: 65,
      current: 69.5,
      unit: "kg",
      progress: 90,
      deadline: "March 2024",
      status: "on-track",
      icon: Weight,
    },
    {
      id: 2,
      title: "Walk 10,000 steps daily",
      category: "Physical Activity",
      target: 10000,
      current: 9600,
      unit: "steps",
      progress: 96,
      deadline: "Ongoing",
      status: "on-track",
      icon: Footprints,
    },
    {
      id: 3,
      title: "Sleep 8 hours nightly",
      category: "Sleep Quality",
      target: 8,
      current: 7.9,
      unit: "hours",
      progress: 98,
      deadline: "Ongoing",
      status: "excellent",
      icon: Moon,
    },
    {
      id: 4,
      title: "Lower blood pressure",
      category: "Cardiovascular Health",
      target: 115,
      current: 120,
      unit: "mmHg",
      progress: 75,
      deadline: "June 2024",
      status: "needs-attention",
      icon: Heart,
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "excellent":
        return "bg-green-100 text-green-800"
      case "good":
      case "normal":
      case "on-track":
        return "bg-emerald-100 text-emerald-800"
      case "needs-attention":
        return "bg-yellow-100 text-yellow-800"
      case "critical":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTrendIcon = (trend) => {
    switch (trend) {
      case "improving":
      case "increasing":
        return <TrendingUp className="h-4 w-4 text-green-500" />
      case "decreasing":
        return <TrendingDown className="h-4 w-4 text-red-500" />
      case "stable":
        return <div className="h-4 w-4 bg-gray-400 rounded-full" />
      default:
        return null
    }
  }

  const MetricCard = ({ metric }) => {
    const IconComponent = metric.icon
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        className="cursor-pointer"
        onClick={() => setSelectedMetric(metric.id)}
      >
        <Card
          className={`hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm ${
            selectedMetric === metric.id ? "ring-2 ring-emerald-500" : ""
          }`}
        >
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 bg-${metric.color}-100 rounded-xl`}>
                <IconComponent className={`h-6 w-6 text-${metric.color}-600`} />
              </div>
              <div className="flex items-center space-x-1">
                {getTrendIcon(metric.trend)}
                <span
                  className={`text-sm font-medium ${
                    metric.trend === "improving" || metric.trend === "stable" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {metric.change}
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">{metric.name}</h3>
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold text-gray-900">{metric.current}</span>
                <span className="text-sm text-gray-500">{metric.unit}</span>
              </div>
              <div className="flex items-center justify-between">
                <Badge className={`${getStatusColor(metric.status)} border-0 text-xs`}>{metric.status}</Badge>
                <span className="text-xs text-gray-500">{metric.lastReading}</span>
              </div>
              <div className="text-xs text-gray-600">
                Target: {metric.target} {metric.unit}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  const GoalCard = ({ goal }) => {
    const IconComponent = goal.icon
    return (
      <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <IconComponent className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                <p className="text-sm text-gray-600">{goal.category}</p>
              </div>
            </div>
            <Badge className={`${getStatusColor(goal.status)} border-0 text-xs`}>{goal.status.replace("-", " ")}</Badge>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Progress</span>
              <span className="font-medium">{goal.progress}%</span>
            </div>
            <Progress value={goal.progress} className="h-2" />
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">
                Current: {goal.current} {goal.unit}
              </span>
              <span className="text-gray-600">
                Target: {goal.target} {goal.unit}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">Deadline: {goal.deadline}</span>
              <Button variant="outline" size="sm" onClick={() => setSelectedGoal(goal)}>
                View Details
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const renderChart = () => {
    const selectedMetricData = healthMetrics.find((m) => m.id === selectedMetric)
    if (!selectedMetricData || !selectedMetricData.data.length) return null

    switch (selectedMetric) {
      case "bloodPressure":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={selectedMetricData.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="systolic" stroke="#10b981" strokeWidth={2} name="Systolic" />
              <Line type="monotone" dataKey="diastolic" stroke="#3b82f6" strokeWidth={2} name="Diastolic" />
            </LineChart>
          </ResponsiveContainer>
        )
      case "heartRate":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={selectedMetricData.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="max"
                stackId="1"
                stroke="#ef4444"
                fill="#ef4444"
                fillOpacity={0.3}
                name="Max HR"
              />
              <Area
                type="monotone"
                dataKey="active"
                stackId="2"
                stroke="#f59e0b"
                fill="#f59e0b"
                fillOpacity={0.5}
                name="Active HR"
              />
              <Line type="monotone" dataKey="resting" stroke="#10b981" strokeWidth={2} name="Resting HR" />
            </AreaChart>
          </ResponsiveContainer>
        )
      case "weight":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={selectedMetricData.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="weight" stroke="#3b82f6" strokeWidth={2} name="Weight (kg)" />
            </LineChart>
          </ResponsiveContainer>
        )
      case "sleep":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={selectedMetricData.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="deep" stackId="a" fill="#8b5cf6" name="Deep Sleep" />
              <Bar dataKey="rem" stackId="a" fill="#06b6d4" name="REM Sleep" />
              <Bar dataKey="light" stackId="a" fill="#10b981" name="Light Sleep" />
            </BarChart>
          </ResponsiveContainer>
        )
      case "steps":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={selectedMetricData.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="steps" fill="#f59e0b" name="Steps" />
            </BarChart>
          </ResponsiveContainer>
        )
      default:
        return null
    }
  }

  return (
    <DashboardLayout userRole="patient" userName="John Doe" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Health Metrics</h1>
            <p className="text-gray-600">Track and monitor your health data and progress towards your goals</p>
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              className="border-emerald-200 text-emerald-600 hover:bg-emerald-50 bg-transparent"
            >
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Metric
            </Button>
          </div>
        </div>

        {/* Health Overview Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthMetrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="trends" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-none lg:flex bg-white border shadow-sm">
            <TabsTrigger value="trends" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <BarChart3 className="h-4 w-4 mr-2" />
              Trends
            </TabsTrigger>
            <TabsTrigger value="goals" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <Target className="h-4 w-4 mr-2" />
              Goals
            </TabsTrigger>
            <TabsTrigger value="insights" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <Brain className="h-4 w-4 mr-2" />
              Insights
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trends" className="space-y-6">
            {/* Chart Controls */}
            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <Select value={selectedMetric} onValueChange={setSelectedMetric}>
                    <SelectTrigger className="w-full lg:w-64">
                      <SelectValue placeholder="Select metric" />
                    </SelectTrigger>
                    <SelectContent>
                      {healthMetrics.map((metric) => (
                        <SelectItem key={metric.id} value={metric.id}>
                          {metric.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger className="w-full lg:w-48">
                      <SelectValue placeholder="Time range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">Last Week</SelectItem>
                      <SelectItem value="month">Last Month</SelectItem>
                      <SelectItem value="quarter">Last 3 Months</SelectItem>
                      <SelectItem value="year">Last Year</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Chart Display */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {healthMetrics.find((m) => m.id === selectedMetric)?.icon && (
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      {React.createElement(healthMetrics.find((m) => m.id === selectedMetric).icon, {
                        className: "h-5 w-5 text-emerald-600",
                      })}
                    </div>
                  )}
                  <span>{healthMetrics.find((m) => m.id === selectedMetric)?.name} Trends</span>
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                    {timeRange.replace(/^\w/, (c) => c.toUpperCase())}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>{renderChart()}</CardContent>
            </Card>

            {/* Summary Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold mb-1">7.2</div>
                  <div className="text-sm opacity-90">Average</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">8.5</div>
                  <div className="text-sm text-gray-600">Best</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-red-600 mb-1">6.1</div>
                  <div className="text-sm text-gray-600">Lowest</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">+5%</div>
                  <div className="text-sm text-gray-600">Improvement</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {healthGoals.map((goal) => (
                <GoalCard key={goal.id} goal={goal} />
              ))}
            </div>

            {/* Goal Details Dialog */}
            <Dialog open={!!selectedGoal} onOpenChange={() => setSelectedGoal(null)}>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center space-x-2">
                    {selectedGoal?.icon &&
                      React.createElement(selectedGoal.icon, {
                        className: "h-5 w-5 text-emerald-600",
                      })}
                    <span>{selectedGoal?.title}</span>
                  </DialogTitle>
                  <DialogDescription>
                    {selectedGoal?.category} • Deadline: {selectedGoal?.deadline}
                  </DialogDescription>
                </DialogHeader>
                {selectedGoal && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">{selectedGoal.current}</div>
                        <div className="text-sm text-gray-600">Current</div>
                      </div>
                      <div className="text-center p-4 bg-emerald-50 rounded-lg">
                        <div className="text-2xl font-bold text-emerald-600">{selectedGoal.target}</div>
                        <div className="text-sm text-gray-600">Target</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{selectedGoal.progress}%</div>
                        <div className="text-sm text-gray-600">Progress</div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress to Goal</span>
                        <span>{selectedGoal.progress}%</span>
                      </div>
                      <Progress value={selectedGoal.progress} className="h-3" />
                    </div>
                    <div className="flex space-x-3">
                      <Button className="bg-emerald-600 hover:bg-emerald-700">Update Progress</Button>
                      <Button variant="outline">Edit Goal</Button>
                      <Button variant="outline">Share Progress</Button>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Health Achievements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Maintained healthy blood pressure for 30 days</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Improved sleep quality by 15% this month</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Reached step goal 6 out of 7 days this week</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-yellow-50 to-orange-50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    <span>Areas for Improvement</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Consider increasing daily water intake</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">Try to maintain consistent sleep schedule</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Monitor stress levels during busy periods</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-purple-600" />
                  <span>AI Health Insights</span>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    Powered by AI
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Weekly Health Summary</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Based on your recent health data, you're showing excellent progress in cardiovascular health and
                    sleep quality. Your blood pressure has remained stable, and your sleep duration has improved by 12%
                    compared to last month.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      92% Health Score
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Trending Up
                    </Badge>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Personalized Recommendations</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Continue your current exercise routine - it's showing great results
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Consider adding 15 minutes of meditation to improve stress management
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Your sleep pattern suggests you're a natural early riser - optimize accordingly
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
