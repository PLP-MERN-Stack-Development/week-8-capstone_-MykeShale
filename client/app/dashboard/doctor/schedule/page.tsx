"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
import { MapPin, Video, Plus, Users, Edit, Trash2, ChevronLeft, ChevronRight } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function DoctorSchedulePage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedSlot, setSelectedSlot] = useState(null)

  const getWeekDays = (date: Date) => {
    const startOfWeek = new Date(date)
    startOfWeek.setDate(date.getDate() - date.getDay()) // Sunday
    const days = []
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek)
      day.setDate(startOfWeek.getDate() + i)
      days.push(day)
    }
    return days
  }

  const weekDays = getWeekDays(currentDate)

  const timeSlots = [
    { time: "08:00 AM", available: true, type: "In-person", patient: null },
    { time: "08:30 AM", available: true, type: "Video call", patient: null },
    { time: "09:00 AM", available: false, type: "In-person", patient: "John Smith", reason: "Regular checkup" },
    { time: "09:30 AM", available: true, type: "In-person", patient: null },
    { time: "10:00 AM", available: false, type: "Video call", patient: "Maria Garcia", reason: "Follow-up" },
    { time: "10:30 AM", available: true, type: "Video call", patient: null },
    { time: "11:00 AM", available: false, type: "In-person", patient: "David Lee", reason: "New patient consult" },
    { time: "11:30 AM", available: true, type: "In-person", patient: null },
    { time: "12:00 PM", available: true, type: "Break", patient: null },
    { time: "01:00 PM", available: false, type: "Video call", patient: "Sarah Brown", reason: "Medication review" },
    { time: "01:30 PM", available: true, type: "Video call", patient: null },
    { time: "02:00 PM", available: false, type: "In-person", patient: "Emily White", reason: "Post-op check" },
    { time: "02:30 PM", available: true, type: "In-person", patient: null },
    {
      time: "03:00 PM",
      available: false,
      type: "Video call",
      patient: "Chris Green",
      reason: "Lab results discussion",
    },
    { time: "03:30 PM", available: true, type: "Video call", patient: null },
    { time: "04:00 PM", available: true, type: "In-person", patient: null },
    { time: "04:30 PM", available: true, type: "In-person", patient: null },
  ]

  const handlePreviousWeek = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() - 7)
    setCurrentDate(newDate)
  }

  const handleNextWeek = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() + 7)
    setCurrentDate(newDate)
  }

  const getSlotStatusColor = (slot: any) => {
    if (!slot.available) {
      return slot.type === "Video call" ? "bg-blue-100 text-blue-800" : "bg-emerald-100 text-emerald-800"
    }
    return "bg-gray-100 text-gray-800"
  }

  return (
    <DashboardLayout userRole="doctor" userName="Dr. Sarah Johnson" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Schedule</h1>
            <p className="text-gray-600">Manage your daily and weekly appointment slots</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="h-4 w-4 mr-2" />
            Add New Slot
          </Button>
        </div>

        {/* Week Navigation */}
        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
          <CardContent className="p-4 flex items-center justify-between">
            <Button variant="outline" size="icon" onClick={handlePreviousWeek}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-lg font-semibold text-gray-900">
              {weekDays[0].toLocaleDateString("en-US", { month: "long", day: "numeric" })} -{" "}
              {weekDays[6].toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </h2>
            <Button variant="outline" size="icon" onClick={handleNextWeek}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {weekDays.map((day, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-center text-lg">
                  {day.toLocaleDateString("en-US", { weekday: "short" })}
                </CardTitle>
                <p className="text-center text-sm text-gray-600">
                  {day.toLocaleDateString("en-US", { month: "numeric", day: "numeric" })}
                </p>
              </CardHeader>
              <CardContent className="space-y-2 max-h-[60vh] overflow-y-auto">
                {timeSlots.map((slot, slotIndex) => (
                  <Dialog key={slotIndex}>
                    <DialogTrigger asChild>
                      <div
                        className={`p-3 rounded-lg cursor-pointer transition-all ${
                          slot.available
                            ? "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                            : getSlotStatusColor(slot)
                        }`}
                        onClick={() => setSelectedSlot({ ...slot, date: day.toLocaleDateString("en-US") })}
                      >
                        <div className="flex items-center justify-between text-sm font-medium">
                          <span>{slot.time}</span>
                          {slot.available ? (
                            <Badge variant="outline" className="bg-gray-200 text-gray-700">
                              Available
                            </Badge>
                          ) : (
                            <Badge className={`${getSlotStatusColor(slot)} border-0`}>
                              {slot.type === "Break" ? "Break" : "Booked"}
                            </Badge>
                          )}
                        </div>
                        {!slot.available && slot.patient && (
                          <p className="text-xs text-gray-600 mt-1">
                            <Users className="inline-block h-3 w-3 mr-1" />
                            {slot.patient} ({slot.reason})
                          </p>
                        )}
                        {!slot.available && slot.type !== "Break" && (
                          <div className="flex items-center space-x-1 text-xs text-gray-500 mt-1">
                            {slot.type === "Video call" ? (
                              <Video className="h-3 w-3" />
                            ) : (
                              <MapPin className="h-3 w-3" />
                            )}
                            <span>{slot.type}</span>
                          </div>
                        )}
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>
                          {selectedSlot?.available ? "Add New Appointment" : "Appointment Details"}
                        </DialogTitle>
                        <DialogDescription>
                          {selectedSlot?.available
                            ? "Fill in the details for the new appointment slot."
                            : "View or manage details for this booked appointment."}
                        </DialogDescription>
                      </DialogHeader>
                      {selectedSlot && (
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-medium">Date: {selectedSlot.date}</p>
                            <p className="text-sm font-medium">Time: {selectedSlot.time}</p>
                          </div>
                          {selectedSlot.available ? (
                            <>
                              <Input placeholder="Patient Name" />
                              <Input placeholder="Reason for visit" />
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Appointment Type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="in-person">In-person</SelectItem>
                                  <SelectItem value="video-call">Video Call</SelectItem>
                                </SelectContent>
                              </Select>
                              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                                <Plus className="h-4 w-4 mr-2" />
                                Book Appointment
                              </Button>
                            </>
                          ) : (
                            <>
                              <p className="text-sm">
                                <span className="font-medium">Patient:</span> {selectedSlot.patient}
                              </p>
                              <p className="text-sm">
                                <span className="font-medium">Reason:</span> {selectedSlot.reason}
                              </p>
                              <p className="text-sm">
                                <span className="font-medium">Type:</span> {selectedSlot.type}
                              </p>
                              {selectedSlot.type !== "Break" && (
                                <div className="flex space-x-2">
                                  <Button variant="outline" className="flex-1 bg-transparent">
                                    <Edit className="h-4 w-4 mr-2" />
                                    Reschedule
                                  </Button>
                                  <Button
                                    variant="outline"
                                    className="flex-1 text-red-600 hover:text-red-700 bg-transparent"
                                  >
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Cancel
                                  </Button>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
