"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Shield, Bell } from "lucide-react"

export default function AdminSecurityPage() {
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    dataEncryption: true,
    accessControl: true,
    auditLogging: true,
  })

  const [alertSettings, setAlertSettings] = useState({
    loginAlerts: true,
    suspiciousActivity: true,
    dataBreachNotifications: true,
    systemHealthAlerts: true,
  })

  const handleSecurityChange = (id: string, checked: boolean) => {
    setSecuritySettings((prev) => ({ ...prev, [id]: checked }))
  }

  const handleAlertChange = (id: string, checked: boolean) => {
    setAlertSettings((prev) => ({ ...prev, [id]: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Security Settings Saved:", securitySettings)
    console.log("Alert Settings Saved:", alertSettings)
    // In a real application, you would send this data to your backend
  }

  return (
    <DashboardLayout userRole="admin" userName="Admin User" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">System Security</h1>
            <p className="text-gray-600">Manage platform security settings and alerts</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={handleSubmit}>
            Save Changes
          </Button>
        </div>

        {/* Security Settings */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-emerald-600" />
              Security Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="twoFactorAuth">Enable Two-Factor Authentication for All Users</Label>
              <Switch
                id="twoFactorAuth"
                checked={securitySettings.twoFactorAuth}
                onCheckedChange={(checked) => handleSecurityChange("twoFactorAuth", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="dataEncryption">Enable Data Encryption at Rest and in Transit</Label>
              <Switch
                id="dataEncryption"
                checked={securitySettings.dataEncryption}
                onCheckedChange={(checked) => handleSecurityChange("dataEncryption", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="accessControl">Implement Role-Based Access Control</Label>
              <Switch
                id="accessControl"
                checked={securitySettings.accessControl}
                onCheckedChange={(checked) => handleSecurityChange("accessControl", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="auditLogging">Enable Audit Logging for All System Activities</Label>
              <Switch
                id="auditLogging"
                checked={securitySettings.auditLogging}
                onCheckedChange={(checked) => handleSecurityChange("auditLogging", checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Alert Settings */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-emerald-600" />
              Alert Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="loginAlerts">Send alerts for new logins</Label>
              <Switch
                id="loginAlerts"
                checked={alertSettings.loginAlerts}
                onCheckedChange={(checked) => handleAlertChange("loginAlerts", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="suspiciousActivity">Notify about suspicious activity</Label>
              <Switch
                id="suspiciousActivity"
                checked={alertSettings.suspiciousActivity}
                onCheckedChange={(checked) => handleAlertChange("suspiciousActivity", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="dataBreachNotifications">Alert about data breach notifications</Label>
              <Switch
                id="dataBreachNotifications"
                checked={alertSettings.dataBreachNotifications}
                onCheckedChange={(checked) => handleAlertChange("dataBreachNotifications", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="systemHealthAlerts">Send alerts for system health issues</Label>
              <Switch
                id="systemHealthAlerts"
                checked={alertSettings.systemHealthAlerts}
                onCheckedChange={(checked) => handleAlertChange("systemHealthAlerts", checked)}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
