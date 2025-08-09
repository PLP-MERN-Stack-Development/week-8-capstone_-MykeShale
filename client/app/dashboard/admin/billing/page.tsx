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
  DollarSign,
  Search,
  Plus,
  MoreVertical,
  Eye,
  Edit,
  Calendar,
  Clock,
  User,
  CreditCard,
  CheckCircle,
  AlertCircle,
  XCircle,
  Download,
  Printer,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Stethoscope } from "lucide-react" // Import Stethoscope here

export default function AdminBillingPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterType, setFilterType] = useState("all")
  const [selectedTransaction, setSelectedTransaction] = useState(null)

  const transactions = [
    {
      id: 1,
      type: "Patient Payment",
      description: "Consultation Fee - John Smith",
      amount: 50.0,
      date: "2024-01-15",
      status: "completed",
      patient: "John Smith",
      doctor: "Dr. Sarah Johnson",
      invoiceId: "INV-2024-001",
      paymentMethod: "Credit Card",
    },
    {
      id: 2,
      type: "Subscription Fee",
      description: "Doctor Subscription - Dr. Michael Chen",
      amount: 99.99,
      date: "2024-01-10",
      status: "completed",
      doctor: "Dr. Michael Chen",
      invoiceId: "INV-2024-002",
      paymentMethod: "Bank Transfer",
    },
    {
      id: 3,
      type: "Patient Payment",
      description: "Telemedicine Call - Maria Garcia",
      amount: 40.0,
      date: "2024-01-12",
      status: "pending",
      patient: "Maria Garcia",
      doctor: "Dr. Sarah Johnson",
      invoiceId: "INV-2024-003",
      paymentMethod: "Pending",
    },
    {
      id: 4,
      type: "Refund",
      description: "Cancelled Appointment - David Johnson",
      amount: -25.0,
      date: "2024-01-08",
      status: "completed",
      patient: "David Johnson",
      doctor: "Dr. Emily Rodriguez",
      invoiceId: "INV-2024-004",
      paymentMethod: "Credit Card",
    },
  ]

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (transaction.patient && transaction.patient.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (transaction.doctor && transaction.doctor.toLowerCase().includes(searchQuery.toLowerCase())) ||
      transaction.invoiceId.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = filterStatus === "all" || transaction.status === filterStatus
    const matchesType = filterType === "all" || transaction.type === filterType

    return matchesSearch && matchesStatus && matchesType
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "pending":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />
      case "failed":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <CheckCircle className="h-4 w-4 text-gray-500" />
    }
  }

  const totalRevenue = transactions.reduce((sum, t) => sum + (t.amount > 0 ? t.amount : 0), 0)
  const pendingPayments = transactions.filter((t) => t.status === "pending").length

  return (
    <DashboardLayout userRole="admin" userName="Admin User" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Billing & Payments</h1>
            <p className="text-gray-600">Manage all financial transactions and invoices</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="h-4 w-4 mr-2" />
            Create New Invoice
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Transactions</p>
                  <p className="text-2xl font-bold text-gray-900">{transactions.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-green-600">${totalRevenue.toFixed(2)}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Payments</p>
                  <p className="text-2xl font-bold text-yellow-600">{pendingPayments}</p>
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
                  <p className="text-sm font-medium text-gray-600">Refunds Issued</p>
                  <p className="text-2xl font-bold text-red-600">{transactions.filter((t) => t.amount < 0).length}</p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <XCircle className="h-6 w-6 text-red-600" />
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
                  placeholder="Search transactions by description, invoice ID, or user..."
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
                  <SelectItem value="Patient Payment">Patient Payment</SelectItem>
                  <SelectItem value="Subscription Fee">Subscription Fee</SelectItem>
                  <SelectItem value="Refund">Refund</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Transaction List */}
        <div className="space-y-4">
          {filteredTransactions.map((transaction) => (
            <Card
              key={transaction.id}
              className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-lg bg-gray-100">
                      <DollarSign className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{transaction.description}</h3>
                      <p className="text-emerald-600 font-medium mb-1">{transaction.type}</p>
                      <p className="text-gray-600 mb-2">Invoice ID: {transaction.invoiceId}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{transaction.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{transaction.paymentMethod}</span>
                        </div>
                        {transaction.patient && (
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{transaction.patient}</span>
                          </div>
                        )}
                        {transaction.doctor && (
                          <div className="flex items-center space-x-1">
                            <Stethoscope className="h-4 w-4" />
                            <span>{transaction.doctor}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-3">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(transaction.status)}
                      <Badge className={`${getStatusColor(transaction.status)} border-0`}>{transaction.status}</Badge>
                    </div>
                    <div className="text-right text-lg font-bold text-gray-900">
                      {transaction.amount < 0 ? "-" : ""}${Math.abs(transaction.amount).toFixed(2)}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedTransaction(transaction)}>
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Transaction Details</DialogTitle>
                            <DialogDescription>Complete information about this financial transaction</DialogDescription>
                          </DialogHeader>
                          {selectedTransaction && (
                            <div className="space-y-6">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Transaction Information</h4>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Description:</span>
                                      <span>{selectedTransaction.description}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Type:</span>
                                      <span>{selectedTransaction.type}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Amount:</span>
                                      <span className="font-semibold text-gray-900">
                                        {selectedTransaction.amount < 0 ? "-" : ""}$
                                        {Math.abs(selectedTransaction.amount).toFixed(2)}
                                      </span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Date:</span>
                                      <span>{selectedTransaction.date}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Status:</span>
                                      <Badge className={`${getStatusColor(selectedTransaction.status)}`}>
                                        {selectedTransaction.status}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Billing Details</h4>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Invoice ID:</span>
                                      <span>{selectedTransaction.invoiceId}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Payment Method:</span>
                                      <span>{selectedTransaction.paymentMethod}</span>
                                    </div>
                                    {selectedTransaction.patient && (
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Patient:</span>
                                        <span>{selectedTransaction.patient}</span>
                                      </div>
                                    )}
                                    {selectedTransaction.doctor && (
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Doctor:</span>
                                        <span>{selectedTransaction.doctor}</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="flex space-x-3">
                                <Button className="bg-emerald-600 hover:bg-emerald-700">
                                  <Edit className="h-4 w-4 mr-2" />
                                  Edit Transaction
                                </Button>
                                <Button variant="outline">
                                  <Printer className="h-4 w-4 mr-2" />
                                  Print Invoice
                                </Button>
                                <Button variant="outline">
                                  <Download className="h-4 w-4 mr-2" />
                                  Download Receipt
                                </Button>
                                {selectedTransaction.status === "pending" && (
                                  <Button variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                                    <XCircle className="h-4 w-4 mr-2" />
                                    Mark as Failed
                                  </Button>
                                )}
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
