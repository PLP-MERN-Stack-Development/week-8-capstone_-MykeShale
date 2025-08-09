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
  Stethoscope,
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
  Star,
  CheckCircle,
  AlertTriangle,
  Clock,
  Users,
  BarChart3,
  Video,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function AdminDoctorsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterSpecialty, setFilterSpecialty] = useState("all")
  const [selectedDoctor, setSelectedDoctor] = useState(null)

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@example.com",
      phone: "+1 (555) 987-6543",
      specialty: "General Practice",
      license: "MD123456",
      clinic: "Community Health Center",
      joinDate: "2022-05-10",
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.9,
      patients: 150,
      appointments: 500,
      telemedicineCalls: 200,
      prescriptionsIssued: 350,
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      email: "michael.chen@example.com",
      phone: "+1 (555) 876-5432",
      specialty: "Cardiology",
      license: "MD654321",
      clinic: "Heart Care Clinic",
      joinDate: "2021-08-20",
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.8,
      patients: 120,
      appointments: 400,
      telemedicineCalls: 180,
      prescriptionsIssued: 300,
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      email: "emily.rodriguez@example.com",
      phone: "+1 (555) 765-4321",
      specialty: "Pediatrics",
      license: "MD987654",
      clinic: "Children's Clinic",
      joinDate: "2023-01-15",
      status: "pending",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.7,
      patients: 80,
      appointments: 250,
      telemedicineCalls: 100,
      prescriptionsIssued: 150,
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      email: "james.wilson@example.com",
      phone: "+1 (555) 654-3210",
      specialty: "Dermatology",
      license: "MD112233",
      clinic: "Skin Health Center",
      joinDate: "2022-11-01",
      status: "inactive",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.6,
      patients: 90,
      appointments: 300,
      telemedicineCalls: 120,
      prescriptionsIssued: 200,
    },
  ]

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = filterStatus === "all" || doctor.status === filterStatus
    const matchesSpecialty = filterSpecialty === "all" || doctor.specialty === filterSpecialty

    return matchesSearch && matchesStatus && matchesSpecialty
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "inactive":
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
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "inactive":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      default:
        return <CheckCircle className="h-4 w-4 text-gray-500" />
    }
  }

  const activeDoctors = doctors.filter((d) => d.status === "active")
  const pendingDoctors = doctors.filter((d) => d.status === "pending")

  return (
    <DashboardLayout userRole="admin" userName="Admin User" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Doctor Management</h1>
            <p className="text-gray-600">Manage and monitor all registered doctors</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="h-4 w-4 mr-2" />
            Add New Doctor
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Doctors</p>
                  <p className="text-2xl font-bold text-gray-900">{doctors.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Doctors</p>
                  <p className="text-2xl font-bold text-green-600">{activeDoctors.length}</p>
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
                  <p className="text-sm font-medium text-gray-600">Pending Approvals</p>
                  <p className="text-2xl font-bold text-yellow-600">{pendingDoctors.length}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Top Specialty</p>
                  <p className="text-2xl font-bold text-purple-600">General Practice</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
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
                  placeholder="Search doctors by name, email, or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterSpecialty} onValueChange={setFilterSpecialty}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Filter by specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specialties</SelectItem>
                  <SelectItem value="General Practice">General Practice</SelectItem>
                  <SelectItem value="Cardiology">Cardiology</SelectItem>
                  <SelectItem value="Pediatrics">Pediatrics</SelectItem>
                  <SelectItem value="Dermatology">Dermatology</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Doctors Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-none lg:flex bg-white border shadow-sm">
            <TabsTrigger value="all" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              All Doctors ({filteredDoctors.length})
            </TabsTrigger>
            <TabsTrigger value="active" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Active ({activeDoctors.length})
            </TabsTrigger>
            <TabsTrigger value="pending" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Pending ({pendingDoctors.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {filteredDoctors.map((doctor) => (
              <Card
                key={doctor.id}
                className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <Avatar className="h-16 w-16 border-2 border-emerald-200">
                        <AvatarImage src={doctor.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {doctor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600">{doctor.rating}</span>
                          </div>
                        </div>
                        <p className="text-emerald-600 font-medium mb-1">{doctor.specialty}</p>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4" />
                            <span>{doctor.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span>{doctor.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4" />
                            <span>{doctor.clinic}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Joined {doctor.joinDate}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{doctor.patients} patients</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Video className="h-4 w-4" />
                            <span>{doctor.telemedicineCalls} calls</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-3">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(doctor.status)}
                        <Badge className={`${getStatusColor(doctor.status)} border-0`}>{doctor.status}</Badge>
                      </div>
                      <div className="text-right text-sm">
                        <p className="font-semibold text-gray-900">{doctor.appointments}</p>
                        <p className="text-gray-500">Total Appointments</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => setSelectedDoctor(doctor)}>
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Doctor Details - {doctor.name}</DialogTitle>
                              <DialogDescription>Complete doctor information and performance metrics</DialogDescription>
                            </DialogHeader>
                            {selectedDoctor && (
                              <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                  <Avatar className="h-20 w-20 border-2 border-emerald-200">
                                    <AvatarImage src={selectedDoctor.avatar || "/placeholder.svg"} />
                                    <AvatarFallback>
                                      {selectedDoctor.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <h3 className="text-xl font-semibold">{selectedDoctor.name}</h3>
                                    <p className="text-emerald-600 font-medium">{selectedDoctor.specialty}</p>
                                    <Badge className={`${getStatusColor(selectedDoctor.status)} mt-1`}>
                                      {selectedDoctor.status}
                                    </Badge>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                  <div>
                                    <h4 className="font-medium text-gray-900 mb-3">Contact Information</h4>
                                    <div className="space-y-2 text-sm">
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Email:</span>
                                        <span>{selectedDoctor.email}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Phone:</span>
                                        <span>{selectedDoctor.phone}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Clinic:</span>
                                        <span>{selectedDoctor.clinic}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-gray-900 mb-3">Professional Details</h4>
                                    <div className="space-y-2 text-sm">
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">License No:</span>
                                        <span>{selectedDoctor.license}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Join Date:</span>
                                        <span>{selectedDoctor.joinDate}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Rating:</span>
                                        <span className="flex items-center gap-1">
                                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                          {selectedDoctor.rating}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="text-2xl font-bold text-gray-900">{selectedDoctor.patients}</div>
                                    <div className="text-sm text-gray-600">Total Patients</div>
                                  </div>
                                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-600">
                                      {selectedDoctor.appointments}
                                    </div>
                                    <div className="text-sm text-gray-600">Total Appointments</div>
                                  </div>
                                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="text-2xl font-bold text-emerald-600">
                                      {selectedDoctor.telemedicineCalls}
                                    </div>
                                    <div className="text-sm text-gray-600">Telemedicine Calls</div>
                                  </div>
                                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="text-2xl font-bold text-purple-600">
                                      {selectedDoctor.prescriptionsIssued}
                                    </div>
                                    <div className="text-sm text-gray-600">Prescriptions Issued</div>
                                  </div>
                                </div>
                                <div className="flex space-x-3 pt-4 border-t">
                                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                                    <Edit className="h-4 w-4 mr-2" />
                                    Edit Doctor
                                  </Button>
                                  <Button variant="outline">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    View Schedule
                                  </Button>
                                  <Button variant="outline">
                                    <Users className="h-4 w-4 mr-2" />
                                    View Patients
                                  </Button>
                                  <Button variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Suspend Doctor
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
            {activeDoctors.map((doctor) => (
              <Card
                key={doctor.id}
                className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <Avatar className="h-16 w-16 border-2 border-emerald-200">
                        <AvatarImage src={doctor.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {doctor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600">{doctor.rating}</span>
                          </div>
                        </div>
                        <p className="text-emerald-600 font-medium mb-1">{doctor.specialty}</p>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4" />
                            <span>{doctor.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span>{doctor.phone}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Joined {doctor.joinDate}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{doctor.patients} patients</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-3">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(doctor.status)}
                        <Badge className={`${getStatusColor(doctor.status)} border-0`}>{doctor.status}</Badge>
                      </div>
                      <div className="text-right text-sm">
                        <p className="font-semibold text-gray-900">{doctor.appointments}</p>
                        <p className="text-gray-500">Total Appointments</p>
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

          <TabsContent value="pending" className="space-y-4">
            {pendingDoctors.map((doctor) => (
              <Card
                key={doctor.id}
                className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <Avatar className="h-16 w-16 border-2 border-yellow-200">
                        <AvatarImage src={doctor.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {doctor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600">{doctor.rating}</span>
                          </div>
                        </div>
                        <p className="text-yellow-600 font-medium mb-1">{doctor.specialty}</p>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4" />
                            <span>{doctor.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span>{doctor.phone}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Joined {doctor.joinDate}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{doctor.patients} patients</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-3">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(doctor.status)}
                        <Badge className={`${getStatusColor(doctor.status)} border-0`}>{doctor.status}</Badge>
                      </div>
                      <div className="text-right text-sm">
                        <p className="font-semibold text-gray-900">{doctor.appointments}</p>
                        <p className="text-gray-500">Total Appointments</p>
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
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
