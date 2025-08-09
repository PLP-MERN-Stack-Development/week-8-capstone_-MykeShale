"use client"

import { Badge } from "@/components/ui/badge"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DashboardLayout } from "@/components/dashboard-layout"
import { User, CreditCard, History, Upload } from "lucide-react"

export default function DoctorAccountPage() {
  const [profile, setProfile] = useState({
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 987-6543",
    address: "456 Medical Plaza, Suite 200, Anytown, USA",
    specialty: "General Practice",
    license: "MD123456",
    bio: "Experienced general practitioner with a focus on preventive care and patient education. Dedicated to providing comprehensive and compassionate healthcare.",
    avatar: "/placeholder.svg?height=120&width=120",
  })

  const [paymentMethod, setPaymentMethod] = useState({
    cardType: "Visa",
    lastFour: "4242",
    expiry: "12/26",
  })

  const transactionHistory = [
    { id: 1, date: "2024-01-15", description: "Consultation Fee - John Smith", amount: "$50.00", status: "Completed" },
    { id: 2, date: "2024-01-10", description: "Subscription Renewal", amount: "$99.99", status: "Completed" },
    { id: 3, date: "2024-01-05", description: "Consultation Fee - Maria Garcia", amount: "$50.00", status: "Pending" },
  ]

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setProfile((prev) => ({ ...prev, [id]: value }))
  }

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setProfile((prev) => ({ ...prev, avatar: event.target?.result as string }))
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Profile Saved:", profile)
    // In a real application, you would send this data to your backend
  }

  return (
    <DashboardLayout userRole="doctor" userName="Dr. Sarah Johnson" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Account Center</h1>
            <p className="text-gray-600">Manage your personal information, payment methods, and history</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={handleSubmit}>
            Save Profile
          </Button>
        </div>

        {/* Profile Information */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-emerald-600" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-24 w-24 border-2 border-emerald-200">
                <AvatarImage src={profile.avatar || "/placeholder.svg"} />
                <AvatarFallback>
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <Button variant="outline" size="sm" className="relative bg-transparent">
                  <Upload className="h-4 w-4 mr-2" /> Upload New Photo
                  <Input
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleAvatarUpload}
                  />
                </Button>
                <p className="text-xs text-gray-500 mt-1">Max file size: 5MB</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={profile.name} onChange={handleProfileChange} />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={profile.email} onChange={handleProfileChange} disabled />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" value={profile.phone} onChange={handleProfileChange} />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" value={profile.address} onChange={handleProfileChange} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-emerald-600" />
              Payment Method
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">
                  {paymentMethod.cardType} ending in {paymentMethod.lastFour}
                </p>
                <p className="text-sm text-gray-600">Expires {paymentMethod.expiry}</p>
              </div>
              <Button variant="outline">Update Payment</Button>
            </div>
            <Separator />
            <Button variant="outline" className="w-full bg-transparent">
              Add New Payment Method
            </Button>
          </CardContent>
        </Card>

        {/* Transaction History */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-5 w-5 text-emerald-600" />
              Transaction History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactionHistory.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between border-b pb-3 last:border-b-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium text-gray-900">{transaction.description}</p>
                    <p className="text-sm text-gray-600">{transaction.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{transaction.amount}</p>
                    <Badge
                      variant="outline"
                      className={
                        transaction.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="link" className="mt-4 w-full">
              View All Transactions
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
