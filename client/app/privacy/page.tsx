"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Shield,
  Eye,
  Database,
  UserCheck,
  Download,
  Trash2,
  AlertTriangle,
  CheckCircle,
  Key,
  Monitor,
  Smartphone,
  Globe,
  Clock,
} from "lucide-react"
import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function PrivacySecurityPage() {
  const [activeTab, setActiveTab] = useState("privacy")
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: "private",
    shareHealthData: false,
    allowResearch: true,
    marketingEmails: false,
    dataCollection: true,
    thirdPartySharing: false,
  })

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    loginAlerts: true,
    sessionTimeout: "30",
    deviceTracking: true,
    passwordExpiry: "90",
    biometricAuth: false,
  })

  const [dataSettings, setDataSettings] = useState({
    dataRetention: "5years",
    autoBackup: true,
    encryptionLevel: "high",
    anonymizeData: true,
  })

  const connectedDevices = [
    {
      name: "iPhone 13 Pro",
      type: "Mobile",
      lastActive: "2 hours ago",
      location: "New York, NY",
      icon: Smartphone,
      trusted: true,
    },
    {
      name: "MacBook Pro",
      type: "Desktop",
      lastActive: "Currently active",
      location: "New York, NY",
      icon: Monitor,
      trusted: true,
    },
    {
      name: "Chrome Browser",
      type: "Web",
      lastActive: "1 day ago",
      location: "New York, NY",
      icon: Globe,
      trusted: false,
    },
  ]

  const handlePrivacyUpdate = (key: string, value: any) => {
    setPrivacySettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleSecurityUpdate = (key: string, value: any) => {
    setSecuritySettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleDataUpdate = (key: string, value: any) => {
    setDataSettings((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <DashboardLayout userRole="patient" userName="John Doe" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy & Security</h1>
          <p className="text-gray-600">Control your privacy settings and secure your account</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-none lg:flex bg-white border shadow-sm">
            <TabsTrigger value="privacy" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <Eye className="h-4 w-4 mr-2" />
              Privacy
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <Shield className="h-4 w-4 mr-2" />
              Security
            </TabsTrigger>
            <TabsTrigger value="data" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <Database className="h-4 w-4 mr-2" />
              Data
            </TabsTrigger>
            <TabsTrigger value="devices" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <Monitor className="h-4 w-4 mr-2" />
              Devices
            </TabsTrigger>
          </TabsList>

          <TabsContent value="privacy" className="space-y-6">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-blue-600" />
                  <span>Privacy Controls</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-base">Profile Visibility</Label>
                    <p className="text-sm text-gray-600 mb-2">Control who can see your profile information</p>
                    <Select
                      value={privacySettings.profileVisibility}
                      onValueChange={(value) => handlePrivacyUpdate("profileVisibility", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public - Anyone can see</SelectItem>
                        <SelectItem value="doctors-only">Doctors Only</SelectItem>
                        <SelectItem value="private">Private - Only you</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Share Health Data for Research</Label>
                      <p className="text-sm text-gray-600">
                        Allow anonymized health data to be used for medical research
                      </p>
                    </div>
                    <Switch
                      checked={privacySettings.shareHealthData}
                      onCheckedChange={(checked) => handlePrivacyUpdate("shareHealthData", checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Research Participation</Label>
                      <p className="text-sm text-gray-600">Allow participation in approved medical research studies</p>
                    </div>
                    <Switch
                      checked={privacySettings.allowResearch}
                      onCheckedChange={(checked) => handlePrivacyUpdate("allowResearch", checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Marketing Communications</Label>
                      <p className="text-sm text-gray-600">Receive promotional emails and updates about new features</p>
                    </div>
                    <Switch
                      checked={privacySettings.marketingEmails}
                      onCheckedChange={(checked) => handlePrivacyUpdate("marketingEmails", checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Usage Data Collection</Label>
                      <p className="text-sm text-gray-600">Help improve our services by sharing usage analytics</p>
                    </div>
                    <Switch
                      checked={privacySettings.dataCollection}
                      onCheckedChange={(checked) => handlePrivacyUpdate("dataCollection", checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Third-Party Data Sharing</Label>
                      <p className="text-sm text-gray-600">Allow sharing data with trusted healthcare partners</p>
                    </div>
                    <Switch
                      checked={privacySettings.thirdPartySharing}
                      onCheckedChange={(checked) => handlePrivacyUpdate("thirdPartySharing", checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span>Security Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Key className="h-5 w-5 text-gray-500" />
                      <div>
                        <Label className="text-base">Two-Factor Authentication</Label>
                        <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={securitySettings.twoFactorAuth}
                        onCheckedChange={(checked) => handleSecurityUpdate("twoFactorAuth", checked)}
                      />
                      {securitySettings.twoFactorAuth && (
                        <Badge className="bg-green-100 text-green-700">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Enabled
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="h-5 w-5 text-gray-500" />
                      <div>
                        <Label className="text-base">Login Alerts</Label>
                        <p className="text-sm text-gray-600">Get notified of new login attempts</p>
                      </div>
                    </div>
                    <Switch
                      checked={securitySettings.loginAlerts}
                      onCheckedChange={(checked) => handleSecurityUpdate("loginAlerts", checked)}
                    />
                  </div>
                  <Separator />
                  <div>
                    <Label className="text-base">Session Timeout</Label>
                    <p className="text-sm text-gray-600 mb-2">Automatically log out after inactivity</p>
                    <Select
                      value={securitySettings.sessionTimeout}
                      onValueChange={(value) => handleSecurityUpdate("sessionTimeout", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                        <SelectItem value="never">Never</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Monitor className="h-5 w-5 text-gray-500" />
                      <div>
                        <Label className="text-base">Device Tracking</Label>
                        <p className="text-sm text-gray-600">Track devices that access your account</p>
                      </div>
                    </div>
                    <Switch
                      checked={securitySettings.deviceTracking}
                      onCheckedChange={(checked) => handleSecurityUpdate("deviceTracking", checked)}
                    />
                  </div>
                  <Separator />
                  <div>
                    <Label className="text-base">Password Expiry</Label>
                    <p className="text-sm text-gray-600 mb-2">Require password change after specified days</p>
                    <Select
                      value={securitySettings.passwordExpiry}
                      onValueChange={(value) => handleSecurityUpdate("passwordExpiry", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="60">60 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                        <SelectItem value="180">180 days</SelectItem>
                        <SelectItem value="never">Never</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <UserCheck className="h-5 w-5 text-gray-500" />
                      <div>
                        <Label className="text-base">Biometric Authentication</Label>
                        <p className="text-sm text-gray-600">Use fingerprint or face recognition (mobile only)</p>
                      </div>
                    </div>
                    <Switch
                      checked={securitySettings.biometricAuth}
                      onCheckedChange={(checked) => handleSecurityUpdate("biometricAuth", checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="data" className="space-y-6">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5 text-purple-600" />
                  <span>Data Management</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-base">Data Retention Period</Label>
                    <p className="text-sm text-gray-600 mb-2">How long to keep your data after account deletion</p>
                    <Select
                      value={dataSettings.dataRetention}
                      onValueChange={(value) => handleDataUpdate("dataRetention", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1year">1 Year</SelectItem>
                        <SelectItem value="3years">3 Years</SelectItem>
                        <SelectItem value="5years">5 Years</SelectItem>
                        <SelectItem value="10years">10 Years</SelectItem>
                        <SelectItem value="permanent">Permanent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Automatic Backup</Label>
                      <p className="text-sm text-gray-600">Automatically backup your health data</p>
                    </div>
                    <Switch
                      checked={dataSettings.autoBackup}
                      onCheckedChange={(checked) => handleDataUpdate("autoBackup", checked)}
                    />
                  </div>
                  <Separator />
                  <div>
                    <Label className="text-base">Encryption Level</Label>
                    <p className="text-sm text-gray-600 mb-2">Level of encryption for your data</p>
                    <Select
                      value={dataSettings.encryptionLevel}
                      onValueChange={(value) => handleDataUpdate("encryptionLevel", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard (AES-128)</SelectItem>
                        <SelectItem value="high">High (AES-256)</SelectItem>
                        <SelectItem value="maximum">Maximum (AES-256 + RSA)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Data Anonymization</Label>
                      <p className="text-sm text-gray-600">Remove personal identifiers from shared data</p>
                    </div>
                    <Switch
                      checked={dataSettings.anonymizeData}
                      onCheckedChange={(checked) => handleDataUpdate("anonymizeData", checked)}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Data Actions</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h5 className="font-semibold text-blue-900 mb-2">Export Your Data</h5>
                      <p className="text-sm text-blue-700 mb-3">Download a complete copy of your health data</p>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Download className="h-4 w-4 mr-2" />
                        Export Data
                      </Button>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <h5 className="font-semibold text-red-900 mb-2">Delete All Data</h5>
                      <p className="text-sm text-red-700 mb-3">Permanently delete your account and all data</p>
                      <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="devices" className="space-y-6">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Monitor className="h-5 w-5 text-orange-600" />
                  <span>Connected Devices</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {connectedDevices.map((device, index) => {
                  const IconComponent = device.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-gray-600" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-gray-900">{device.name}</h4>
                            {device.trusted && (
                              <Badge className="bg-green-100 text-green-700">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Trusted
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{device.type}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{device.lastActive}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Globe className="h-3 w-3" />
                              <span>{device.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        {!device.trusted && (
                          <Button variant="outline" size="sm">
                            Trust Device
                          </Button>
                        )}
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                          Remove
                        </Button>
                      </div>
                    </motion.div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Security Recommendations */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <span>Security Recommendations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Enable two-factor authentication for better security</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Your password is strong and secure</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Consider reviewing connected devices regularly</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
