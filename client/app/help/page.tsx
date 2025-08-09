"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  HelpCircle,
  Search,
  MessageCircle,
  Phone,
  Mail,
  Video,
  FileText,
  Book,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Send,
  Download,
  ExternalLink,
  PlayCircle,
  Headphones,
  Calendar,
  Shield,
  Heart,
  Pill,
  Activity,
} from "lucide-react"
import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function HelpSupportPage() {
  const [activeTab, setActiveTab] = useState("faq")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [ticketSubject, setTicketSubject] = useState("")
  const [ticketMessage, setTicketMessage] = useState("")

  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      color: "blue",
      availability: "24/7",
      responseTime: "< 2 minutes",
      action: "Start Chat",
    },
    {
      title: "Phone Support",
      description: "Speak directly with a support specialist",
      icon: Phone,
      color: "green",
      availability: "Mon-Fri 8AM-8PM",
      responseTime: "< 5 minutes",
      action: "Call Now",
    },
    {
      title: "Video Call",
      description: "Screen sharing and video assistance",
      icon: Video,
      color: "purple",
      availability: "Mon-Fri 9AM-6PM",
      responseTime: "Schedule required",
      action: "Schedule Call",
    },
    {
      title: "Email Support",
      description: "Send detailed questions and get comprehensive answers",
      icon: Mail,
      color: "orange",
      availability: "24/7",
      responseTime: "< 4 hours",
      action: "Send Email",
    },
  ]

  const faqCategories = [
    { id: "all", name: "All Categories", count: 45 },
    { id: "account", name: "Account & Billing", count: 12 },
    { id: "appointments", name: "Appointments", count: 8 },
    { id: "health-records", name: "Health Records", count: 10 },
    { id: "telemedicine", name: "Telemedicine", count: 7 },
    { id: "medications", name: "Medications", count: 5 },
    { id: "technical", name: "Technical Issues", count: 3 },
  ]

  const faqs = [
    {
      category: "account",
      question: "How do I update my profile information?",
      answer:
        "You can update your profile information by going to Settings > Profile. Click the 'Edit' button to make changes to your personal information, contact details, and emergency contacts.",
      helpful: 24,
      notHelpful: 2,
    },
    {
      category: "appointments",
      question: "How do I book an appointment with a doctor?",
      answer:
        "To book an appointment, go to the 'Book Appointment' page from your dashboard. Select your preferred doctor, choose an available time slot, and confirm your booking. You'll receive a confirmation email with appointment details.",
      helpful: 31,
      notHelpful: 1,
    },
    {
      category: "appointments",
      question: "Can I reschedule or cancel my appointment?",
      answer:
        "Yes, you can reschedule or cancel appointments up to 24 hours before the scheduled time. Go to 'My Appointments', find your appointment, and click 'Reschedule' or 'Cancel'. Please note that cancellations within 24 hours may incur a fee.",
      helpful: 18,
      notHelpful: 3,
    },
    {
      category: "health-records",
      question: "How do I access my medical records?",
      answer:
        "Your medical records are available in the 'Health Records' section of your dashboard. You can view, download, and share your records with healthcare providers. All records are securely encrypted and HIPAA compliant.",
      helpful: 22,
      notHelpful: 1,
    },
    {
      category: "telemedicine",
      question: "What do I need for a video consultation?",
      answer:
        "For video consultations, you'll need a device with a camera and microphone (computer, tablet, or smartphone), a stable internet connection, and the latest version of your web browser. We recommend testing your setup before your appointment.",
      helpful: 27,
      notHelpful: 2,
    },
    {
      category: "medications",
      question: "How do I set up medication reminders?",
      answer:
        "Go to the 'Medications' section and click 'Add Medication'. Enter your medication details, dosage, and frequency. You can enable push notifications, email reminders, or SMS alerts to help you stay on track with your medication schedule.",
      helpful: 19,
      notHelpful: 1,
    },
    {
      category: "technical",
      question: "I'm having trouble logging in. What should I do?",
      answer:
        "If you're having login issues, first try resetting your password using the 'Forgot Password' link. Clear your browser cache and cookies, or try using a different browser. If the problem persists, contact our technical support team.",
      helpful: 15,
      notHelpful: 4,
    },
    {
      category: "account",
      question: "How do I change my subscription plan?",
      answer:
        "To change your subscription plan, go to Settings > Billing. You can upgrade or downgrade your plan at any time. Changes take effect immediately for upgrades, or at the next billing cycle for downgrades.",
      helpful: 13,
      notHelpful: 2,
    },
  ]

  const tutorials = [
    {
      title: "Getting Started with WellCareCircle",
      description: "Complete guide to setting up your account and navigating the platform",
      duration: "8 min",
      type: "video",
      category: "Getting Started",
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
    {
      title: "Booking Your First Appointment",
      description: "Step-by-step tutorial on scheduling appointments with healthcare providers",
      duration: "5 min",
      type: "video",
      category: "Appointments",
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
    {
      title: "Managing Your Health Records",
      description: "Learn how to upload, organize, and share your medical documents",
      duration: "6 min",
      type: "video",
      category: "Health Records",
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
    {
      title: "Using Telemedicine Features",
      description: "Guide to video consultations and remote healthcare services",
      duration: "7 min",
      type: "video",
      category: "Telemedicine",
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
    {
      title: "Medication Management Guide",
      description: "How to track medications, set reminders, and manage prescriptions",
      duration: "4 min",
      type: "article",
      category: "Medications",
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
    {
      title: "Privacy and Security Settings",
      description: "Protecting your health information and managing privacy preferences",
      duration: "3 min",
      type: "article",
      category: "Security",
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
  ]

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleSubmitTicket = () => {
    // In a real app, this would submit the support ticket
    console.log("Support ticket submitted:", { ticketSubject, ticketMessage })
    setTicketSubject("")
    setTicketMessage("")
  }

  return (
    <DashboardLayout userRole="patient" userName="John Doe" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Help & Support</h1>
          <p className="text-gray-600">Get the help you need to make the most of WellCareCircle</p>
        </div>

        {/* Quick Support Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportOptions.map((option, index) => {
            const IconComponent = option.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-${option.color}-100`}
                    >
                      <IconComponent className={`h-8 w-8 text-${option.color}-600`} />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{option.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>{option.availability}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                        <CheckCircle className="h-3 w-3" />
                        <span>{option.responseTime}</span>
                      </div>
                    </div>
                    <Button className={`w-full bg-${option.color}-600 hover:bg-${option.color}-700`}>
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-none lg:flex bg-white border shadow-sm">
            <TabsTrigger value="faq" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <HelpCircle className="h-4 w-4 mr-2" />
              FAQ
            </TabsTrigger>
            <TabsTrigger
              value="tutorials"
              className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
            >
              <PlayCircle className="h-4 w-4 mr-2" />
              Tutorials
            </TabsTrigger>
            <TabsTrigger value="contact" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact Us
            </TabsTrigger>
            <TabsTrigger
              value="resources"
              className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
            >
              <FileText className="h-4 w-4 mr-2" />
              Resources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="faq" className="space-y-6">
            {/* Search and Filter */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search frequently asked questions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full lg:w-64">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {faqCategories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name} ({category.count})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* FAQ List */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-emerald-600" />
                  <span>Frequently Asked Questions</span>
                  <Badge variant="secondary">{filteredFaqs.length} questions</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="text-left hover:no-underline">
                        <div className="flex items-start space-x-3">
                          <Badge variant="outline" className="mt-1 text-xs">
                            {faqCategories.find((cat) => cat.id === faq.category)?.name.split(" ")[0]}
                          </Badge>
                          <span className="font-medium">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-4">
                        <div className="space-y-4">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          <div className="flex items-center justify-between pt-4 border-t">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>Was this helpful?</span>
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm" className="h-8 bg-transparent">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Yes ({faq.helpful})
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 bg-transparent">
                                  <AlertCircle className="h-3 w-3 mr-1" />
                                  No ({faq.notHelpful})
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tutorials" className="space-y-6">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PlayCircle className="h-5 w-5 text-blue-600" />
                  <span>Video Tutorials & Guides</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tutorials.map((tutorial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-lg border shadow-sm hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className="relative">
                        <img
                          src={tutorial.thumbnail || "/placeholder.svg"}
                          alt={tutorial.title}
                          className="w-full h-32 object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-t-lg flex items-center justify-center">
                          {tutorial.type === "video" ? (
                            <PlayCircle className="h-12 w-12 text-white" />
                          ) : (
                            <FileText className="h-12 w-12 text-white" />
                          )}
                        </div>
                        <Badge className="absolute top-2 right-2 bg-black bg-opacity-70 text-white">
                          {tutorial.duration}
                        </Badge>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-xs">
                            {tutorial.category}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {tutorial.type}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">{tutorial.title}</h4>
                        <p className="text-sm text-gray-600">{tutorial.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-purple-600" />
                  <span>Submit a Support Ticket</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="ticketSubject">Subject</Label>
                      <Input
                        id="ticketSubject"
                        placeholder="Brief description of your issue"
                        value={ticketSubject}
                        onChange={(e) => setTicketSubject(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select issue category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="account">Account & Billing</SelectItem>
                          <SelectItem value="appointments">Appointments</SelectItem>
                          <SelectItem value="technical">Technical Issues</SelectItem>
                          <SelectItem value="health-records">Health Records</SelectItem>
                          <SelectItem value="telemedicine">Telemedicine</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="priority">Priority</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="urgent">Urgent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="ticketMessage">Message</Label>
                      <Textarea
                        id="ticketMessage"
                        placeholder="Please describe your issue in detail..."
                        value={ticketMessage}
                        onChange={(e) => setTicketMessage(e.target.value)}
                        rows={6}
                      />
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Shield className="h-4 w-4" />
                      <span>Your information is secure and will only be used to assist you</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button
                    onClick={handleSubmitTicket}
                    disabled={!ticketSubject || !ticketMessage}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Submit Ticket
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Phone Support</h4>
                  <p className="text-gray-600 mb-2">1-800-WELLCARE</p>
                  <p className="text-sm text-gray-500">Mon-Fri 8AM-8PM EST</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email Support</h4>
                  <p className="text-gray-600 mb-2">support@wellcarecircle.com</p>
                  <p className="text-sm text-gray-500">Response within 4 hours</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Live Chat</h4>
                  <p className="text-gray-600 mb-2">Available 24/7</p>
                  <p className="text-sm text-gray-500">Average response &lt; 2 min</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Documentation */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Book className="h-5 w-5 text-emerald-600" />
                    <span>Documentation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <Heart className="h-5 w-5 text-red-500" />
                        <div>
                          <h4 className="font-medium text-gray-900">Patient Guide</h4>
                          <p className="text-sm text-gray-600">Complete guide for patients</p>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-blue-500" />
                        <div>
                          <h4 className="font-medium text-gray-900">Appointment Booking</h4>
                          <p className="text-sm text-gray-600">How to schedule appointments</p>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <Pill className="h-5 w-5 text-green-500" />
                        <div>
                          <h4 className="font-medium text-gray-900">Medication Management</h4>
                          <p className="text-sm text-gray-600">Managing prescriptions and reminders</p>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <Activity className="h-5 w-5 text-purple-500" />
                        <div>
                          <h4 className="font-medium text-gray-900">Health Tracking</h4>
                          <p className="text-sm text-gray-600">Monitor your health metrics</p>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Downloads */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Download className="h-5 w-5 text-blue-600" />
                    <span>Downloads</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-red-500" />
                        <div>
                          <h4 className="font-medium text-gray-900">Privacy Policy</h4>
                          <p className="text-sm text-gray-600">PDF • 2.3 MB</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-blue-500" />
                        <div>
                          <h4 className="font-medium text-gray-900">Terms of Service</h4>
                          <p className="text-sm text-gray-600">PDF • 1.8 MB</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-green-500" />
                        <div>
                          <h4 className="font-medium text-gray-900">HIPAA Notice</h4>
                          <p className="text-sm text-gray-600">PDF • 1.2 MB</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Headphones className="h-5 w-5 text-purple-500" />
                        <div>
                          <h4 className="font-medium text-gray-900">Mobile App</h4>
                          <p className="text-sm text-gray-600">iOS & Android</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Get App
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Community */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-orange-600" />
                  <span>Community & Feedback</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg">
                    <Users className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Community Forum</h4>
                    <p className="text-sm text-gray-600 mb-3">Connect with other patients and share experiences</p>
                    <Button variant="outline" size="sm">
                      Join Forum
                    </Button>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                    <Star className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Feature Requests</h4>
                    <p className="text-sm text-gray-600 mb-3">Suggest new features and improvements</p>
                    <Button variant="outline" size="sm">
                      Submit Idea
                    </Button>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                    <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Feedback</h4>
                    <p className="text-sm text-gray-600 mb-3">Help us improve by sharing your feedback</p>
                    <Button variant="outline" size="sm">
                      Give Feedback
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
