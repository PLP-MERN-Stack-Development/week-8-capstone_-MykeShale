"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
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
  Search,
  Plus,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Calendar,
  Clock,
  Pill,
  CheckCircle,
  AlertCircle,
  XCircle,
  Printer,
  Download,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function DoctorPrescriptionsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [selectedPrescription, setSelectedPrescription] = useState(null)

  const prescriptions = [
    {
      id: 1,
      patientName: "John Smith",
      medication: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      startDate: "2024-01-01",
      endDate: "2024-03-31",
      status: "active",
      refills: 2,
      notes: "For hypertension. Monitor blood pressure regularly.",
      prescribedBy: "Dr. Sarah Johnson",
      pharmacy: "CVS Pharmacy",
      lastRefill: "2024-01-15",
      nextRefillDue: "2024-02-15",
    },
    {
      id: 2,
      patientName: "Maria Garcia",
      medication: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      startDate: "2023-12-10",
      endDate: "2024-06-10",
      status: "active",
      refills: 5,
      notes: "For Diabetes Type 2. Take with meals.",
      prescribedBy: "Dr. Sarah Johnson",
      pharmacy: "Walgreens",
      lastRefill: "2024-01-05",
      nextRefillDue: "2024-03-05",
    },
    {
      id: 3,
      patientName: "David Johnson",
      medication: "Sertraline",
      dosage: "50mg",
      frequency: "Once daily",
      startDate: "2024-01-20",
      endDate: "2024-07-20",
      status: "pending",
      refills: 3,
      notes: "For anxiety. Start with low dose and gradually increase.",
      prescribedBy: "Dr. Sarah Johnson",
      pharmacy: "Rite Aid",
      lastRefill: "N/A",
      nextRefillDue: "N/A",
    },
    {
      id: 4,
      patientName: "Lisa Wilson",
      medication: "Atorvastatin",
      dosage: "20mg",
      frequency: "Once daily",
      startDate: "2023-10-01",
      endDate: "2024-04-01",
      status: "completed",
      refills: 0,
      notes: "For high cholesterol. Patient completed treatment.",
      prescribedBy: "Dr. Sarah Johnson",
      pharmacy: "CVS Pharmacy",
      lastRefill: "2024-03-01",
      nextRefillDue: "N/A",
    },
  ]

  const filteredPrescriptions = prescriptions.filter((prescription) => {
    const matchesSearch =
      prescription.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prescription.medication.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prescription.notes.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = filterStatus === "all" || prescription.status === filterStatus

    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "expired":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "pending":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />
      case "completed":
        return <CheckCircle className="h-4 w-4 text-blue-500" />
      case "expired":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <CheckCircle className="h-4 w-4 text-gray-500" />
    }
  }

  const activePrescriptions = prescriptions.filter((p) => p.status === "active")
  const pendingPrescriptions = prescriptions.filter((p) => p.status === "pending")

  return (
    <DashboardLayout userRole="doctor" userName="Dr. Sarah Johnson" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Prescription Management</h1>
            <p className="text-gray-600">Manage and issue prescriptions for your patients</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="h-4 w-4 mr-2" />
            New Prescription
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Prescriptions</p>
                  <p className="text-2xl font-bold text-gray-900">{prescriptions.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Pill className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Prescriptions</p>
                  <p className="text-2xl font-bold text-green-600">{activePrescriptions.length}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Prescriptions</p>
                  <p className="text-2xl font-bold text-yellow-600">{pendingPrescriptions.length}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Refills Due Soon</p>
                  <p className="text-2xl font-bold text-purple-600">1</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search prescriptions by patient or medication..."
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
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="expired">Expired</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Prescriptions Tabs */}
        <Tabs defaultValue="active" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-none lg:flex bg-white border shadow-sm">
            <TabsTrigger value="active" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Active ({activePrescriptions.length})
            </TabsTrigger>
            <TabsTrigger value="pending" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Pending ({pendingPrescriptions.length})
            </TabsTrigger>
            <TabsTrigger value="all" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              All ({filteredPrescriptions.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {activePrescriptions.map((prescription) => (
              <Card
                key={prescription.id}
                className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <Pill className="h-16 w-16 text-emerald-600 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{prescription.medication}</h3>
                        <p className="text-emerald-600 font-medium mb-1">
                          {prescription.dosage} - {prescription.frequency}
                        </p>
                        <p className="text-gray-600 mb-2">Patient: {prescription.patientName}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {prescription.startDate} - {prescription.endDate}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>Refills: {prescription.refills}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mt-2">Pharmacy: {prescription.pharmacy}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-3">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(prescription.status)}
                        <Badge className={`${getStatusColor(prescription.status)} border-0`}>
                          {prescription.status}
                        </Badge>
                      </div>
                      <div className="text-right text-sm">
                        <p className="font-semibold text-gray-900">Next Refill: {prescription.nextRefillDue}</p>
                        <p className="text-gray-500">Last Refill: {prescription.lastRefill}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => setSelectedPrescription(prescription)}>
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Prescription Details</DialogTitle>
                              <DialogDescription>Complete information about this prescription</DialogDescription>
                            </DialogHeader>
                            {selectedPrescription && (
                              <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Medication Details</h4>
                                    <div className="space-y-2 text-sm">
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Medication:</span>
                                        <span>{selectedPrescription.medication}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Dosage:</span>
                                        <span>{selectedPrescription.dosage}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Frequency:</span>
                                        <span>{selectedPrescription.frequency}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Start Date:</span>
                                        <span>{selectedPrescription.startDate}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">End Date:</span>
                                        <span>{selectedPrescription.endDate}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Patient & Pharmacy</h4>
                                    <div className="space-y-2 text-sm">
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Patient:</span>
                                        <span>{selectedPrescription.patientName}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Prescribed By:</span>
                                        <span>{selectedPrescription.prescribedBy}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Pharmacy:</span>
                                        <span>{selectedPrescription.pharmacy}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Refills Remaining:</span>
                                        <span>{selectedPrescription.refills}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Next Refill Due:</span>
                                        <span>{selectedPrescription.nextRefillDue}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Notes</h4>
                                  <p className="text-gray-600">{selectedPrescription.notes}</p>
                                </div>
                                <div className="flex space-x-3">
                                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                                    <Edit className="h-4 w-4 mr-2" />
                                    Edit Prescription
                                  </Button>
                                  <Button variant="outline">
                                    <Printer className="h-4 w-4 mr-2" />
                                    Print
                                  </Button>
                                  <Button variant="outline">
                                    <Download className="h-4 w-4 mr-2" />
                                    Download
                                  </Button>
                                  <Button variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Cancel
                                  </Button>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            {pendingPrescriptions.map((prescription) => (
              <Card
                key={prescription.id}
                className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <Pill className="h-16 w-16 text-yellow-600 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{prescription.medication}</h3>
                        <p className="text-yellow-600 font-medium mb-1">
                          {prescription.dosage} - {prescription.frequency}
                        </p>
                        <p className="text-gray-600 mb-2">Patient: {prescription.patientName}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {prescription.startDate} - {prescription.endDate}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>Refills: {prescription.refills}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mt-2">Pharmacy: {prescription.pharmacy}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-3">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(prescription.status)}
                        <Badge className={`${getStatusColor(prescription.status)} border-0`}>
                          {prescription.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="all" className="space-y-4">
            {filteredPrescriptions.map((prescription) => (
              <Card
                key={prescription.id}
                className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <Pill className="h-16 w-16 text-emerald-600 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{prescription.medication}</h3>
                        <p className="text-emerald-600 font-medium mb-1">
                          {prescription.dosage} - {prescription.frequency}
                        </p>
                        <p className="text-gray-600 mb-2">Patient: {prescription.patientName}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {prescription.startDate} - {prescription.endDate}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>Refills: {prescription.refills}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mt-2">Pharmacy: {prescription.pharmacy}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-3">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(prescription.status)}
                        <Badge className={`${getStatusColor(prescription.status)} border-0`}>
                          {prescription.status}
                        </Badge>
                      </div>
                      <div className="text-right text-sm">
                        <p className="font-semibold text-gray-900">Next Refill: {prescription.nextRefillDue}</p>
                        <p className="text-gray-500">Last Refill: {prescription.lastRefill}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => setSelectedPrescription(prescription)}>
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Prescription Details</DialogTitle>
                              <DialogDescription>Complete information about this prescription</DialogDescription>
                            </DialogHeader>
                            {selectedPrescription && (
                              <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Medication Details</h4>
                                    <div className="space-y-2 text-sm">
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Medication:</span>
                                        <span>{selectedPrescription.medication}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Dosage:</span>
                                        <span>{selectedPrescription.dosage}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Frequency:</span>
                                        <span>{selectedPrescription.frequency}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Start Date:</span>
                                        <span>{selectedPrescription.startDate}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">End Date:</span>
                                        <span>{selectedPrescription.endDate}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Patient & Pharmacy</h4>
                                    <div className="space-y-2 text-sm">
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Patient:</span>
                                        <span>{selectedPrescription.patientName}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Prescribed By:</span>
                                        <span>{selectedPrescription.prescribedBy}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Pharmacy:</span>
                                        <span>{selectedPrescription.pharmacy}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Refills Remaining:</span>
                                        <span>{selectedPrescription.refills}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Next Refill Due:</span>
                                        <span>{selectedPrescription.nextRefillDue}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Notes</h4>
                                  <p className="text-gray-600">{selectedPrescription.notes}</p>
                                </div>
                                <div className="flex space-x-3">
                                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                                    <Edit className="h-4 w-4 mr-2" />
                                    Edit Prescription
                                  </Button>
                                  <Button variant="outline">
                                    <Printer className="h-4 w-4 mr-2" />
                                    Print
                                  </Button>
                                  <Button variant="outline">
                                    <Download className="h-4 w-4 mr-2" />
                                    Download
                                  </Button>
                                  <Button variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Cancel
                                  </Button>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
