"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  Phone,
  PhoneOff,
  Monitor,
  MessageCircle,
  Calendar,
  Clock,
  Users,
  Settings,
  CameraOff,
  Share,
  FileText,
  Download,
  Star,
  CheckCircle,
  AlertCircle,
  Plus,
  Search,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { motion, AnimatePresence } from "framer-motion"

export default function TelemedicinePage() {
  const [activeCall, setActiveCall] = useState(null)
  const [isVideoEnabled, setIsVideoEnabled] = useState(true)
  const [isAudioEnabled, setIsAudioEnabled] = useState(true)
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const [callDuration, setCallDuration] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const videoRef = useRef(null)
  const remoteVideoRef = useRef(null)

  const upcomingConsultations = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "General Practice",
      date: "Today",
      time: "2:30 PM",
      duration: "30 min",
      type: "Follow-up consultation",
      status: "confirmed",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.9,
      meetingId: "123-456-789",
      notes: "Discuss recent test results and medication adjustments",
      canJoinEarly: true,
      joinTime: "2:25 PM",
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Cardiology",
      date: "Tomorrow",
      time: "10:00 AM",
      duration: "45 min",
      type: "Cardiology consultation",
      status: "confirmed",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.8,
      meetingId: "987-654-321",
      notes: "Review heart monitoring results and discuss treatment plan",
      canJoinEarly: false,
      joinTime: "10:00 AM",
    },
    {
      id: 3,
      doctor: "Dr. Emily Rodriguez",
      specialty: "Dermatology",
      date: "Jan 20",
      time: "3:00 PM",
      duration: "30 min",
      type: "Skin consultation",
      status: "pending",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.9,
      meetingId: "456-789-123",
      notes: "Follow-up on skin condition treatment progress",
      canJoinEarly: false,
      joinTime: "3:00 PM",
    },
  ]

  const pastConsultations = [
    {
      id: 4,
      doctor: "Dr. James Wilson",
      specialty: "Orthopedics",
      date: "Jan 10",
      time: "11:00 AM",
      duration: "60 min",
      type: "Orthopedic consultation",
      status: "completed",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.7,
      summary: "Discussed knee pain and recommended physical therapy",
      prescription: "Physical therapy 3x/week, anti-inflammatory medication",
      followUp: "Follow-up in 4 weeks",
      recordingAvailable: true,
      notesAvailable: true,
    },
    {
      id: 5,
      doctor: "Dr. Lisa Park",
      specialty: "Mental Health",
      date: "Jan 5",
      time: "4:00 PM",
      duration: "50 min",
      type: "Therapy session",
      status: "completed",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.6,
      summary: "Discussed coping strategies and stress management techniques",
      prescription: "Continue current medication, practice mindfulness",
      followUp: "Next session in 2 weeks",
      recordingAvailable: false,
      notesAvailable: true,
    },
  ]

  const availableDoctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "General Practice",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.9,
      reviews: 127,
      isOnline: true,
      nextAvailable: "Available now",
      consultationFee: "Free",
      languages: ["English", "Spanish"],
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Cardiology",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.8,
      reviews: 89,
      isOnline: true,
      nextAvailable: "Available now",
      consultationFee: "Free",
      languages: ["English", "Mandarin"],
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Dermatology",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.9,
      reviews: 156,
      isOnline: false,
      nextAvailable: "Available in 2 hours",
      consultationFee: "Free",
      languages: ["English", "Spanish"],
    },
  ]

  // Simulate call timer
  useEffect(() => {
    let interval = null
    if (activeCall) {
      interval = setInterval(() => {
        setCallDuration((duration) => duration + 1)
      }, 1000)
    } else {
      setCallDuration(0)
    }
    return () => clearInterval(interval)
  }, [activeCall])

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const startCall = (consultation) => {
    setActiveCall(consultation)
    setCallDuration(0)
  }

  const endCall = () => {
    setActiveCall(null)
    setIsVideoEnabled(true)
    setIsAudioEnabled(true)
    setIsScreenSharing(false)
    setCallDuration(0)
  }

  const VideoCallInterface = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-900 z-50 flex flex-col"
    >
      {/* Call Header */}
      <div className="bg-gray-800 p-4 flex items-center justify-between text-white">
        <div className="flex items-center space-x-4">
          <Avatar className="h-10 w-10 border-2 border-emerald-400">
            <AvatarImage src={activeCall?.avatar || "/placeholder.svg"} />
            <AvatarFallback>
              {activeCall?.doctor
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{activeCall?.doctor}</h3>
            <p className="text-sm text-gray-300">{activeCall?.specialty}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm">Connected • {formatDuration(callDuration)}</span>
          </div>
          <Badge variant="secondary" className="bg-emerald-600 text-white">
            {activeCall?.type}
          </Badge>
        </div>
      </div>

      {/* Video Area */}
      <div className="flex-1 relative bg-gray-900">
        {/* Remote Video */}
        <div className="w-full h-full relative">
          <video ref={remoteVideoRef} className="w-full h-full object-cover" autoPlay playsInline />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>

          {/* Doctor Info Overlay */}
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-semibold">{activeCall?.doctor}</h3>
            <p className="text-sm opacity-90">{activeCall?.specialty}</p>
          </div>

          {/* Local Video (Picture-in-Picture) */}
          <div className="absolute top-4 right-4 w-48 h-36 bg-gray-800 rounded-lg overflow-hidden border-2 border-gray-600">
            <video ref={videoRef} className="w-full h-full object-cover" autoPlay playsInline muted />
            {!isVideoEnabled && (
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                <CameraOff className="h-8 w-8 text-gray-400" />
              </div>
            )}
          </div>

          {/* Screen Sharing Indicator */}
          {isScreenSharing && (
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-2">
              <Monitor className="h-4 w-4" />
              <span>Screen Sharing</span>
            </div>
          )}
        </div>
      </div>

      {/* Call Controls */}
      <div className="bg-gray-800 p-6">
        <div className="flex items-center justify-center space-x-4">
          <Button
            variant={isAudioEnabled ? "secondary" : "destructive"}
            size="lg"
            className="rounded-full w-14 h-14"
            onClick={() => setIsAudioEnabled(!isAudioEnabled)}
          >
            {isAudioEnabled ? <Mic className="h-6 w-6" /> : <MicOff className="h-6 w-6" />}
          </Button>

          <Button
            variant={isVideoEnabled ? "secondary" : "destructive"}
            size="lg"
            className="rounded-full w-14 h-14"
            onClick={() => setIsVideoEnabled(!isVideoEnabled)}
          >
            {isVideoEnabled ? <Video className="h-6 w-6" /> : <VideoOff className="h-6 w-6" />}
          </Button>

          <Button
            variant="destructive"
            size="lg"
            className="rounded-full w-16 h-16 bg-red-600 hover:bg-red-700"
            onClick={endCall}
          >
            <PhoneOff className="h-8 w-8" />
          </Button>

          <Button
            variant={isScreenSharing ? "default" : "secondary"}
            size="lg"
            className="rounded-full w-14 h-14"
            onClick={() => setIsScreenSharing(!isScreenSharing)}
          >
            <Monitor className="h-6 w-6" />
          </Button>

          <Button variant="secondary" size="lg" className="rounded-full w-14 h-14">
            <MessageCircle className="h-6 w-6" />
          </Button>
        </div>

        {/* Additional Controls */}
        <div className="flex items-center justify-center space-x-2 mt-4">
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
            <FileText className="h-4 w-4 mr-2" />
            Notes
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </div>
    </motion.div>
  )

  const ConsultationCard = ({ consultation, isPast = false }) => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="group">
      <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4 flex-1">
              <div className="relative">
                <Avatar className="h-16 w-16 border-2 border-emerald-200">
                  <AvatarImage src={consultation.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {consultation.doctor
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {!isPast && consultation.status === "confirmed" && (
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{consultation.doctor}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{consultation.rating}</span>
                  </div>
                </div>
                <p className="text-emerald-600 font-medium mb-1">{consultation.specialty}</p>
                <p className="text-gray-600 mb-2">{consultation.type}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{consultation.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{consultation.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Video className="h-4 w-4" />
                    <span>{consultation.duration}</span>
                  </div>
                </div>
                {!isPast && consultation.notes && (
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded-lg mb-2">{consultation.notes}</p>
                )}
                {isPast && consultation.summary && (
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">{consultation.summary}</p>
                    {consultation.prescription && (
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Prescription: </span>
                        <span className="text-gray-600">{consultation.prescription}</span>
                      </div>
                    )}
                    {consultation.followUp && (
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Follow-up: </span>
                        <span className="text-gray-600">{consultation.followUp}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col items-end space-y-3">
              <Badge
                className={`${
                  consultation.status === "confirmed"
                    ? "bg-green-100 text-green-800"
                    : consultation.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-blue-100 text-blue-800"
                } border-0`}
              >
                {consultation.status}
              </Badge>
              {!isPast && (
                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {consultation.canJoinEarly || consultation.date === "Today" ? (
                    <Button onClick={() => startCall(consultation)} className="bg-emerald-600 hover:bg-emerald-700">
                      <Video className="h-4 w-4 mr-2" />
                      Join Call
                    </Button>
                  ) : (
                    <Button variant="outline" disabled>
                      <Clock className="h-4 w-4 mr-2" />
                      Join at {consultation.joinTime}
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    Reschedule
                  </Button>
                </div>
              )}
              {isPast && (
                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {consultation.recordingAvailable && (
                    <Button variant="outline" size="sm">
                      <Video className="h-4 w-4 mr-1" />
                      Recording
                    </Button>
                  )}
                  {consultation.notesAvailable && (
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-1" />
                      Notes
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  const DoctorCard = ({ doctor }) => (
    <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Avatar className="h-16 w-16 border-2 border-emerald-200">
              <AvatarImage src={doctor.avatar || "/placeholder.svg"} />
              <AvatarFallback>
                {doctor.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            {doctor.isOnline && (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">{doctor.rating}</span>
                <span className="text-sm text-gray-500">({doctor.reviews})</span>
              </div>
            </div>
            <p className="text-emerald-600 font-medium mb-1">{doctor.specialty}</p>
            <p className="text-sm text-gray-600 mb-2">{doctor.nextAvailable}</p>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                {doctor.consultationFee}
              </Badge>
              {doctor.languages.map((lang, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700" disabled={!doctor.isOnline}>
              <Video className="h-4 w-4 mr-1" />
              {doctor.isOnline ? "Start Call" : "Unavailable"}
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-1" />
              Schedule
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <DashboardLayout userRole="patient" userName="John Doe" userAvatar="/placeholder.svg?height=48&width=48">
      <AnimatePresence>{activeCall && <VideoCallInterface />}</AnimatePresence>

      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Telemedicine</h1>
            <p className="text-gray-600">Connect with healthcare providers through secure video consultations</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="h-4 w-4 mr-2" />
            Schedule Consultation
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm">Upcoming</p>
                  <p className="text-3xl font-bold">{upcomingConsultations.length}</p>
                </div>
                <Calendar className="h-8 w-8 text-emerald-200" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Completed</p>
                  <p className="text-3xl font-bold text-blue-600">{pastConsultations.length}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Available Doctors</p>
                  <p className="text-3xl font-bold text-green-600">
                    {availableDoctors.filter((d) => d.isOnline).length}
                  </p>
                </div>
                <Users className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Hours</p>
                  <p className="text-3xl font-bold text-purple-600">12.5</p>
                </div>
                <Clock className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-none lg:flex bg-white border shadow-sm">
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Upcoming ({upcomingConsultations.length})
            </TabsTrigger>
            <TabsTrigger value="past" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Past ({pastConsultations.length})
            </TabsTrigger>
            <TabsTrigger value="doctors" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Available Doctors
            </TabsTrigger>
            <TabsTrigger value="instant" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Instant Consultation
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {upcomingConsultations.map((consultation) => (
              <ConsultationCard key={consultation.id} consultation={consultation} />
            ))}
            {upcomingConsultations.length === 0 && (
              <Card className="border-0 shadow-sm">
                <CardContent className="p-12 text-center">
                  <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No upcoming consultations</h3>
                  <p className="text-gray-600 mb-4">Schedule your next telemedicine appointment</p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            {pastConsultations.map((consultation) => (
              <ConsultationCard key={consultation.id} consultation={consultation} isPast={true} />
            ))}
          </TabsContent>

          <TabsContent value="doctors" className="space-y-6">
            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search doctors by name or specialty..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="w-full lg:w-48">
                      <SelectValue placeholder="Filter by specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Specialties</SelectItem>
                      <SelectItem value="general">General Practice</SelectItem>
                      <SelectItem value="cardiology">Cardiology</SelectItem>
                      <SelectItem value="dermatology">Dermatology</SelectItem>
                      <SelectItem value="mental-health">Mental Health</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {availableDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="instant" className="space-y-6">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-emerald-50 to-blue-50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Video className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Immediate Care?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Connect with an available healthcare provider right now for urgent medical questions, prescription
                  refills, or general health concerns.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    <Video className="h-5 w-5 mr-2" />
                    Start Instant Consultation
                  </Button>
                  <Button size="lg" variant="outline">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Chat with Nurse
                  </Button>
                </div>
                <div className="mt-6 text-sm text-gray-500">Average wait time: 3-5 minutes • Available 24/7</div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                    <span>When to Use Instant Care</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Minor illness symptoms (cold, flu, allergies)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Prescription refills and medication questions
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Skin conditions and rashes
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Mental health support and counseling
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      General health questions and concerns
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-red-500" />
                    <span>Emergency Situations</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    For life-threatening emergencies, call 911 immediately. Telemedicine is not suitable for:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Chest pain or heart attack symptoms
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Severe breathing difficulties
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Severe injuries or trauma
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      Loss of consciousness
                    </li>
                  </ul>
                  <Button variant="destructive" className="w-full mt-4">
                    <Phone className="h-4 w-4 mr-2" />
                    Call 911 Emergency
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
