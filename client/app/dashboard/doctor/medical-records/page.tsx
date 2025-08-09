"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
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
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Calendar,
  FileText,
  Upload,
  Download,
  Stethoscope,
  ClipboardList,
  XIcon as XRay,
  FlaskConical,
  ShieldCheck,
  Pill,
  Users,
  Clock,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function DoctorMedicalRecordsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterPatient, setFilterPatient] = useState("all")
  const [selectedRecord, setSelectedRecord] = useState(null)

  const patients = [
    { id: 1, name: "John Smith" },
    { id: 2, name: "Maria Garcia" },
    { id: 3, name: "David Johnson" },
    { id: 4, name: "Lisa Wilson" },
  ]

  const medicalRecords = [
    {
      id: 1,
      patientName: "John Smith",
      type: "Lab Results",
      date: "2024-01-10",
      title: "Blood Panel Results",
      doctor: "Dr. Sarah Johnson",
      summary: "Comprehensive blood work showing normal ranges for most markers. Cholesterol levels slightly elevated.",
      file: "/placeholder.pdf",
      tags: ["blood test", "cholesterol", "routine"],
    },
    {
      id: 2,
      patientName: "Maria Garcia",
      type: "Consultation Note",
      date: "2024-01-08",
      title: "Cardiology Follow-up",
      doctor: "Dr. Sarah Johnson",
      summary: "Patient reported improved breathing. Medication dosage adjusted. Next follow-up in 3 months.",
      file: "/placeholder.pdf",
      tags: ["cardiology", "follow-up", "medication"],
    },
    {
      id: 3,
      patientName: "David Johnson",
      type: "Imaging Report",
      date: "2023-12-15",
      title: "Chest X-Ray",
      doctor: "Dr. Sarah Johnson",
      summary: "No acute cardiopulmonary abnormalities. Clear lung fields.",
      file: "/placeholder.pdf",
      tags: ["x-ray", "chest", "imaging"],
    },
    {
      id: 4,
      patientName: "Lisa Wilson",
      type: "Vaccination Record",
      date: "2024-01-05",
      title: "Flu Shot 2024",
      doctor: "Dr. Sarah Johnson",
      summary: "Annual influenza vaccination administered.",
      file: "/placeholder.pdf",
      tags: ["vaccination", "flu"],
    },
    {
      id: 5,
      patientName: "John Smith",
      type: "Prescription",
      date: "2024-01-10",
      title: "Lisinopril Prescription",
      doctor: "Dr. Sarah Johnson",
      summary: "New prescription for Lisinopril 10mg, once daily, for hypertension.",
      file: "/placeholder.pdf",
      tags: ["prescription", "medication", "hypertension"],
    },
  ]

  const filteredRecords = medicalRecords.filter((record) => {
    const matchesSearch =
      record.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesType = filterType === "all" || record.type === filterType
    const matchesPatient = filterPatient === "all" || record.patientName === filterPatient

    return matchesSearch && matchesType && matchesPatient
  })

  const getRecordIcon = (type: string) => {
    switch (type) {
      case "Lab Results":
        return <FlaskConical className="h-5 w-5 text-blue-600" />
      case "Consultation Note":
        return <ClipboardList className="h-5 w-5 text-emerald-600" />
      case "Imaging Report":
        return <XRay className="h-5 w-5 text-purple-600" />
      case "Vaccination Record":
        return <ShieldCheck className="h-5 w-5 text-yellow-600" />
      case "Prescription":
        return <Pill className="h-5 w-5 text-red-600" />
      default:
        return <FileText className="h-5 w-5 text-gray-600" />
    }
  }

  const totalRecords = medicalRecords.length
  const latestRecordDate = medicalRecords
    .reduce((maxDate, record) => {
      const recordDate = new Date(record.date)
      return recordDate > maxDate ? recordDate : maxDate
    }, new Date(0))
    .toLocaleDateString()

  return (
    <DashboardLayout userRole="doctor" userName="Dr. Sarah Johnson" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Medical Records</h1>
            <p className="text-gray-600">Access and manage patient medical history and documents</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Upload className="h-4 w-4 mr-2" />
            Upload New Record
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Records</p>
                  <p className="text-2xl font-bold text-gray-900">{totalRecords}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Patients with Records</p>
                  <p className="text-2xl font-bold text-green-600">{patients.length}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Latest Upload</p>
                  <p className="text-2xl font-bold text-purple-600">{latestRecordDate}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Average Record Size</p>
                  <p className="text-2xl font-bold text-yellow-600">1.2 MB</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Download className="h-6 w-6 text-yellow-600" />
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
                  placeholder="Search records by title, summary, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterPatient} onValueChange={setFilterPatient}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Filter by patient" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Patients</SelectItem>
                  {patients.map((patient) => (
                    <SelectItem key={patient.id} value={patient.name}>
                      {patient.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Lab Results">Lab Results</SelectItem>
                  <SelectItem value="Consultation Note">Consultation Note</SelectItem>
                  <SelectItem value="Imaging Report">Imaging Report</SelectItem>
                  <SelectItem value="Vaccination Record">Vaccination Record</SelectItem>
                  <SelectItem value="Prescription">Prescription</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Medical Records List */}
        <div className="space-y-4">
          {filteredRecords.map((record) => (
            <Card
              key={record.id}
              className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-lg bg-gray-100">
                      {getRecordIcon(record.type)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{record.title}</h3>
                      <p className="text-emerald-600 font-medium mb-1">Patient: {record.patientName}</p>
                      <p className="text-gray-600 mb-2">{record.summary}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{record.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Stethoscope className="h-4 w-4" />
                          <span>{record.doctor}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {record.type}
                        </Badge>
                        {record.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-3">
                    <div className="flex items-center space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedRecord(record)}>
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>Medical Record Details</DialogTitle>
                            <DialogDescription>Detailed information about this medical record</DialogDescription>
                          </DialogHeader>
                          {selectedRecord && (
                            <div className="space-y-6">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Record Information</h4>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Title:</span>
                                      <span>{selectedRecord.title}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Type:</span>
                                      <span>{selectedRecord.type}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Date:</span>
                                      <span>{selectedRecord.date}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Doctor:</span>
                                      <span>{selectedRecord.doctor}</span>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Patient Information</h4>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Patient Name:</span>
                                      <span>{selectedRecord.patientName}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Patient ID:</span>
                                      <span>{selectedRecord.id}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 mb-2">Summary</h4>
                                <p className="text-gray-600">{selectedRecord.summary}</p>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 mb-2">Tags</h4>
                                <div className="flex flex-wrap gap-2">
                                  {selectedRecord.tags.map((tag, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="flex space-x-3">
                                <Button className="bg-emerald-600 hover:bg-emerald-700">
                                  <Edit className="h-4 w-4 mr-2" />
                                  Edit Record
                                </Button>
                                <Button variant="outline">
                                  <Download className="h-4 w-4 mr-2" />
                                  Download File
                                </Button>
                                <Button variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Delete Record
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
        </div>
      </div>
    </DashboardLayout>
  )
}
