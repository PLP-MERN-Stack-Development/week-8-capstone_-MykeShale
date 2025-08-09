"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
  Users,
  Search,
  Plus,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Activity,
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function AdminPatientsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [selectedPatient, setSelectedPatient] = useState(null)

  const patients = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 (555) 123-4567",
      age: 45,
      gender: "Male",
      address: "123 Main St, New York, NY 10001",
      joinDate: "2023-01-15",
      lastVisit: "2024-01-10",
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
      primaryDoctor: "Dr. Sarah Johnson",
      conditions: ["Hypertension", "Diabetes Type 2"],
      appointments: 12,
      totalSpent: "$2,450",
      insurance: "Blue Cross Blue Shield",
      emergencyContact: "Jane Smith - (555) 234-5678",
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria.garcia@email.com",
      phone: "+1 (555) 234-5678",
      age: 32,
      gender: "Female",
      address: "456 Oak Ave, Los Angeles, CA 90210",
      joinDate: "2023-03-20",
      lastVisit: "2024-01-08",
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
      primaryDoctor: "Dr. Michael Chen",
      conditions: ["Asthma"],
      appointments: 8,
      totalSpent: "$1,200",
      insurance: "Aetna",
      emergencyContact: "Carlos Garcia - (555) 345-6789",
    },
    {
      id: 3,
      name: "David Johnson",
      email: "david.johnson@email.com",
      phone: "+1 (555) 345-6789",
      age: 28,
      gender: "Male",
      address: "789 Pine Rd, Chicago, IL 60601",
      joinDate: "2023-06-10",
      lastVisit: "2023-12-15",
      status: "inactive",
      avatar: "/placeholder.svg?height=40&width=40",
      primaryDoctor: "Dr. Emily Rodriguez",
      conditions: ["Anxiety"],
      appointments: 4,
      totalSpent: "$800",
      insurance: "United Healthcare",
      emergencyContact: "Sarah Johnson - (555) 456-7890",
    },
    {
      id: 4,
      name: "Lisa Wilson",
      email: "lisa.wilson@email.com",
      phone: "+1 (555) 456-7890",
      age: 55,
      gender: "Female",
      address: "321 Elm St, Miami, FL 33101",
      joinDate: "2022-11-05",
      lastVisit: "2024-01-12",
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
      primaryDoctor: "Dr. James Wilson",
      conditions: ["Arthritis", "High Cholesterol"],
      appointments: 18,
      totalSpent: "$3,200",
      insurance: "Medicare",
      emergencyContact: "Robert Wilson - (555) 567-8901",
    },
  ]

  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.primaryDoctor.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = filterStatus === "all" || patient.status === filterStatus

    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-yellow-100 text-yellow-800"
      case "suspended":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "inactive":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "suspended":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      default:
        return <CheckCircle className="h-4 w-4 text-gray-500" />
    }
  }

  const activePatients = patients.filter((p) => p.status === "active")
  const inactivePatients = patients.filter((p) => p.status === "inactive")

  return (
    <DashboardLayout userRole="admin" userName="Admin User" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Patient Management</h1>
            <p className="text-gray-600">Manage and monitor all registered patients</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="h-4 w-4 mr-2" />
            Add New Patient
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Patients</p>
                  <p className="text-2xl font-bold text-gray-900">{patients.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Patients</p>
                  <p className="text-2xl font-bold text-green-600">{activePatients.length}</p>
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
                  <p className="text-sm font-medium text-gray-600">New This Month</p>
                  <p className="text-2xl font-bold text-purple-600">12</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Plus className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Inactive</p>
                  <p className="text-2xl font-bold text-yellow-600">{inactivePatients.length}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-yellow-600" />
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
                  placeholder="Search patients by name, email, or doctor..."
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
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Patients Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-none lg:flex bg-white border shadow-sm">
            <TabsTrigger value="all" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              All Patients ({filteredPatients.length})
            </TabsTrigger>
            <TabsTrigger value="active" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Active ({activePatients.length})
            </TabsTrigger>
            <TabsTrigger value="inactive" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Inactive ({inactivePatients.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {filteredPatients.map((patient) => (
              <Card
                key={patient.id}
                className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <Avatar className="h-16 w-16 border-2 border-emerald-200">
                        <AvatarImage src={patient.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {patient.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{patient.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            {patient.age}y, {patient.gender}
                          </Badge>
                        </div>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4" />
                            <span>{patient.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span>{patient.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4" />
                            <span>{patient.address}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Joined {patient.joinDate}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Activity className="h-4 w-4" />
                            <span>Last visit {patient.lastVisit}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FileText className="h-4 w-4" />
                            <span>{patient.appointments} appointments</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            Dr: {patient.primaryDoctor}
                          </Badge>
                          {patient.conditions.map((condition, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                              {condition}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-3">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(patient.status)}
                        <Badge className={`${getStatusColor(patient.status)} border-0`}>{patient.status}</Badge>
                      </div>
                      <div className="text-right text-sm">
                        <p className="font-semibold text-gray-900">{patient.totalSpent}</p>
                        <p className="text-gray-500">Total spent</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => setSelectedPatient(patient)}>
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Patient Details - {patient.name}</DialogTitle>
                              <DialogDescription>Complete patient information and medical history</DialogDescription>
                            </DialogHeader>
                            {selectedPatient && (
                              <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                  <Avatar className="h-20 w-20 border-2 border-emerald-200">
                                    <AvatarImage src={selectedPatient.avatar || "/placeholder.svg"} />
                                    <AvatarFallback>
                                      {selectedPatient.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <h3 className="text-xl font-semibold">{selectedPatient.name}</h3>
                                    <p className="text-gray-600">
                                      {selectedPatient.age} years old, {selectedPatient.gender}
                                    </p>
                                    <Badge className={`${getStatusColor(selectedPatient.status)} mt-1`}>
                                      {selectedPatient.status}
                                    </Badge>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                  <div>
                                    <h4 className="font-medium text-gray-900 mb-3">Contact Information</h4>
                                    <div className="space-y-2 text-sm">
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Email:</span>
                                        <span>{selectedPatient.email}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Phone:</span>
                                        <span>{selectedPatient.phone}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Address:</span>
                                        <span className="text-right">{selectedPatient.address}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Emergency Contact:</span>
                                        <span className="text-right">{selectedPatient.emergencyContact}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-gray-900 mb-3">Medical Information</h4>
                                    <div className="space-y-2 text-sm">
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Primary Doctor:</span>
                                        <span>{selectedPatient.primaryDoctor}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Insurance:</span>
                                        <span>{selectedPatient.insurance}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Join Date:</span>
                                        <span>{selectedPatient.joinDate}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Last Visit:</span>
                                        <span>{selectedPatient.lastVisit}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-3">Medical Conditions</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {selectedPatient.conditions.map((condition, index) => (
                                      <Badge key={index} variant="outline" className="text-xs">
                                        {condition}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="text-2xl font-bold text-gray-900">
                                      {selectedPatient.appointments}
                                    </div>
                                    <div className="text-sm text-gray-600">Total Appointments</div>
                                  </div>
                                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="text-2xl font-bold text-green-600">
                                      {selectedPatient.totalSpent}
                                    </div>
                                    <div className="text-sm text-gray-600">Total Spent</div>
                                  </div>
                                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-600">A+</div>
                                    <div className="text-sm text-gray-600">Health Score</div>
                                  </div>
                                </div>
                                <div className="flex space-x-3 pt-4 border-t">
                                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                                    <Edit className="h-4 w-4 mr-2" />
                                    Edit Patient
                                  </Button>
                                  <Button variant="outline">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    View Appointments
                                  </Button>
                                  <Button variant="outline">
                                    <FileText className="h-4 w-4 mr-2" />
                                    Medical Records
                                  </Button>
                                  <Button variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Suspend Patient
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

          <TabsContent value="active" className="space-y-4">
            {activePatients.map((patient) => (
              <Card
                key={patient.id}
                className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <Avatar className="h-16 w-16 border-2 border-emerald-200">
                        <AvatarImage src={patient.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {patient.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{patient.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            {patient.age}y, {patient.gender}
                          </Badge>
                        </div>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4" />
                            <span>{patient.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span>{patient.phone}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Activity className="h-4 w-4" />
                            <span>Last visit {patient.lastVisit}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FileText className="h-4 w-4" />
                            <span>{patient.appointments} appointments</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            Dr: {patient.primaryDoctor}
                          </Badge>
                          {patient.conditions.map((condition, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                              {condition}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-3">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(patient.status)}
                        <Badge className={`${getStatusColor(patient.status)} border-0`}>{patient.status}</Badge>
                      </div>
                      <div className="text-right text-sm">
                        <p className="font-semibold text-gray-900">{patient.totalSpent}</p>
                        <p className="text-gray-500">Total spent</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
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

          <TabsContent value="inactive" className="space-y-4">
            {inactivePatients.map((patient) => (
              <Card
                key={patient.id}
                className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm opacity-75"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <Avatar className="h-16 w-16 border-2 border-gray-200">
                        <AvatarImage src={patient.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {patient.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{patient.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            {patient.age}y, {patient.gender}
                          </Badge>
                        </div>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4" />
                            <span>{patient.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span>{patient.phone}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Activity className="h-4 w-4" />
                            <span>Last visit {patient.lastVisit}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FileText className="h-4 w-4" />
                            <span>{patient.appointments} appointments</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            Dr: {patient.primaryDoctor}
                          </Badge>
                          {patient.conditions.map((condition, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                              {condition}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-3">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(patient.status)}
                        <Badge className={`${getStatusColor(patient.status)} border-0`}>{patient.status}</Badge>
                      </div>
                      <div className="text-right text-sm">
                        <p className="font-semibold text-gray-900">{patient.totalSpent}</p>
                        <p className="text-gray-500">Total spent</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-emerald-600 hover:text-emerald-700 bg-transparent"
                        >
                          Reactivate
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
