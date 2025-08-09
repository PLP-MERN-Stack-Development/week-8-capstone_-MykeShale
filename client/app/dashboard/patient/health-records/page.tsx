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
  FileText,
  Download,
  Eye,
  Share,
  Calendar,
  Stethoscope,
  Pill,
  TestTube,
  Camera,
  Upload,
  Search,
  User,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function PatientHealthRecordsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterDate, setFilterDate] = useState("all")
  const [selectedRecord, setSelectedRecord] = useState(null)

  const healthRecords = [
    {
      id: 1,
      title: "Annual Physical Examination",
      type: "examination",
      date: "2024-01-10",
      doctor: "Dr. Sarah Johnson",
      specialty: "General Practice",
      clinic: "Community Health Center",
      status: "completed",
      summary: "Comprehensive annual health checkup with all vital signs normal",
      details: {
        vitals: {
          bloodPressure: "120/80 mmHg",
          heartRate: "72 bpm",
          temperature: "98.6°F",
          weight: "70 kg",
          height: "175 cm",
          bmi: "22.9",
        },
        findings: [
          "Blood pressure within normal range",
          "Heart rate regular and strong",
          "No abnormal findings during physical examination",
          "Recommended annual follow-up",
        ],
        recommendations: [
          "Continue current exercise routine",
          "Maintain healthy diet",
          "Schedule next annual checkup in 12 months",
        ],
      },
      attachments: [
        { name: "Physical_Exam_Report.pdf", size: "245 KB", type: "pdf" },
        { name: "Vital_Signs_Chart.pdf", size: "156 KB", type: "pdf" },
      ],
    },
    {
      id: 2,
      title: "Blood Test Results",
      type: "lab",
      date: "2024-01-08",
      doctor: "Dr. Sarah Johnson",
      specialty: "General Practice",
      clinic: "Community Health Center",
      status: "completed",
      summary: "Complete blood count and metabolic panel - all values within normal range",
      details: {
        results: [
          { test: "Hemoglobin", value: "14.2 g/dL", range: "12.0-15.5 g/dL", status: "normal" },
          { test: "White Blood Cells", value: "6,800/μL", range: "4,500-11,000/μL", status: "normal" },
          { test: "Platelets", value: "285,000/μL", range: "150,000-450,000/μL", status: "normal" },
          { test: "Glucose", value: "92 mg/dL", range: "70-100 mg/dL", status: "normal" },
          { test: "Cholesterol", value: "185 mg/dL", range: "<200 mg/dL", status: "normal" },
          { test: "HDL", value: "58 mg/dL", range: ">40 mg/dL", status: "good" },
          { test: "LDL", value: "110 mg/dL", range: "<130 mg/dL", status: "normal" },
        ],
      },
      attachments: [
        { name: "Blood_Test_Results.pdf", size: "198 KB", type: "pdf" },
        { name: "Lab_Report_Detailed.pdf", size: "324 KB", type: "pdf" },
      ],
    },
    {
      id: 3,
      title: "Cardiology Consultation",
      type: "consultation",
      date: "2024-01-05",
      doctor: "Dr. Michael Chen",
      specialty: "Cardiology",
      clinic: "Heart Care Clinic",
      status: "completed",
      summary: "Follow-up consultation for blood pressure management",
      details: {
        assessment: "Blood pressure well controlled with current medication",
        currentMedications: ["Lisinopril 10mg once daily", "Aspirin 81mg once daily"],
        recommendations: [
          "Continue current medication regimen",
          "Monitor blood pressure at home twice daily",
          "Follow-up in 3 months",
          "Maintain low-sodium diet",
        ],
      },
      attachments: [
        { name: "Cardiology_Consultation.pdf", size: "267 KB", type: "pdf" },
        { name: "EKG_Results.pdf", size: "189 KB", type: "pdf" },
      ],
    },
    {
      id: 4,
      title: "Chest X-Ray",
      type: "imaging",
      date: "2024-01-03",
      doctor: "Dr. James Wilson",
      specialty: "Radiology",
      clinic: "Medical Imaging Center",
      status: "completed",
      summary: "Chest X-ray shows clear lungs with no abnormalities",
      details: {
        findings: [
          "Lungs are clear bilaterally",
          "Heart size within normal limits",
          "No pleural effusion",
          "Bone structures appear normal",
        ],
        impression: "Normal chest X-ray",
      },
      attachments: [
        { name: "Chest_XRay_Report.pdf", size: "145 KB", type: "pdf" },
        { name: "XRay_Images.dcm", size: "2.1 MB", type: "image" },
      ],
    },
    {
      id: 5,
      title: "Prescription Record",
      type: "prescription",
      date: "2024-01-02",
      doctor: "Dr. Sarah Johnson",
      specialty: "General Practice",
      clinic: "Community Health Center",
      status: "active",
      summary: "Prescribed medications for blood pressure management",
      details: {
        medications: [
          {
            name: "Lisinopril",
            dosage: "10mg",
            frequency: "Once daily",
            duration: "90 days",
            instructions: "Take with or without food, preferably at the same time each day",
          },
          {
            name: "Aspirin",
            dosage: "81mg",
            frequency: "Once daily",
            duration: "90 days",
            instructions: "Take with food to reduce stomach irritation",
          },
        ],
      },
      attachments: [{ name: "Prescription_Details.pdf", size: "123 KB", type: "pdf" }],
    },
  ]

  const filteredRecords = healthRecords.filter((record) => {
    const matchesSearch =
      record.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.doctor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.specialty.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = filterType === "all" || record.type === filterType

    let matchesDate = true
    if (filterDate !== "all") {
      const recordDate = new Date(record.date)
      const now = new Date()
      const daysDiff = Math.floor((now.getTime() - recordDate.getTime()) / (1000 * 60 * 60 * 24))

      switch (filterDate) {
        case "week":
          matchesDate = daysDiff <= 7
          break
        case "month":
          matchesDate = daysDiff <= 30
          break
        case "year":
          matchesDate = daysDiff <= 365
          break
      }
    }

    return matchesSearch && matchesType && matchesDate
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "examination":
        return <Stethoscope className="h-5 w-5 text-emerald-600" />
      case "lab":
        return <TestTube className="h-5 w-5 text-blue-600" />
      case "consultation":
        return <User className="h-5 w-5 text-purple-600" />
      case "imaging":
        return <Camera className="h-5 w-5 text-orange-600" />
      case "prescription":
        return <Pill className="h-5 w-5 text-pink-600" />
      default:
        return <FileText className="h-5 w-5 text-gray-600" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "examination":
        return "bg-emerald-100 text-emerald-800"
      case "lab":
        return "bg-blue-100 text-blue-800"
      case "consultation":
        return "bg-purple-100 text-purple-800"
      case "imaging":
        return "bg-orange-100 text-orange-800"
      case "prescription":
        return "bg-pink-100 text-pink-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const healthSummary = {
    totalRecords: healthRecords.length,
    recentTests: healthRecords.filter((r) => r.type === "lab").length,
    activePresciptions: healthRecords.filter((r) => r.type === "prescription" && r.status === "active").length,
    lastCheckup: "Jan 10, 2024",
  }

  const RecordCard = ({ record }) => (
    <div className="group">
      <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4 flex-1">
              <div className="p-3 bg-gray-50 rounded-xl">{getTypeIcon(record.type)}</div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{record.title}</h3>
                  <Badge className={`${getTypeColor(record.type)} border-0 text-xs`}>{record.type}</Badge>
                </div>
                <p className="text-gray-600 mb-2">{record.summary}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{record.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{record.doctor}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Stethoscope className="h-4 w-4" />
                    <span>{record.specialty}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">
                    {record.clinic}
                  </Badge>
                  <Badge
                    variant={record.status === "active" ? "default" : "secondary"}
                    className={`text-xs ${record.status === "active" ? "bg-green-500" : ""}`}
                  >
                    {record.status}
                  </Badge>
                  {record.attachments && (
                    <Badge variant="outline" className="text-xs">
                      {record.attachments.length} files
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" onClick={() => setSelectedRecord(record)}>
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center space-x-2">
                      {getTypeIcon(record.type)}
                      <span>{record.title}</span>
                    </DialogTitle>
                    <DialogDescription>
                      {record.date} • {record.doctor} • {record.specialty}
                    </DialogDescription>
                  </DialogHeader>
                  {selectedRecord && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3">Record Information</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Date:</span>
                              <span>{selectedRecord.date}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Doctor:</span>
                              <span>{selectedRecord.doctor}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Specialty:</span>
                              <span>{selectedRecord.specialty}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Clinic:</span>
                              <span>{selectedRecord.clinic}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Status:</span>
                              <Badge
                                variant={selectedRecord.status === "active" ? "default" : "secondary"}
                                className={`text-xs ${selectedRecord.status === "active" ? "bg-green-500" : ""}`}
                              >
                                {selectedRecord.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3">Summary</h4>
                          <p className="text-sm text-gray-600">{selectedRecord.summary}</p>
                        </div>
                      </div>

                      {/* Record Details */}
                      {selectedRecord.details && (
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3">Details</h4>

                          {/* Vitals */}
                          {selectedRecord.details.vitals && (
                            <div className="mb-4">
                              <h5 className="font-medium text-gray-800 mb-2">Vital Signs</h5>
                              <div className="grid grid-cols-3 gap-4">
                                {Object.entries(selectedRecord.details.vitals).map(([key, value]) => (
                                  <div key={key} className="bg-gray-50 p-3 rounded-lg">
                                    <div className="text-xs text-gray-600 capitalize">
                                      {key.replace(/([A-Z])/g, " $1").trim()}
                                    </div>
                                    <div className="font-medium">{value}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Lab Results */}
                          {selectedRecord.details.results && (
                            <div className="mb-4">
                              <h5 className="font-medium text-gray-800 mb-2">Test Results</h5>
                              <div className="space-y-2">
                                {selectedRecord.details.results.map((result, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                  >
                                    <div>
                                      <div className="font-medium">{result.test}</div>
                                      <div className="text-sm text-gray-600">Range: {result.range}</div>
                                    </div>
                                    <div className="text-right">
                                      <div className="font-medium">{result.value}</div>
                                      <Badge
                                        variant="secondary"
                                        className={`text-xs ${
                                          result.status === "normal"
                                            ? "bg-green-100 text-green-700"
                                            : result.status === "good"
                                              ? "bg-blue-100 text-blue-700"
                                              : "bg-yellow-100 text-yellow-700"
                                        }`}
                                      >
                                        {result.status}
                                      </Badge>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Findings */}
                          {selectedRecord.details.findings && (
                            <div className="mb-4">
                              <h5 className="font-medium text-gray-800 mb-2">Findings</h5>
                              <ul className="space-y-1">
                                {selectedRecord.details.findings.map((finding, index) => (
                                  <li key={index} className="text-sm text-gray-600 flex items-start">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                    {finding}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Recommendations */}
                          {selectedRecord.details.recommendations && (
                            <div className="mb-4">
                              <h5 className="font-medium text-gray-800 mb-2">Recommendations</h5>
                              <ul className="space-y-1">
                                {selectedRecord.details.recommendations.map((rec, index) => (
                                  <li key={index} className="text-sm text-gray-600 flex items-start">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                    {rec}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Medications */}
                          {selectedRecord.details.medications && (
                            <div className="mb-4">
                              <h5 className="font-medium text-gray-800 mb-2">Medications</h5>
                              <div className="space-y-3">
                                {selectedRecord.details.medications.map((med, index) => (
                                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                                    <div className="flex justify-between items-start mb-2">
                                      <div className="font-medium">{med.name}</div>
                                      <Badge variant="outline" className="text-xs">
                                        {med.dosage}
                                      </Badge>
                                    </div>
                                    <div className="text-sm text-gray-600 mb-1">
                                      {med.frequency} • {med.duration}
                                    </div>
                                    <div className="text-xs text-gray-500">{med.instructions}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Attachments */}
                      {selectedRecord.attachments && selectedRecord.attachments.length > 0 && (
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3">Attachments</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {selectedRecord.attachments.map((attachment, index) => (
                              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                <FileText className="h-8 w-8 text-gray-500" />
                                <div className="flex-1">
                                  <div className="font-medium text-sm">{attachment.name}</div>
                                  <div className="text-xs text-gray-500">{attachment.size}</div>
                                </div>
                                <Button variant="ghost" size="sm">
                                  <Download className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex space-x-3 pt-4 border-t">
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                          <Download className="h-4 w-4 mr-2" />
                          Download Record
                        </Button>
                        <Button variant="outline">
                          <Share className="h-4 w-4 mr-2" />
                          Share with Doctor
                        </Button>
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
              <Button variant="ghost" size="sm">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Share className="h-4 w-4" />
              </Button>
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
            <h1 className="text-3xl font-bold text-gray-900">Health Records</h1>
            <p className="text-gray-600">Access and manage your complete medical history</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Upload className="h-4 w-4 mr-2" />
            Upload Record
          </Button>
        </div>

        {/* Health Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm">Total Records</p>
                  <p className="text-3xl font-bold">{healthSummary.totalRecords}</p>
                </div>
                <FileText className="h-8 w-8 text-emerald-200" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Recent Tests</p>
                  <p className="text-3xl font-bold text-gray-900">{healthSummary.recentTests}</p>
                </div>
                <TestTube className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Active Prescriptions</p>
                  <p className="text-3xl font-bold text-gray-900">{healthSummary.activePresciptions}</p>
                </div>
                <Pill className="h-8 w-8 text-pink-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Last Checkup</p>
                  <p className="text-lg font-bold text-gray-900">{healthSummary.lastCheckup}</p>
                </div>
                <Calendar className="h-8 w-8 text-purple-500" />
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
                  placeholder="Search records, doctors, or procedures..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="examination">Examinations</SelectItem>
                  <SelectItem value="lab">Lab Results</SelectItem>
                  <SelectItem value="consultation">Consultations</SelectItem>
                  <SelectItem value="imaging">Imaging</SelectItem>
                  <SelectItem value="prescription">Prescriptions</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterDate} onValueChange={setFilterDate}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Filter by date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="week">Last Week</SelectItem>
                  <SelectItem value="month">Last Month</SelectItem>
                  <SelectItem value="year">Last Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Records List */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:grid-cols-none lg:flex bg-white border shadow-sm">
            <TabsTrigger value="all" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              All ({filteredRecords.length})
            </TabsTrigger>
            <TabsTrigger
              value="examination"
              className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
            >
              Exams
            </TabsTrigger>
            <TabsTrigger value="lab" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Labs
            </TabsTrigger>
            <TabsTrigger
              value="consultation"
              className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
            >
              Consults
            </TabsTrigger>
            <TabsTrigger value="imaging" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Imaging
            </TabsTrigger>
            <TabsTrigger
              value="prescription"
              className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
            >
              Rx
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {filteredRecords.map((record) => (
              <RecordCard key={record.id} record={record} />
            ))}
            {filteredRecords.length === 0 && (
              <Card className="border-0 shadow-sm">
                <CardContent className="p-12 text-center">
                  <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No records found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {["examination", "lab", "consultation", "imaging", "prescription"].map((type) => (
            <TabsContent key={type} value={type} className="space-y-4">
              {healthRecords
                .filter((record) => record.type === type)
                .map((record) => (
                  <RecordCard key={record.id} record={record} />
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
