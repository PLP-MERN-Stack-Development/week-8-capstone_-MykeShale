"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Phone,
  MapPin,
  Clock,
  AlertTriangle,
  Heart,
  Zap,
  Shield,
  Users,
  Navigation,
  Siren,
  Activity,
  Brain,
  Stethoscope,
} from "lucide-react"
import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function EmergencyPage() {
  const [emergencyType, setEmergencyType] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [isEmergencyActive, setIsEmergencyActive] = useState(false)

  const emergencyContacts = [
    {
      name: "Emergency Services",
      number: "911",
      type: "emergency",
      description: "Police, Fire, Ambulance",
      icon: Siren,
      color: "red",
    },
    {
      name: "Poison Control",
      number: "1-800-222-1222",
      type: "poison",
      description: "24/7 Poison Emergency",
      icon: AlertTriangle,
      color: "orange",
    },
    {
      name: "Crisis Hotline",
      number: "988",
      type: "mental",
      description: "Mental Health Crisis",
      icon: Brain,
      color: "purple",
    },
    {
      name: "WellCare Emergency",
      number: "1-800-WELLCARE",
      type: "medical",
      description: "24/7 Medical Emergency",
      icon: Stethoscope,
      color: "blue",
    },
  ]

  const nearbyHospitals = [
    {
      name: "City General Hospital",
      address: "123 Main St, City, ST 12345",
      distance: "0.8 miles",
      waitTime: "15 min",
      phone: "(555) 123-4567",
      services: ["Emergency Room", "Trauma Center", "Cardiac Care"],
      rating: 4.5,
    },
    {
      name: "Regional Medical Center",
      address: "456 Oak Ave, City, ST 12345",
      distance: "1.2 miles",
      waitTime: "25 min",
      phone: "(555) 234-5678",
      services: ["Emergency Room", "Pediatric Care", "Surgery"],
      rating: 4.3,
    },
    {
      name: "Community Health Hospital",
      address: "789 Pine Rd, City, ST 12345",
      distance: "2.1 miles",
      waitTime: "20 min",
      phone: "(555) 345-6789",
      services: ["Emergency Room", "Maternity", "Orthopedics"],
      rating: 4.1,
    },
  ]

  const emergencyTypes = [
    {
      type: "cardiac",
      title: "Heart Emergency",
      icon: Heart,
      color: "red",
      symptoms: ["Chest pain", "Shortness of breath", "Irregular heartbeat", "Dizziness"],
    },
    {
      type: "stroke",
      title: "Stroke",
      icon: Brain,
      color: "purple",
      symptoms: ["Face drooping", "Arm weakness", "Speech difficulty", "Time to call 911"],
    },
    {
      type: "breathing",
      title: "Breathing Emergency",
      icon: Activity,
      color: "blue",
      symptoms: ["Severe shortness of breath", "Choking", "Asthma attack", "Allergic reaction"],
    },
    {
      type: "injury",
      title: "Severe Injury",
      icon: Zap,
      color: "orange",
      symptoms: ["Heavy bleeding", "Broken bones", "Head injury", "Burns"],
    },
    {
      type: "poisoning",
      title: "Poisoning",
      icon: AlertTriangle,
      color: "yellow",
      symptoms: ["Nausea/vomiting", "Difficulty breathing", "Confusion", "Unconsciousness"],
    },
    {
      type: "other",
      title: "Other Emergency",
      icon: Shield,
      color: "gray",
      symptoms: ["Severe pain", "High fever", "Seizure", "Loss of consciousness"],
    },
  ]

  const firstAidGuides = [
    {
      title: "CPR Instructions",
      icon: Heart,
      steps: [
        "Check responsiveness and breathing",
        "Call 911 immediately",
        "Place hands on center of chest",
        "Push hard and fast at least 2 inches deep",
        "Give 30 compressions at 100-120 per minute",
        "Give 2 rescue breaths",
        "Continue until help arrives",
      ],
    },
    {
      title: "Choking Relief",
      icon: Activity,
      steps: [
        "Encourage coughing if person is conscious",
        "Stand behind person, wrap arms around waist",
        "Make fist, place above navel",
        "Grasp fist with other hand",
        "Give quick upward thrusts",
        "Continue until object is expelled",
        "Call 911 if unsuccessful",
      ],
    },
    {
      title: "Severe Bleeding",
      icon: Zap,
      steps: [
        "Apply direct pressure to wound",
        "Use clean cloth or bandage",
        "Maintain pressure continuously",
        "Elevate injured area if possible",
        "Apply pressure to pressure points if needed",
        "Do not remove embedded objects",
        "Seek immediate medical attention",
      ],
    },
  ]

  const handleEmergencyCall = (number: string) => {
    // In a real app, this would initiate a phone call
    window.open(`tel:${number}`)
  }

  const handleEmergencyReport = () => {
    setIsEmergencyActive(true)
    // In a real app, this would send emergency data to services
    console.log("Emergency reported:", { emergencyType, location, description })
  }

  return (
    <DashboardLayout userRole="patient" userName="John Doe" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Emergency Alert */}
        {isEmergencyActive && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <Alert className="border-red-200 bg-red-50">
              <Siren className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">
                Emergency services have been notified. Help is on the way. Stay calm and follow any instructions given.
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Emergency Services</h1>
          <p className="text-gray-600">Get immediate help when you need it most</p>
        </div>

        {/* Emergency Call Buttons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {emergencyContacts.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className={`border-0 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl bg-gradient-to-br ${
                    contact.color === "red"
                      ? "from-red-50 to-red-100 hover:from-red-100 hover:to-red-200"
                      : contact.color === "orange"
                        ? "from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200"
                        : contact.color === "purple"
                          ? "from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200"
                          : contact.color === "blue"
                            ? "from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200"
                            : "from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200"
                  }`}
                  onClick={() => handleEmergencyCall(contact.number)}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                        contact.color === "red"
                          ? "bg-red-500"
                          : contact.color === "orange"
                            ? "bg-orange-500"
                            : contact.color === "purple"
                              ? "bg-purple-500"
                              : contact.color === "blue"
                                ? "bg-blue-500"
                                : "bg-gray-500"
                      }`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{contact.name}</h3>
                    <p className="text-2xl font-bold text-gray-900 mb-2">{contact.number}</p>
                    <p className="text-sm text-gray-600">{contact.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Emergency Report Form */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-red-600">
                <AlertTriangle className="h-5 w-5" />
                <span>Report Emergency</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="emergency-type">Emergency Type</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {emergencyTypes.map((type) => {
                    const IconComponent = type.icon
                    return (
                      <Button
                        key={type.type}
                        variant={emergencyType === type.type ? "default" : "outline"}
                        className={`h-auto p-3 flex flex-col items-center space-y-2 ${
                          emergencyType === type.type ? "bg-red-600 hover:bg-red-700" : ""
                        }`}
                        onClick={() => setEmergencyType(type.type)}
                      >
                        <IconComponent className="h-5 w-5" />
                        <span className="text-xs text-center">{type.title}</span>
                      </Button>
                    )
                  })}
                </div>
              </div>
              <div>
                <Label htmlFor="location">Current Location</Label>
                <div className="flex space-x-2 mt-1">
                  <Input
                    id="location"
                    placeholder="Enter your location or address"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <Button variant="outline" size="icon">
                    <Navigation className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the emergency situation..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                />
              </div>
              <Button
                className="w-full bg-red-600 hover:bg-red-700 text-white"
                onClick={handleEmergencyReport}
                disabled={!emergencyType || !location}
              >
                <Siren className="h-4 w-4 mr-2" />
                Report Emergency
              </Button>
            </CardContent>
          </Card>

          {/* Nearby Hospitals */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>Nearby Hospitals</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {nearbyHospitals.map((hospital, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-gray-50 rounded-lg border"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{hospital.name}</h4>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-yellow-600">★</span>
                      <span className="text-sm text-gray-600">{hospital.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{hospital.address}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{hospital.distance}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{hospital.waitTime} wait</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {hospital.services.map((service, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Navigation className="h-3 w-3 mr-1" />
                      Directions
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleEmergencyCall(hospital.phone)}>
                      <Phone className="h-3 w-3 mr-1" />
                      Call
                    </Button>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* First Aid Guides */}
        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span>First Aid Guides</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {firstAidGuides.map((guide, index) => {
                const IconComponent = guide.icon
                return (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border cursor-pointer hover:shadow-md transition-all"
                      >
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-3">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">{guide.title}</h4>
                        <p className="text-sm text-gray-600">Click for step-by-step instructions</p>
                      </motion.div>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-2">
                          <IconComponent className="h-5 w-5 text-green-600" />
                          <span>{guide.title}</span>
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-3">
                        {guide.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                              {stepIndex + 1}
                            </div>
                            <p className="text-sm text-gray-700">{step}</p>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-purple-600" />
              <span>Personal Emergency Contacts</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Doe (Spouse)</h4>
                  <p className="text-sm text-gray-600">(555) 123-4567</p>
                </div>
                <Button size="sm" variant="outline" onClick={() => handleEmergencyCall("5551234567")}>
                  <Phone className="h-3 w-3 mr-1" />
                  Call
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Dr. Sarah Johnson (Primary Care)</h4>
                  <p className="text-sm text-gray-600">(555) 234-5678</p>
                </div>
                <Button size="sm" variant="outline" onClick={() => handleEmergencyCall("5552345678")}>
                  <Phone className="h-3 w-3 mr-1" />
                  Call
                </Button>
              </div>
              <Button variant="outline" className="w-full border-dashed bg-transparent">
                <Users className="h-4 w-4 mr-2" />
                Add Emergency Contact
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
