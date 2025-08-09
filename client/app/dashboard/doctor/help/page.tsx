"use client"

import { Label } from "@/components/ui/label"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Mail, Phone, MessageCircle, BookOpen, Lightbulb, AlertCircle, Send } from "lucide-react"

export default function DoctorHelpPage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const faqItems = [
    {
      question: "How do I schedule a new appointment?",
      answer:
        "You can schedule a new appointment by navigating to the 'Appointments' section in your dashboard and clicking on the 'Add Appointment Slot' button. Follow the prompts to select a date, time, and patient.",
    },
    {
      question: "How can I view a patient's medical records?",
      answer:
        "Patient medical records can be accessed from the 'Medical Records' section of your dashboard. You can search for a patient or filter records by type. Click 'View' on any record to see detailed information.",
    },
    {
      question: "What should I do if a patient reports side effects from medication?",
      answer:
        "If a patient reports side effects, assess the severity. For mild, common side effects, advise them on management (e.g., taking medication with food). For severe or unusual side effects, consider adjusting the prescription or scheduling an urgent follow-up. Always document the interaction in their medical record.",
    },
    {
      question: "How do I conduct a telemedicine consultation?",
      answer:
        "To start a telemedicine consultation, go to the 'Telemedicine' page. For scheduled calls, click 'Start Call' next to the appointment. For instant consultations, use the 'Start Instant Call' feature. Ensure your camera and microphone are working.",
    },
    {
      question: "Can I issue electronic prescriptions through the platform?",
      answer:
        "Yes, you can issue electronic prescriptions. Navigate to the 'Prescriptions' section, click 'New Prescription', and fill in the required medication and patient details. The prescription will be sent electronically to the patient's preferred pharmacy.",
    },
  ]

  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setContactForm((prev) => ({ ...prev, [id]: value }))
  }

  const handleContactFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact Form Submitted:", contactForm)
    alert("Your message has been sent! We will get back to you shortly.")
    setContactForm({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <DashboardLayout userRole="doctor" userName="Dr. Sarah Johnson" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Help & Support</h1>
            <p className="text-gray-600">Find answers to common questions or contact our support team</p>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-emerald-600" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Support Section */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-emerald-600" />
              Contact Support
            </CardTitle>
            <Alert className="bg-blue-50 border-blue-200 text-blue-800">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Need immediate assistance?</AlertTitle>
              <AlertDescription>
                For urgent matters, please call our support hotline at{" "}
                <span className="font-semibold">+1 (800) 123-4567</span>.
              </AlertDescription>
            </Alert>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleContactFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" value={contactForm.name} onChange={handleContactFormChange} required />
                </div>
                <div>
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={contactForm.email}
                    onChange={handleContactFormChange}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" value={contactForm.subject} onChange={handleContactFormChange} required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={contactForm.message}
                  onChange={handleContactFormChange}
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <MessageCircle className="h-10 w-10 text-emerald-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat with a support agent in real-time.</p>
              <Button variant="outline">Start Chat</Button>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Phone className="h-10 w-10 text-emerald-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our support team.</p>
              <Button variant="outline">Call Now</Button>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Lightbulb className="h-10 w-10 text-emerald-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Knowledge Base</h3>
              <p className="text-gray-600 mb-4">Explore articles and guides for self-help.</p>
              <Button variant="outline">Browse Articles</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
