"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Pill,
  Clock,
  Bell,
  Plus,
  Search,
  AlertTriangle,
  CheckCircle,
  XCircle,
  RefreshCw,
  User,
  Phone,
  MapPin,
  Star,
  Edit,
  Trash2,
  Download,
  Share,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function PatientMedicationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [selectedMedication, setSelectedMedication] = useState(null)
  const [reminderSettings, setReminderSettings] = useState({
    enabled: true,
    beforeTime: 30,
    method: "push",
  })

  const medications = [
    {
      id: 1,
      name: "Lisinopril",
      genericName: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      timeSlots: ["8:00 AM"],
      remaining: 15,
      total: 30,
      refillDate: "2024-01-25",
      prescribedBy: "Dr. Sarah Johnson",
      prescribedDate: "2024-01-02",
      pharmacy: "Community Pharmacy",
      pharmacyPhone: "+1 (555) 123-4567",
      status: "active",
      adherence: 95,
      sideEffects: ["Dizziness", "Dry cough"],
      instructions: "Take with or without food, preferably at the same time each day. Avoid potassium supplements.",
      indication: "High blood pressure",
      interactions: ["Potassium supplements", "NSAIDs"],
      cost: "$15.99",
      insurance: "Covered",
      nextDose: "Tomorrow 8:00 AM",
      missedDoses: 1,
      category: "Cardiovascular",
      strength: "10mg",
      manufacturer: "Generic Pharma",
      ndc: "12345-678-90",
      lotNumber: "ABC123",
      expiration: "2025-12-31",
    },
    {
      id: 2,
      name: "Metformin",
      genericName: "Metformin HCl",
      dosage: "500mg",
      frequency: "Twice daily",
      timeSlots: ["8:00 AM", "8:00 PM"],
      remaining: 8,
      total: 60,
      refillDate: "2024-01-20",
      prescribedBy: "Dr. Michael Chen",
      prescribedDate: "2023-12-15",
      pharmacy: "Health Plus Pharmacy",
      pharmacyPhone: "+1 (555) 234-5678",
      status: "low",
      adherence: 88,
      sideEffects: ["Nausea", "Stomach upset"],
      instructions: "Take with meals to reduce stomach upset. Do not crush or chew extended-release tablets.",
      indication: "Type 2 diabetes",
      interactions: ["Alcohol", "Contrast dyes"],
      cost: "$12.50",
      insurance: "Covered",
      nextDose: "Today 8:00 PM",
      missedDoses: 3,
      category: "Endocrine",
      strength: "500mg",
      manufacturer: "Diabetes Care Inc",
      ndc: "23456-789-01",
      lotNumber: "DEF456",
      expiration: "2025-08-15",
    },
    {
      id: 3,
      name: "Aspirin",
      genericName: "Acetylsalicylic acid",
      dosage: "81mg",
      frequency: "Once daily",
      timeSlots: ["8:00 AM"],
      remaining: 45,
      total: 90,
      refillDate: "2024-03-01",
      prescribedBy: "Dr. Sarah Johnson",
      prescribedDate: "2024-01-02",
      pharmacy: "Community Pharmacy",
      pharmacyPhone: "+1 (555) 123-4567",
      status: "active",
      adherence: 92,
      sideEffects: ["Stomach irritation"],
      instructions: "Take with food to reduce stomach irritation. Do not take if allergic to NSAIDs.",
      indication: "Cardiovascular protection",
      interactions: ["Warfarin", "Other blood thinners"],
      cost: "$8.99",
      insurance: "Covered",
      nextDose: "Tomorrow 8:00 AM",
      missedDoses: 2,
      category: "Cardiovascular",
      strength: "81mg",
      manufacturer: "Heart Health Co",
      ndc: "34567-890-12",
      lotNumber: "GHI789",
      expiration: "2026-01-30",
    },
    {
      id: 4,
      name: "Vitamin D3",
      genericName: "Cholecalciferol",
      dosage: "2000 IU",
      frequency: "Once daily",
      timeSlots: ["8:00 AM"],
      remaining: 22,
      total: 30,
      refillDate: "2024-02-10",
      prescribedBy: "Dr. Emily Rodriguez",
      prescribedDate: "2023-11-20",
      pharmacy: "Wellness Pharmacy",
      pharmacyPhone: "+1 (555) 345-6789",
      status: "active",
      adherence: 85,
      sideEffects: [],
      instructions: "Take with a meal containing fat for better absorption.",
      indication: "Vitamin D deficiency",
      interactions: ["Thiazide diuretics"],
      cost: "$18.75",
      insurance: "Not covered",
      nextDose: "Tomorrow 8:00 AM",
      missedDoses: 4,
      category: "Vitamins",
      strength: "2000 IU",
      manufacturer: "Vitamin Works",
      ndc: "45678-901-23",
      lotNumber: "JKL012",
      expiration: "2025-11-15",
    },
    {
      id: 5,
      name: "Omeprazole",
      genericName: "Omeprazole",
      dosage: "20mg",
      frequency: "Once daily",
      timeSlots: ["7:00 AM"],
      remaining: 0,
      total: 30,
      refillDate: "2024-01-15",
      prescribedBy: "Dr. James Wilson",
      prescribedDate: "2023-12-20",
      pharmacy: "Quick Care Pharmacy",
      pharmacyPhone: "+1 (555) 456-7890",
      status: "expired",
      adherence: 78,
      sideEffects: ["Headache", "Diarrhea"],
      instructions: "Take before breakfast on an empty stomach. Do not crush or chew capsules.",
      indication: "Acid reflux (GERD)",
      interactions: ["Clopidogrel", "Warfarin"],
      cost: "$22.30",
      insurance: "Covered",
      nextDose: "Refill needed",
      missedDoses: 8,
      category: "Gastrointestinal",
      strength: "20mg",
      manufacturer: "Stomach Relief Ltd",
      ndc: "56789-012-34",
      lotNumber: "MNO345",
      expiration: "2024-12-01",
    },
  ]

  const filteredMedications = medications.filter((medication) => {
    const matchesSearch =
      medication.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      medication.genericName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      medication.prescribedBy.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = filterStatus === "all" || medication.status === filterStatus

    return matchesSearch && matchesStatus
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "low":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "expired":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "low":
        return "bg-yellow-100 text-yellow-800"
      case "expired":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const activeMedications = medications.filter((med) => med.status === "active")
  const lowStockMedications = medications.filter((med) => med.status === "low")
  const expiredMedications = medications.filter((med) => med.status === "expired")

  const medicationStats = {
    total: medications.length,
    active: activeMedications.length,
    lowStock: lowStockMedications.length,
    expired: expiredMedications.length,
    averageAdherence: Math.round(medications.reduce((sum, med) => sum + med.adherence, 0) / medications.length),
  }

  const upcomingDoses = [
    { medication: "Lisinopril", time: "8:00 AM", status: "upcoming" },
    { medication: "Aspirin", time: "8:00 AM", status: "upcoming" },
    { medication: "Vitamin D3", time: "8:00 AM", status: "upcoming" },
    { medication: "Metformin", time: "8:00 PM", status: "upcoming" },
  ]

  const MedicationCard = ({ medication }) => (
    <div className="group">
      <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4 flex-1">
              <div className="p-3 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-xl">
                <Pill className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{medication.name}</h3>
                  <Badge className={`${getStatusColor(medication.status)} border-0 text-xs`}>{medication.status}</Badge>
                </div>
                <p className="text-gray-600 mb-1">
                  {medication.genericName} • {medication.dosage}
                </p>
                <p className="text-emerald-600 font-medium mb-2">{medication.frequency}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{medication.prescribedBy}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{medication.pharmacy}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Remaining</span>
                    <span className="font-medium">
                      {medication.remaining}/{medication.total} pills
                    </span>
                  </div>
                  <Progress value={(medication.remaining / medication.total) * 100} className="h-2" />
                </div>

                {/* Adherence */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm text-gray-600">Adherence:</span>
                    <span
                      className={`text-sm font-medium ${
                        medication.adherence >= 90
                          ? "text-green-600"
                          : medication.adherence >= 80
                            ? "text-yellow-600"
                            : "text-red-600"
                      }`}
                    >
                      {medication.adherence}%
                    </span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Next: {medication.nextDose}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-3">
              <div className="flex items-center space-x-2">
                {getStatusIcon(medication.status)}
                <span className="text-sm font-medium">
                  {medication.status === "low" ? "Refill Soon" : medication.status === "expired" ? "Expired" : "Active"}
                </span>
              </div>
              <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" onClick={() => setSelectedMedication(medication)}>
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="flex items-center space-x-2">
                        <Pill className="h-5 w-5 text-emerald-600" />
                        <span>{medication.name}</span>
                      </DialogTitle>
                      <DialogDescription>Complete medication information and management</DialogDescription>
                    </DialogHeader>
                    {selectedMedication && (
                      <div className="space-y-6">
                        {/* Basic Information */}
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-3">Medication Details</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Brand Name:</span>
                                <span>{selectedMedication.name}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Generic Name:</span>
                                <span>{selectedMedication.genericName}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Strength:</span>
                                <span>{selectedMedication.strength}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Dosage:</span>
                                <span>{selectedMedication.dosage}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Frequency:</span>
                                <span>{selectedMedication.frequency}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Category:</span>
                                <span>{selectedMedication.category}</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-3">Prescription Info</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Prescribed By:</span>
                                <span>{selectedMedication.prescribedBy}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Prescribed Date:</span>
                                <span>{selectedMedication.prescribedDate}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Indication:</span>
                                <span>{selectedMedication.indication}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">NDC Number:</span>
                                <span>{selectedMedication.ndc}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Lot Number:</span>
                                <span>{selectedMedication.lotNumber}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Expiration:</span>
                                <span>{selectedMedication.expiration}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Supply Information */}
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3">Supply Status</h4>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="bg-gray-50 p-4 rounded-lg text-center">
                              <div className="text-2xl font-bold text-gray-900">{selectedMedication.remaining}</div>
                              <div className="text-sm text-gray-600">Pills Remaining</div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg text-center">
                              <div className="text-2xl font-bold text-gray-900">{selectedMedication.total}</div>
                              <div className="text-sm text-gray-600">Total Pills</div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg text-center">
                              <div className="text-2xl font-bold text-gray-900">{selectedMedication.adherence}%</div>
                              <div className="text-sm text-gray-600">Adherence Rate</div>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="flex justify-between text-sm mb-2">
                              <span>Supply Progress</span>
                              <span>
                                {selectedMedication.remaining}/{selectedMedication.total}
                              </span>
                            </div>
                            <Progress
                              value={(selectedMedication.remaining / selectedMedication.total) * 100}
                              className="h-3"
                            />
                          </div>
                        </div>

                        {/* Instructions */}
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3">Instructions</h4>
                          <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">{selectedMedication.instructions}</p>
                        </div>

                        {/* Side Effects */}
                        {selectedMedication.sideEffects.length > 0 && (
                          <div>
                            <h4 className="font-medium text-gray-900 mb-3">Possible Side Effects</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedMedication.sideEffects.map((effect, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {effect}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Drug Interactions */}
                        {selectedMedication.interactions.length > 0 && (
                          <div>
                            <h4 className="font-medium text-gray-900 mb-3">Drug Interactions</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedMedication.interactions.map((interaction, index) => (
                                <Badge key={index} variant="outline" className="text-xs bg-yellow-50 text-yellow-700">
                                  {interaction}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Pharmacy Information */}
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3">Pharmacy Information</h4>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="font-medium">{selectedMedication.pharmacy}</div>
                                <div className="text-sm text-gray-600">{selectedMedication.pharmacyPhone}</div>
                                <div className="text-sm text-gray-600 mt-1">
                                  Cost: {selectedMedication.cost} • {selectedMedication.insurance}
                                </div>
                              </div>
                              <Button variant="outline" size="sm">
                                <Phone className="h-4 w-4 mr-1" />
                                Call
                              </Button>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3 pt-4 border-t">
                          {selectedMedication.status === "low" && (
                            <Button className="bg-emerald-600 hover:bg-emerald-700">
                              <RefreshCw className="h-4 w-4 mr-2" />
                              Request Refill
                            </Button>
                          )}
                          <Button variant="outline">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Reminder
                          </Button>
                          <Button variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download Info
                          </Button>
                          <Button variant="outline">
                            <Share className="h-4 w-4 mr-2" />
                            Share with Doctor
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Discontinue
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Discontinue Medication?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to discontinue {selectedMedication.name}? This action should
                                  only be done under medical supervision.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction className="bg-red-600 hover:bg-red-700">
                                  Discontinue
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
                {medication.status === "low" && (
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                    <RefreshCw className="h-3 w-3 mr-1" />
                    Refill
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <DashboardLayout userRole="patient" userName="John Doe" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Medications</h1>
            <p className="text-gray-600">Manage your prescriptions and medication schedule</p>
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              className="border-emerald-200 text-emerald-600 hover:bg-emerald-50 bg-transparent"
            >
              <Bell className="h-4 w-4 mr-2" />
              Reminders
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Medication
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-5 gap-4">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm">Total Medications</p>
                  <p className="text-3xl font-bold">{medicationStats.total}</p>
                </div>
                <Pill className="h-8 w-8 text-emerald-200" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Active</p>
                  <p className="text-3xl font-bold text-green-600">{medicationStats.active}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Low Stock</p>
                  <p className="text-3xl font-bold text-yellow-600">{medicationStats.lowStock}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Expired</p>
                  <p className="text-3xl font-bold text-red-600">{medicationStats.expired}</p>
                </div>
                <XCircle className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Adherence</p>
                  <p className="text-3xl font-bold text-blue-600">{medicationStats.averageAdherence}%</p>
                </div>
                <Star className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Today's Schedule */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-emerald-600" />
              <span>Today's Medication Schedule</span>
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                {upcomingDoses.length} doses
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {upcomingDoses.map((dose, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{dose.medication}</h4>
                    <Badge variant="outline" className="text-xs">
                      {dose.time}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-xs">
                      Mark Taken
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs bg-transparent">
                      Skip
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search medications, doctors, or pharmacies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="low">Low Stock</SelectItem>
                  <SelectItem value="expired">Expired</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Medications Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-none lg:flex bg-white border shadow-sm">
            <TabsTrigger value="all" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              All ({filteredMedications.length})
            </TabsTrigger>
            <TabsTrigger value="active" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Active ({activeMedications.length})
            </TabsTrigger>
            <TabsTrigger value="low" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Low Stock ({lowStockMedications.length})
            </TabsTrigger>
            <TabsTrigger value="expired" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Expired ({expiredMedications.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {filteredMedications.map((medication) => (
              <MedicationCard key={medication.id} medication={medication} />
            ))}
            {filteredMedications.length === 0 && (
              <Card className="border-0 shadow-sm">
                <CardContent className="p-12 text-center">
                  <Pill className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No medications found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="active" className="space-y-4">
            {activeMedications.map((medication) => (
              <MedicationCard key={medication.id} medication={medication} />
            ))}
          </TabsContent>

          <TabsContent value="low" className="space-y-4">
            {lowStockMedications.map((medication) => (
              <MedicationCard key={medication.id} medication={medication} />
            ))}
            {lowStockMedications.length === 0 && (
              <Card className="border-0 shadow-sm">
                <CardContent className="p-12 text-center">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">All medications well stocked</h3>
                  <p className="text-gray-600">No medications need refilling at this time</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="expired" className="space-y-4">
            {expiredMedications.map((medication) => (
              <MedicationCard key={medication.id} medication={medication} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
