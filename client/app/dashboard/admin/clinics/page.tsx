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
  MapPin,
  Search,
  Plus,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Phone,
  Mail,
  Users,
  Stethoscope,
  Calendar,
  Clock,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function AdminClinicsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [selectedClinic, setSelectedClinic] = useState(null)

  const clinics = [
    {
      id: 1,
      name: "Community Health Center",
      address: "123 Main St, Anytown, USA",
      phone: "+1 (555) 111-2222",
      email: "info@communityhealth.com",
      status: "active",
      doctors: 15,
      patients: 500,
      appointments: 1200,
      joinDate: "2022-01-01",
      services: ["General Practice", "Pediatrics", "Vaccinations"],
      operatingHours: "Mon-Fri: 8 AM - 6 PM",
    },
    {
      id: 2,
      name: "Heart Care Clinic",
      address: "456 Oak Ave, Anytown, USA",
      phone: "+1 (555) 333-4444",
      email: "info@heartcare.com",
      status: "active",
      doctors: 8,
      patients: 300,
      appointments: 800,
      joinDate: "2022-03-15",
      services: ["Cardiology", "Echocardiography"],
      operatingHours: "Mon-Fri: 9 AM - 5 PM",
    },
    {
      id: 3,
      name: "Children's Clinic",
      address: "789 Pine Rd, Anytown, USA",
      phone: "+1 (555) 555-6666",
      email: "info@childrensclinic.com",
      status: "pending",
      doctors: 5,
      patients: 150,
      appointments: 400,
      joinDate: "2023-06-01",
      services: ["Pediatrics", "Child Psychology"],
      operatingHours: "Mon-Sat: 9 AM - 4 PM",
    },
    {
      id: 4,
      name: "Skin Health Center",
      address: "321 Elm St, Anytown, USA",
      phone: "+1 (555) 777-8888",
      email: "info@skinhealth.com",
      status: "inactive",
      doctors: 3,
      patients: 100,
      appointments: 250,
      joinDate: "2022-09-20",
      services: ["Dermatology", "Cosmetic Procedures"],
      operatingHours: "Tue-Thu: 10 AM - 7 PM",
    },
  ]

  const filteredClinics = clinics.filter((clinic) => {
    const matchesSearch =
      clinic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      clinic.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      clinic.services.some((service) => service.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesStatus = filterStatus === "all" || clinic.status === filterStatus

    return matchesSearch && matchesStatus
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

  const activeClinics = clinics.filter((c) => c.status === "active")
  const pendingClinics = clinics.filter((c) => c.status === "pending")

  return (
    <DashboardLayout userRole="admin" userName="Admin User" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Clinic Management</h1>
            <p className="text-gray-600">Manage and monitor all registered clinics</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="h-4 w-4 mr-2" />
            Add New Clinic
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Clinics</p>
                  <p className="text-2xl font-bold text-gray-900">{clinics.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Clinics</p>
                  <p className="text-2xl font-bold text-green-600">{activeClinics.length}</p>
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
                  <p className="text-2xl font-bold text-yellow-600">{pendingClinics.length}</p>
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
                  <p className="text-sm font-medium text-gray-600">Total Doctors</p>
                  <p className="text-2xl font-bold text-purple-600">{clinics.reduce((sum, c) => sum + c.doctors, 0)}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Stethoscope className="h-6 w-6 text-purple-600" />
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
                  placeholder="Search clinics by name, address, or services..."
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
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Clinics Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-none lg:flex bg-white border shadow-sm">
            <TabsTrigger value="all" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              All Clinics ({filteredClinics.length})
            </TabsTrigger>
            <TabsTrigger value="active" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Active ({activeClinics.length})
            </TabsTrigger>
            <TabsTrigger value="pending" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Pending ({pendingClinics.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {filteredClinics.map((clinic) => (
              <Card
                key={clinic.id}
                className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-lg bg-gray-100">
                        <MapPin className="h-8 w-8 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{clinic.name}</h3>
                        <p className="text-emerald-600 font-medium mb-1">{clinic.address}</p>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span>{clinic.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4" />
                            <span>{clinic.email}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Joined {clinic.joinDate}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{clinic.patients} patients</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Stethoscope className="h-4 w-4" />
                            <span>{clinic.doctors} doctors</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          {clinic.services.map((service, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-3">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(clinic.status)}
                        <Badge className={`${getStatusColor(clinic.status)} border-0`}>{clinic.status}</Badge>
                      </div>
                      <div className="text-right text-sm">
                        <p className="font-semibold text-gray-900">{clinic.appointments}</p>
                        <p className="text-gray-500">Total Appointments</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => setSelectedClinic(clinic)}>
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Clinic Details - {clinic.name}</DialogTitle>
                              <DialogDescription>Complete clinic information and operational details</DialogDescription>
                            </DialogHeader>
                            {selectedClinic && (
                              <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Clinic Information</h4>
                                    <div className="space-y-2 text-sm">
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Name:</span>
                                        <span>{selectedClinic.name}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Address:</span>
                                        <span className="text-right">{selectedClinic.address}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Phone:</span>
                                        <span>{selectedClinic.phone}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Email:</span>
                                        <span>{selectedClinic.email}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Join Date:</span>
                                        <span>{selectedClinic.joinDate}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Operational Details</h4>
                                    <div className="space-y-2 text-sm">
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Status:</span>
                                        <Badge className={`${getStatusColor(selectedClinic.status)}`}>
                                          {selectedClinic.status}
                                        </Badge>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Operating Hours:</span>
                                        <span>{selectedClinic.operatingHours}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Total Doctors:</span>
                                        <span>{selectedClinic.doctors}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Total Patients:</span>
                                        <span>{selectedClinic.patients}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Total Appointments:</span>
                                        <span>{selectedClinic.appointments}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Services Offered</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {selectedClinic.services.map((service, index) => (
                                      <Badge key={index} variant="outline" className="text-xs">
                                        {service}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                <div className="flex space-x-3 pt-4 border-t">
                                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                                    <Edit className="h-4 w-4 mr-2" />
                                    Edit Clinic
                                  </Button>
                                  <Button variant="outline">
                                    <Users className="h-4 w-4 mr-2" />
                                    View Doctors
                                  </Button>
                                  <Button variant="outline">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    View Appointments
                                  </Button>
                                  <Button variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Deactivate Clinic
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
            {activeClinics.map((clinic) => (
              <Card
                key={clinic.id}
                className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-lg bg-gray-100">
                        <MapPin className="h-8 w-8 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{clinic.name}</h3>
                        <p className="text-emerald-600 font-medium mb-1">{clinic.address}</p>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span>{clinic.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4" />
                            <span>{clinic.email}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Joined {clinic.joinDate}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{clinic.patients} patients</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          {clinic.services.map((service, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-3">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(clinic.status)}
                        <Badge className={`${getStatusColor(clinic.status)} border-0`}>{clinic.status}</Badge>
                      </div>
                      <div className="text-right text-sm">
                        <p className="font-semibold text-gray-900">{clinic.appointments}</p>
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
            {pendingClinics.map((clinic) => (
              <Card
                key={clinic.id}
                className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-lg bg-gray-100">
                        <MapPin className="h-8 w-8 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{clinic.name}</h3>
                        <p className="text-yellow-600 font-medium mb-1">{clinic.address}</p>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span>{clinic.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4" />
                            <span>{clinic.email}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Joined {clinic.joinDate}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{clinic.patients} patients</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          {clinic.services.map((service, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-yellow-100 text-yellow-700">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-3">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(clinic.status)}
                        <Badge className={`${getStatusColor(clinic.status)} border-0`}>{clinic.status}</Badge>
                      </div>
                      <div className="text-right text-sm">
                        <p className="font-semibold text-gray-900">{clinic.appointments}</p>
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
