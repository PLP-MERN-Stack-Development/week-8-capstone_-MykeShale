"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { DashboardLayout } from "@/components/dashboard-layout"
import { User, Lock, Bell, Globe } from "lucide-react"

export default function DoctorSettingsPage() {
  const [profile, setProfile] = useState({
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 987-6543",
    address: "456 Medical Plaza, Suite 200, Anytown, USA",
    specialty: "General Practice",
    license: "MD123456",
    bio: "Experienced general practitioner with a focus on preventive care and patient education. Dedicated to providing comprehensive and compassionate healthcare.",
  })

  const [notifications, setNotifications] = useState({
    appointmentReminders: true,
    newMessages: true,
    patientUpdates: false,
    billingAlerts: true,
  })

  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    passwordLastChanged: "2024-01-01",
  })

  const [preferences, setPreferences] = useState({
    language: "en",
    theme: "system",
    timeZone: "America/New_York",
    defaultConsultationType: "video",
  })

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setProfile((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (id: string, value: string) => {
    if (id === "specialty") {
      setProfile((prev) => ({ ...prev, specialty: value }))
    } else if (id === "language") {
      setPreferences((prev) => ({ ...prev, language: value }))
    } else if (id === "theme") {
      setPreferences((prev) => ({ ...prev, theme: value }))
    } else if (id === "timeZone") {
      setPreferences((prev) => ({ ...prev, timeZone: value }))
    } else if (id === "defaultConsultationType") {
      setPreferences((prev) => ({ ...prev, defaultConsultationType: value }))
    }
  }

  const handleNotificationChange = (id: string, checked: boolean) => {
    setNotifications((prev) => ({ ...prev, [id]: checked }))
  }

  const handleSecurityChange = (id: string, checked: boolean) => {
    setSecurity((prev) => ({ ...prev, [id]: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Profile Saved:", profile)
    console.log("Notifications Saved:", notifications)
    console.log("Security Saved:", security)
    console.log("Preferences Saved:", preferences)
    // In a real application, you would send this data to your backend
  }

  return (
    <DashboardLayout userRole="doctor" userName="Dr. Sarah Johnson" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600">Manage your profile, preferences, and account settings</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={handleSubmit}>
            Save Changes
          </Button>
        </div>

        {/* Profile Settings */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-emerald-600" />
              Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
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
                <Label htmlFor="specialty">Specialty</Label>
                <Select value={profile.specialty} onValueChange={(value) => handleSelectChange("specialty", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="General Practice">General Practice</SelectItem>
                    <SelectItem value="Cardiology">Cardiology</SelectItem>
                    <SelectItem value="Pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="Dermatology">Dermatology</SelectItem>
                    <SelectItem value="Neurology">Neurology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input id="address" value={profile.address} onChange={handleProfileChange} />
            </div>
            <div>
              <Label htmlFor="bio">Biography</Label>
              <Textarea id="bio" value={profile.bio} onChange={handleProfileChange} rows={4} />
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-emerald-600" />
              Notification Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="appointmentReminders">Appointment Reminders</Label>
              <Switch
                id="appointmentReminders"
                checked={notifications.appointmentReminders}
                onCheckedChange={(checked) => handleNotificationChange("appointmentReminders", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="newMessages">New Messages</Label>
              <Switch
                id="newMessages"
                checked={notifications.newMessages}
                onCheckedChange={(checked) => handleNotificationChange("newMessages", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="patientUpdates">Patient Updates</Label>
              <Switch
                id="patientUpdates"
                checked={notifications.patientUpdates}
                onCheckedChange={(checked) => handleNotificationChange("patientUpdates", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="billingAlerts">Billing Alerts</Label>
              <Switch
                id="billingAlerts"
                checked={notifications.billingAlerts}
                onCheckedChange={(checked) => handleNotificationChange("billingAlerts", checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-emerald-600" />
              Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="twoFactorAuth">Two-Factor Authentication</Label>
              <Switch
                id="twoFactorAuth"
                checked={security.twoFactorAuth}
                onCheckedChange={(checked) => handleSecurityChange("twoFactorAuth", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label>Password</Label>
                <p className="text-sm text-gray-600">Last changed: {security.passwordLastChanged}</p>
              </div>
              <Button variant="outline">Change Password</Button>
            </div>
          </CardContent>
        </Card>

        {/* General Preferences */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-emerald-600" />
              General Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="language">Language</Label>
              <Select value={preferences.language} onValueChange={(value) => handleSelectChange("language", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="theme">Theme</Label>
              <Select value={preferences.theme} onValueChange={(value) => handleSelectChange("theme", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="timeZone">Time Zone</Label>
              <Select value={preferences.timeZone} onValueChange={(value) => handleSelectChange("timeZone", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time zone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="America/New_York">America/New_York</SelectItem>
                  <SelectItem value="America/Chicago">America/Chicago</SelectItem>
                  <SelectItem value="America/Denver">America/Denver</SelectItem>
                  <SelectItem value="America/Los_Angeles">America/Los_Angeles</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="defaultConsultationType">Default Consultation Type</Label>
              <Select
                value={preferences.defaultConsultationType}
                onValueChange={(value) => handleSelectChange("defaultConsultationType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select default type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="video">Video Call</SelectItem>
                  <SelectItem value="in-person">In-person</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
