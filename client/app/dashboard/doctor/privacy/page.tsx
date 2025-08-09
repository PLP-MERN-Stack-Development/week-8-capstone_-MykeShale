"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Shield, Lock, Bell } from "lucide-react"

export default function DoctorPrivacyPage() {
  const [privacySettings, setPrivacySettings] = useState({
    dataSharing: false,
    anonymousDataCollection: true,
    telemedicineRecordingConsent: true,
    messageReadReceipts: true,
    profileVisibility: "public",
  })

  const [securityAlerts, setSecurityAlerts] = useState({
    loginAlerts: true,
    suspiciousActivity: true,
    dataBreachNotifications: true,
  })

  const handlePrivacyChange = (id: string, checked: boolean) => {
    setPrivacySettings((prev) => ({ ...prev, [id]: checked }))
  }

  const handleProfileVisibilityChange = (value: string) => {
    setPrivacySettings((prev) => ({ ...prev, profileVisibility: value }))
  }

  const handleSecurityAlertChange = (id: string, checked: boolean) => {
    setSecurityAlerts((prev) => ({ ...prev, [id]: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Privacy Settings Saved:", privacySettings)
    console.log("Security Alerts Saved:", securityAlerts)
    // In a real application, you would send this data to your backend
  }

  return (
    <DashboardLayout userRole="doctor" userName="Dr. Sarah Johnson" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Privacy & Security</h1>
            <p className="text-gray-600">Manage your data privacy, security settings, and alerts</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={handleSubmit}>
            Save Changes
          </Button>
        </div>

        {/* Privacy Settings */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-emerald-600" />
              Privacy Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="dataSharing">Allow Data Sharing with Third Parties</Label>
              <Switch
                id="dataSharing"
                checked={privacySettings.dataSharing}
                onCheckedChange={(checked) => handlePrivacyChange("dataSharing", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="anonymousDataCollection">Allow Anonymous Data Collection for Research</Label>
              <Switch
                id="anonymousDataCollection"
                checked={privacySettings.anonymousDataCollection}
                onCheckedChange={(checked) => handlePrivacyChange("anonymousDataCollection", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="telemedicineRecordingConsent">Require Patient Consent for Telemedicine Recordings</Label>
              <Switch
                id="telemedicineRecordingConsent"
                checked={privacySettings.telemedicineRecordingConsent}
                onCheckedChange={(checked) => handlePrivacyChange("telemedicineRecordingConsent", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="messageReadReceipts">Enable Message Read Receipts</Label>
              <Switch
                id="messageReadReceipts"
                checked={privacySettings.messageReadReceipts}
                onCheckedChange={(checked) => handlePrivacyChange("messageReadReceipts", checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Security Alerts */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-emerald-600" />
              Security Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="loginAlerts">Email me about new logins</Label>
              <Switch
                id="loginAlerts"
                checked={securityAlerts.loginAlerts}
                onCheckedChange={(checked) => handleSecurityAlertChange("loginAlerts", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="suspiciousActivity">Notify me of suspicious activity</Label>
              <Switch
                id="suspiciousActivity"
                checked={securityAlerts.suspiciousActivity}
                onCheckedChange={(checked) => handleSecurityAlertChange("suspiciousActivity", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="dataBreachNotifications">Receive data breach notifications</Label>
              <Switch
                id="dataBreachNotifications"
                checked={securityAlerts.dataBreachNotifications}
                onCheckedChange={(checked) => handleSecurityAlertChange("dataBreachNotifications", checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Account Actions */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-emerald-600" />
              Account Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full bg-transparent">
              Change Password
            </Button>
            <Button
              variant="outline"
              className="w-full text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 bg-transparent"
            >
              Deactivate Account
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
