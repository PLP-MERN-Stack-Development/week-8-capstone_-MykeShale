"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, MapPin, Video, Star, Heart, ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function BookAppointmentPage() {
  const [step, setStep] = useState(1)
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [appointmentType, setAppointmentType] = useState("in-person")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "General Practice",
      rating: 4.9,
      reviews: 127,
      experience: "8 years",
      clinic: "Community Health Center",
      location: "Downtown Medical District",
      avatar: "/placeholder.svg?height=80&width=80",
      available: true,
      nextAvailable: "Today",
      consultationFee: "Free",
      languages: ["English", "Spanish"],
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Cardiology",
      rating: 4.8,
      reviews: 89,
      experience: "12 years",
      clinic: "Heart Care Clinic",
      location: "Medical Plaza",
      avatar: "/placeholder.svg?height=80&width=80",
      available: true,
      nextAvailable: "Tomorrow",
      consultationFee: "Free",
      languages: ["English", "Mandarin"],
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      rating: 4.9,
      reviews: 156,
      experience: "6 years",
      clinic: "Children's Health Center",
      location: "Family Medical Complex",
      avatar: "/placeholder.svg?height=80&width=80",
      available: true,
      nextAvailable: "Today",
      consultationFee: "Free",
      languages: ["English", "Spanish", "Portuguese"],
    },
  ]

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
  ]

  const handleBooking = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setStep(4) // Success step
    setIsLoading(false)
  }

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Find a Doctor</h2>
        <p className="text-gray-600">Choose from our network of qualified healthcare providers</p>
      </div>

      <div className="flex space-x-4 mb-6">
        <div className="flex-1">
          <Input placeholder="Search by name or specialty..." />
        </div>
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Specialty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General Practice</SelectItem>
            <SelectItem value="cardiology">Cardiology</SelectItem>
            <SelectItem value="pediatrics">Pediatrics</SelectItem>
            <SelectItem value="dermatology">Dermatology</SelectItem>
            <SelectItem value="psychiatry">Psychiatry</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="downtown">Downtown</SelectItem>
            <SelectItem value="medical-plaza">Medical Plaza</SelectItem>
            <SelectItem value="family-complex">Family Complex</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6">
        {doctors.map((doctor) => (
          <Card
            key={doctor.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedDoctor?.id === doctor.id ? "ring-2 ring-emerald-500 border-emerald-200" : ""
            }`}
            onClick={() => setSelectedDoctor(doctor)}
          >
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={doctor.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {doctor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                      <p className="text-emerald-600 font-medium">{doctor.specialty}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{doctor.rating}</span>
                          <span className="text-sm text-gray-500">({doctor.reviews} reviews)</span>
                        </div>
                        <span className="text-sm text-gray-500">{doctor.experience} experience</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {doctor.consultationFee}
                      </Badge>
                      <p className="text-sm text-gray-500 mt-1">Next: {doctor.nextAvailable}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-600 mb-1">
                      <MapPin className="h-4 w-4" />
                      <span>
                        {doctor.clinic} - {doctor.location}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Languages:</span>
                      {doctor.languages.map((lang, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Date & Time</h2>
        <p className="text-gray-600">Choose your preferred appointment slot</p>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={selectedDoctor?.avatar || "/placeholder.svg"} />
              <AvatarFallback>
                {selectedDoctor?.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-gray-900">{selectedDoctor?.name}</h3>
              <p className="text-emerald-600">{selectedDoctor?.specialty}</p>
              <p className="text-sm text-gray-600">{selectedDoctor?.clinic}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label className="text-base font-medium mb-4 block">Appointment Type</Label>
          <div className="space-y-3">
            <Card
              className={`cursor-pointer transition-all ${
                appointmentType === "in-person" ? "ring-2 ring-emerald-500 border-emerald-200" : ""
              }`}
              onClick={() => setAppointmentType("in-person")}
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  <div>
                    <h4 className="font-medium">In-Person Visit</h4>
                    <p className="text-sm text-gray-600">Visit the clinic</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card
              className={`cursor-pointer transition-all ${
                appointmentType === "video" ? "ring-2 ring-emerald-500 border-emerald-200" : ""
              }`}
              onClick={() => setAppointmentType("video")}
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Video className="h-5 w-5 text-blue-600" />
                  <div>
                    <h4 className="font-medium">Video Consultation</h4>
                    <p className="text-sm text-gray-600">Online video call</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <Label className="text-base font-medium mb-4 block">Select Date</Label>
          <Input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
      </div>

      {selectedDate && (
        <div>
          <Label className="text-base font-medium mb-4 block">Available Time Slots</Label>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
            {timeSlots.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                className={`${
                  selectedTime === time ? "bg-emerald-600 hover:bg-emerald-700" : "hover:border-emerald-300"
                }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Appointment Details</h2>
        <p className="text-gray-600">Provide additional information for your visit</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Appointment Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={selectedDoctor?.avatar || "/placeholder.svg"} />
              <AvatarFallback>
                {selectedDoctor?.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-gray-900">{selectedDoctor?.name}</h3>
              <p className="text-emerald-600">{selectedDoctor?.specialty}</p>
              <p className="text-sm text-gray-600">{selectedDoctor?.clinic}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span className="text-sm">
                {selectedDate} at {selectedTime}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              {appointmentType === "video" ? (
                <Video className="h-4 w-4 text-blue-500" />
              ) : (
                <MapPin className="h-4 w-4 text-emerald-500" />
              )}
              <span className="text-sm capitalize">{appointmentType.replace("-", " ")} consultation</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div>
          <Label htmlFor="reason">Reason for Visit</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select reason for your visit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="checkup">Regular Checkup</SelectItem>
              <SelectItem value="followup">Follow-up Visit</SelectItem>
              <SelectItem value="symptoms">Specific Symptoms</SelectItem>
              <SelectItem value="prescription">Prescription Refill</SelectItem>
              <SelectItem value="consultation">General Consultation</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="symptoms">Describe your symptoms or concerns (Optional)</Label>
          <Textarea
            id="symptoms"
            placeholder="Please describe any symptoms, concerns, or questions you'd like to discuss..."
            rows={4}
          />
        </div>

        <div>
          <Label htmlFor="phone">Contact Phone Number</Label>
          <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
        </div>
      </div>
    </div>
  )

  const renderStep4 = () => (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <div className="p-4 bg-green-100 rounded-full">
          <Check className="h-12 w-12 text-green-600" />
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Appointment Confirmed!</h2>
        <p className="text-gray-600">Your appointment has been successfully booked.</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={selectedDoctor?.avatar || "/placeholder.svg"} />
                <AvatarFallback>
                  {selectedDoctor?.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">{selectedDoctor?.name}</h3>
                <p className="text-emerald-600">{selectedDoctor?.specialty}</p>
                <p className="text-sm text-gray-600">{selectedDoctor?.clinic}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="text-sm">
                  {selectedDate} at {selectedTime}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                {appointmentType === "video" ? (
                  <Video className="h-4 w-4 text-blue-500" />
                ) : (
                  <MapPin className="h-4 w-4 text-emerald-500" />
                )}
                <span className="text-sm capitalize">{appointmentType.replace("-", " ")} consultation</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          A confirmation email has been sent to your registered email address. You will receive a reminder 24 hours
          before your appointment.
        </p>
        <div className="flex justify-center space-x-4">
          <Button onClick={() => router.push("/dashboard/patient")} className="bg-emerald-600 hover:bg-emerald-700">
            Go to Dashboard
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setStep(1)
              setSelectedDoctor(null)
            }}
          >
            Book Another
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard/patient">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-emerald-600" />
                <span className="text-lg font-semibold text-gray-900">Book Appointment</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`h-2 w-8 rounded-full ${i <= step ? "bg-emerald-600" : "bg-gray-200"}`} />
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}

        {step < 4 && (
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                Previous
              </Button>
            )}
            <Button
              onClick={() => {
                if (step === 3) {
                  handleBooking()
                } else {
                  setStep(step + 1)
                }
              }}
              disabled={
                (step === 1 && !selectedDoctor) || (step === 2 && (!selectedDate || !selectedTime)) || isLoading
              }
              className="bg-emerald-600 hover:bg-emerald-700 ml-auto"
            >
              {isLoading ? "Booking..." : step === 3 ? "Confirm Booking" : "Next"}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
