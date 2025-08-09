import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Mail, PhoneCall, MessageSquare } from "lucide-react"

export default function PatientHelpPage() {
  const faqs = [
    {
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment by navigating to the 'Appointments' section in your dashboard and clicking on 'Book New Appointment'. Follow the prompts to select a doctor, date, and time.",
    },
    {
      question: "How can I view my health records?",
      answer:
        "Your health records are available under the 'Health Records' section. You can view past diagnoses, lab results, and treatment plans there.",
    },
    {
      question: "What should I do in an emergency?",
      answer:
        "In case of an emergency, please go to the 'Emergency' section of your dashboard. You will find quick access to emergency hotlines and your emergency contacts.",
    },
    {
      question: "How do I update my personal information?",
      answer:
        "You can update your personal information in the 'Account Center' section. Make sure to save any changes you make.",
    },
    {
      question: "Can I connect with my doctor via messages?",
      answer:
        "Yes, you can send secure messages to your doctor through the 'Messages' section of your dashboard. Your doctor will respond as soon as possible.",
    },
  ]

  return (
    <div className="grid gap-6 p-4 md:p-6">
      <h1 className="text-3xl font-bold">Help & Support</h1>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Find answers to common questions.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input placeholder="Search FAQs..." className="pl-9" />
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
          <CardDescription>Reach out to our support team for further assistance.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          <Button variant="outline" className="flex flex-col h-auto py-4 bg-transparent">
            <Mail className="h-8 w-8 mb-2" />
            <span className="font-semibold">Email Support</span>
            <span className="text-sm text-gray-500">support@wellcare.com</span>
          </Button>
          <Button variant="outline" className="flex flex-col h-auto py-4 bg-transparent">
            <PhoneCall className="h-8 w-8 mb-2" />
            <span className="font-semibold">Call Us</span>
            <span className="text-sm text-gray-500">+1 (800) 123-4567</span>
          </Button>
          <Button variant="outline" className="flex flex-col h-auto py-4 bg-transparent">
            <MessageSquare className="h-8 w-8 mb-2" />
            <span className="font-semibold">Live Chat</span>
            <span className="text-sm text-gray-500">Available 9 AM - 5 PM EST</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
