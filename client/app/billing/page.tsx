"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  CreditCard,
  Download,
  Eye,
  DollarSign,
  FileText,
  Plus,
  Search,
  Filter,
  AlertCircle,
  CheckCircle,
  Clock,
  Receipt,
  Building,
} from "lucide-react"
import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function BillingPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const billingOverview = {
    currentBalance: 245.5,
    pendingCharges: 125.0,
    lastPayment: 180.0,
    lastPaymentDate: "Dec 15, 2024",
    nextDueDate: "Jan 15, 2025",
    insuranceCoverage: 85,
  }

  const paymentMethods = [
    {
      id: 1,
      type: "credit",
      brand: "Visa",
      last4: "4242",
      expiry: "12/26",
      isDefault: true,
      name: "John Doe",
    },
    {
      id: 2,
      type: "credit",
      brand: "Mastercard",
      last4: "8888",
      expiry: "08/25",
      isDefault: false,
      name: "John Doe",
    },
  ]

  const invoices = [
    {
      id: "INV-2024-001",
      date: "Dec 20, 2024",
      amount: 125.0,
      status: "pending",
      description: "Cardiology Consultation - Dr. Michael Chen",
      dueDate: "Jan 15, 2025",
      services: [
        { name: "Consultation Fee", amount: 100.0 },
        { name: "ECG Test", amount: 25.0 },
      ],
    },
    {
      id: "INV-2024-002",
      date: "Dec 15, 2024",
      amount: 180.0,
      status: "paid",
      description: "General Practice Visit - Dr. Sarah Johnson",
      paidDate: "Dec 15, 2024",
      services: [
        { name: "Consultation Fee", amount: 80.0 },
        { name: "Blood Test", amount: 50.0 },
        { name: "Prescription", amount: 50.0 },
      ],
    },
    {
      id: "INV-2024-003",
      date: "Nov 28, 2024",
      amount: 95.0,
      status: "paid",
      description: "Telemedicine Session - Dr. Emily Rodriguez",
      paidDate: "Nov 28, 2024",
      services: [
        { name: "Video Consultation", amount: 75.0 },
        { name: "Digital Prescription", amount: 20.0 },
      ],
    },
    {
      id: "INV-2024-004",
      date: "Nov 10, 2024",
      amount: 320.0,
      status: "overdue",
      description: "Specialist Consultation - Dr. Robert Kim",
      dueDate: "Dec 10, 2024",
      services: [
        { name: "Specialist Fee", amount: 200.0 },
        { name: "MRI Scan", amount: 120.0 },
      ],
    },
  ]

  const insuranceInfo = {
    provider: "Blue Cross Blue Shield",
    policyNumber: "BC123456789",
    groupNumber: "GRP001",
    memberID: "MEM123456",
    planType: "PPO Premium",
    deductible: 1500,
    deductibleMet: 750,
    outOfPocketMax: 5000,
    outOfPocketMet: 1200,
    copayPrimary: 25,
    copaySpecialist: 50,
    coinsurance: 20,
  }

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.id.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterStatus === "all" || invoice.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-700"
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      case "overdue":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid":
        return <CheckCircle className="h-4 w-4" />
      case "pending":
        return <Clock className="h-4 w-4" />
      case "overdue":
        return <AlertCircle className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <DashboardLayout userRole="patient" userName="John Doe" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Billing & Payments</h1>
            <p className="text-gray-600">Manage your medical bills, payments, and insurance information</p>
          </div>
          <div className="mt-4 lg:mt-0 flex space-x-3">
            <Button variant="outline" className="bg-white">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Payment Method
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-none lg:flex bg-white border shadow-sm">
            <TabsTrigger value="overview" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="invoices" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Invoices
            </TabsTrigger>
            <TabsTrigger value="payments" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Payment Methods
            </TabsTrigger>
            <TabsTrigger
              value="insurance"
              className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
            >
              Insurance
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Billing Summary Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-red-100">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-red-600 font-medium">Current Balance</p>
                        <p className="text-2xl font-bold text-red-700">${billingOverview.currentBalance}</p>
                      </div>
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                        <DollarSign className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-yellow-100">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-yellow-600 font-medium">Pending Charges</p>
                        <p className="text-2xl font-bold text-yellow-700">${billingOverview.pendingCharges}</p>
                      </div>
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-green-600 font-medium">Last Payment</p>
                        <p className="text-2xl font-bold text-green-700">${billingOverview.lastPayment}</p>
                        <p className="text-xs text-green-600">{billingOverview.lastPaymentDate}</p>
                      </div>
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-blue-600 font-medium">Insurance Coverage</p>
                        <p className="text-2xl font-bold text-blue-700">{billingOverview.insuranceCoverage}%</p>
                        <p className="text-xs text-blue-600">Average coverage</p>
                      </div>
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                        <Building className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Recent Activity */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Receipt className="h-5 w-5 text-emerald-600" />
                  <span>Recent Billing Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {invoices.slice(0, 3).map((invoice, index) => (
                    <motion.div
                      key={invoice.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor(invoice.status)}`}
                        >
                          {getStatusIcon(invoice.status)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{invoice.id}</h4>
                          <p className="text-sm text-gray-600">{invoice.description}</p>
                          <p className="text-xs text-gray-500">{invoice.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">${invoice.amount}</p>
                        <Badge className={getStatusColor(invoice.status)}>{invoice.status}</Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="invoices" className="space-y-6">
            {/* Search and Filter */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search invoices..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-full lg:w-48">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="paid">Paid</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="overdue">Overdue</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Invoices List */}
            <div className="space-y-4">
              {filteredInvoices.map((invoice, index) => (
                <motion.div
                  key={invoice.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{invoice.id}</h3>
                            <Badge className={getStatusColor(invoice.status)}>
                              {getStatusIcon(invoice.status)}
                              <span className="ml-1">{invoice.status}</span>
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-1">{invoice.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>Date: {invoice.date}</span>
                            {invoice.status === "paid" && invoice.paidDate && <span>Paid: {invoice.paidDate}</span>}
                            {(invoice.status === "pending" || invoice.status === "overdue") && invoice.dueDate && (
                              <span>Due: {invoice.dueDate}</span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="text-2xl font-bold text-gray-900">${invoice.amount}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                  <Eye className="h-4 w-4 mr-2" />
                                  View
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>Invoice Details - {invoice.id}</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-6">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <Label className="text-sm font-medium text-gray-500">Invoice Date</Label>
                                      <p className="text-gray-900">{invoice.date}</p>
                                    </div>
                                    <div>
                                      <Label className="text-sm font-medium text-gray-500">Status</Label>
                                      <Badge className={getStatusColor(invoice.status)}>{invoice.status}</Badge>
                                    </div>
                                    <div>
                                      <Label className="text-sm font-medium text-gray-500">Amount</Label>
                                      <p className="text-xl font-bold text-gray-900">${invoice.amount}</p>
                                    </div>
                                    <div>
                                      <Label className="text-sm font-medium text-gray-500">
                                        {invoice.status === "paid" ? "Paid Date" : "Due Date"}
                                      </Label>
                                      <p className="text-gray-900">
                                        {invoice.status === "paid" ? invoice.paidDate : invoice.dueDate}
                                      </p>
                                    </div>
                                  </div>
                                  <Separator />
                                  <div>
                                    <Label className="text-sm font-medium text-gray-500 mb-3 block">Services</Label>
                                    <div className="space-y-2">
                                      {invoice.services.map((service, idx) => (
                                        <div
                                          key={idx}
                                          className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                                        >
                                          <span className="text-gray-700">{service.name}</span>
                                          <span className="font-medium">${service.amount}</span>
                                        </div>
                                      ))}
                                      <div className="flex justify-between items-center pt-2 font-bold text-lg">
                                        <span>Total</span>
                                        <span>${invoice.amount}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                            {invoice.status !== "paid" && (
                              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                                Pay Now
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            {/* Payment Methods */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-emerald-600" />
                  <span>Payment Methods</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {paymentMethods.map((method, index) => (
                  <motion.div
                    key={method.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-gray-900">
                            {method.brand} •••• {method.last4}
                          </h4>
                          {method.isDefault && (
                            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                              Default
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">
                          Expires {method.expiry} • {method.name}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                        Remove
                      </Button>
                    </div>
                  </motion.div>
                ))}
                <Button
                  variant="outline"
                  className="w-full border-dashed border-2 border-gray-300 hover:border-emerald-300 hover:bg-emerald-50 bg-transparent"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Payment Method
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insurance" className="space-y-6">
            {/* Insurance Information */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="h-5 w-5 text-blue-600" />
                  <span>Insurance Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Insurance Provider</Label>
                      <p className="text-lg font-semibold text-gray-900">{insuranceInfo.provider}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Policy Number</Label>
                      <p className="text-gray-900">{insuranceInfo.policyNumber}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Group Number</Label>
                      <p className="text-gray-900">{insuranceInfo.groupNumber}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Member ID</Label>
                      <p className="text-gray-900">{insuranceInfo.memberID}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Plan Type</Label>
                      <p className="text-gray-900">{insuranceInfo.planType}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Annual Deductible</Label>
                      <div className="flex items-center space-x-2">
                        <p className="text-gray-900">
                          ${insuranceInfo.deductibleMet} / ${insuranceInfo.deductible}
                        </p>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                          {Math.round((insuranceInfo.deductibleMet / insuranceInfo.deductible) * 100)}% met
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Out-of-Pocket Maximum</Label>
                      <div className="flex items-center space-x-2">
                        <p className="text-gray-900">
                          ${insuranceInfo.outOfPocketMet} / ${insuranceInfo.outOfPocketMax}
                        </p>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          {Math.round((insuranceInfo.outOfPocketMet / insuranceInfo.outOfPocketMax) * 100)}% met
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Primary Care Copay</Label>
                      <p className="text-gray-900">${insuranceInfo.copayPrimary}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Specialist Copay</Label>
                      <p className="text-gray-900">${insuranceInfo.copaySpecialist}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Coinsurance</Label>
                      <p className="text-gray-900">{insuranceInfo.coinsurance}%</p>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex justify-end space-x-3">
                  <Button variant="outline">Update Insurance</Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Card
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
