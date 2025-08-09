"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  User,
  Shield,
  CreditCard,
  Activity,
  Calendar,
  FileText,
  Award,
  Star,
  Clock,
  MapPin,
  Phone,
  Mail,
  Edit,
  Camera,
  Key,
  Bell,
  Heart,
  TrendingUp,
  MessageCircle,
  Video,
  Pill,
  CheckCircle,
  AlertCircle,
  Crown,
  Gift,
} from "lucide-react"
import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function AccountCenterPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isEditing, setIsEditing] = useState(false)

  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, New York, NY 10001",
    memberSince: "January 2023",
    lastLogin: "2 hours ago",
    profileCompletion: 85,
    avatar: "/placeholder.svg?height=120&width=120",
    plan: "Premium",
    planExpiry: "Dec 31, 2024",
  }

  const accountStats = [
    {
      label: "Total Appointments",
      value: "24",
      icon: Calendar,
      color: "blue",
      trend: "+3 this month",
    },
    {
      label: "Health Records",
      value: "18",
      icon: FileText,
      color: "green",
      trend: "+2 this month",
    },
    {
      label: "Messages Sent",
      value: "156",
      icon: MessageCircle,
      color: "purple",
      trend: "+12 this week",
    },
    {
      label: "Video Calls",
      value: "8",
      icon: Video,
      color: "orange",
      trend: "+1 this week",
    },
  ]

  const recentActivity = [
    {
      type: "appointment",
      title: "Cardiology Consultation",
      description: "Completed appointment with Dr. Michael Chen",
      time: "2 hours ago",
      icon: Calendar,
      color: "blue",
    },
    {
      type: "message",
      title: "New Message",
      description: "Received message from Dr. Sarah Johnson",
      time: "1 day ago",
      icon: MessageCircle,
      color: "green",
    },
    {
      type: "record",
      title: "Lab Results",
      description: "Blood test results uploaded",
      time: "3 days ago",
      icon: FileText,
      color: "purple",
    },
    {
      type: "medication",
      title: "Prescription Refill",
      description: "Lisinopril prescription refilled",
      time: "1 week ago",
      icon: Pill,
      color: "orange",
    },
  ]

  const achievements = [
    {
      title: "Health Champion",
      description: "Completed 10 appointments",
      icon: Award,
      earned: true,
      date: "Nov 2024",
    },
    {
      title: "Medication Master",
      description: "100% medication adherence for 30 days",
      icon: Pill,
      earned: true,
      date: "Oct 2024",
    },
    {
      title: "Communication Pro",
      description: "Sent 100 messages to healthcare providers",
      icon: MessageCircle,
      earned: true,
      date: "Sep 2024",
    },
    {
      title: "Wellness Warrior",
      description: "Logged health metrics for 60 days",
      icon: Heart,
      earned: false,
      progress: 75,
    },
  ]

  const securitySettings = [
    {
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security",
      enabled: true,
      icon: Shield,
    },
    {
      title: "Login Alerts",
      description: "Get notified of new login attempts",
      enabled: true,
      icon: Bell,
    },
    {
      title: "Data Encryption",
      description: "Your data is encrypted at rest and in transit",
      enabled: true,
      icon: Key,
    },
  ]

  const billingInfo = {
    plan: "Premium",
    price: "$29.99/month",
    nextBilling: "Jan 15, 2025",
    paymentMethod: "•••• 4242",
    totalSpent: "$359.88",
  }

  return (
    <DashboardLayout userRole="patient" userName="John Doe" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Account Center</h1>
          <p className="text-gray-600">Manage your profile, security, and account preferences</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-none lg:flex bg-white border shadow-sm">
            <TabsTrigger value="overview" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <User className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <Edit className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <Shield className="h-4 w-4 mr-2" />
              Security
            </TabsTrigger>
            <TabsTrigger value="billing" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <CreditCard className="h-4 w-4 mr-2" />
              Billing
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
            >
              <Award className="h-4 w-4 mr-2" />
              Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Profile Summary */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-blue-50">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  <div className="relative">
                    <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                      <AvatarImage src={userProfile.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-3xl">
                        {userProfile.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full w-10 h-10 p-0">
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                      <h2 className="text-3xl font-bold text-gray-900">{userProfile.name}</h2>
                      <Badge className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
                        <Crown className="h-3 w-3 mr-1" />
                        {userProfile.plan}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>{userProfile.email}</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>{userProfile.phone}</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{userProfile.address}</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>Member since {userProfile.memberSince}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Profile Completion</span>
                        <span className="text-sm font-bold text-emerald-600">{userProfile.profileCompletion}%</span>
                      </div>
                      <Progress value={userProfile.profileCompletion} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Account Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accountStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center bg-${stat.color}-100`}
                          >
                            <IconComponent className={`h-6 w-6 text-${stat.color}-600`} />
                          </div>
                          <TrendingUp className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                          <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                          <p className="text-xs text-green-600 font-medium">{stat.trend}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Recent Activity */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-emerald-600" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => {
                    const IconComponent = activity.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center bg-${activity.color}-100`}
                        >
                          <IconComponent className={`h-5 w-5 text-${activity.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{activity.title}</h4>
                          <p className="text-sm text-gray-600">{activity.description}</p>
                        </div>
                        <span className="text-xs text-gray-500">{activity.time}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card className="border-0 shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-emerald-600" />
                  <span>Profile Information</span>
                </CardTitle>
                <Button variant="outline" onClick={() => setIsEditing(!isEditing)} className="bg-white">
                  <Edit className="h-4 w-4 mr-2" />
                  {isEditing ? "Cancel" : "Edit"}
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        defaultValue="John"
                        disabled={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        defaultValue="Doe"
                        disabled={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="john.doe@example.com"
                        disabled={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        defaultValue="+1 (555) 123-4567"
                        disabled={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        defaultValue="1985-06-15"
                        disabled={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        defaultValue="123 Main St"
                        disabled={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        defaultValue="New York"
                        disabled={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        defaultValue="10001"
                        disabled={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                  </div>
                </div>
                {isEditing && (
                  <div className="flex justify-end space-x-3">
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Save Changes</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-purple-600" />
                  <span>Security Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {securitySettings.map((setting, index) => {
                  const IconComponent = setting.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{setting.title}</h4>
                          <p className="text-sm text-gray-600">{setting.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {setting.enabled ? (
                          <Badge className="bg-green-100 text-green-700">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Enabled
                          </Badge>
                        ) : (
                          <Badge variant="secondary" className="bg-red-100 text-red-700">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            Disabled
                          </Badge>
                        )}
                        <Button variant="outline" size="sm">
                          Configure
                        </Button>
                      </div>
                    </motion.div>
                  )
                })}
                <Separator />
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Change Password</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div>
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Key className="h-4 w-4 mr-2" />
                    Update Password
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                  <span>Billing Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">Current Plan</h4>
                        <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                          <Crown className="h-3 w-3 mr-1" />
                          {billingInfo.plan}
                        </Badge>
                      </div>
                      <p className="text-2xl font-bold text-gray-900 mb-1">{billingInfo.price}</p>
                      <p className="text-sm text-gray-600">Next billing: {billingInfo.nextBilling}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Payment Method</h4>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center">
                          <CreditCard className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700">Visa {billingInfo.paymentMethod}</span>
                        <Button variant="outline" size="sm">
                          Update
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2">Total Spent</h4>
                      <p className="text-2xl font-bold text-green-700">{billingInfo.totalSpent}</p>
                      <p className="text-sm text-green-600">Since joining</p>
                    </div>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full bg-transparent">
                        <FileText className="h-4 w-4 mr-2" />
                        View Billing History
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        <Gift className="h-4 w-4 mr-2" />
                        Upgrade Plan
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-600" />
                  <span>Health Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-6 rounded-lg border-2 ${
                          achievement.earned
                            ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200"
                            : "bg-gray-50 border-gray-200"
                        }`}
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              achievement.earned ? "bg-yellow-500" : "bg-gray-400"
                            }`}
                          >
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                            <p className="text-sm text-gray-600">{achievement.description}</p>
                          </div>
                          {achievement.earned && (
                            <Badge className="bg-yellow-100 text-yellow-700">
                              <Star className="h-3 w-3 mr-1" />
                              Earned
                            </Badge>
                          )}
                        </div>
                        {achievement.earned ? (
                          <p className="text-sm text-gray-500">Earned in {achievement.date}</p>
                        ) : (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Progress</span>
                              <span className="font-medium">{achievement.progress}%</span>
                            </div>
                            <Progress value={achievement.progress} className="h-2" />
                          </div>
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
