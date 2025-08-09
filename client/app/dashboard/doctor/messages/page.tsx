"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Send,
  Search,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  Clock,
  MessageCircle,
  Calendar,
  FileText,
  ImageIcon,
  Mic,
  Archive,
  Flag,
  User,
  Stethoscope,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function DoctorMessagesPage() {
  const [selectedChat, setSelectedChat] = useState(null)
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const conversations = [
    {
      id: 1,
      name: "John Smith",
      age: 45,
      condition: "Hypertension",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thank you for the prescription. When should I schedule my next visit?",
      timestamp: "1 hour ago",
      unread: 1,
      online: false,
      lastVisit: "2 weeks ago",
      nextAppointment: "Jan 20, 10:00 AM",
      messages: [
        {
          id: 1,
          sender: "doctor",
          content:
            "Hello John! I've reviewed your latest blood pressure readings. They look much better since we adjusted your medication.",
          timestamp: "9:00 AM",
          date: "Today",
          type: "text",
        },
        {
          id: 2,
          sender: "patient",
          content:
            "Thank you, Dr. Johnson! I've been taking the medication as prescribed and monitoring my BP twice daily.",
          timestamp: "9:15 AM",
          date: "Today",
          type: "text",
        },
        {
          id: 3,
          sender: "patient",
          content: "Here are my readings from this week:",
          timestamp: "9:16 AM",
          date: "Today",
          type: "text",
          attachment: {
            type: "image",
            name: "BP_Readings_Week3.jpg",
            size: "156 KB",
          },
        },
        {
          id: 4,
          sender: "doctor",
          content:
            "Excellent progress! Your readings are consistently in the normal range. Continue with the current dosage and keep monitoring.",
          timestamp: "9:30 AM",
          date: "Today",
          type: "text",
        },
        {
          id: 5,
          sender: "patient",
          content: "Thank you for the prescription. When should I schedule my next visit?",
          timestamp: "10:00 AM",
          date: "Today",
          type: "text",
        },
      ],
    },
    {
      id: 2,
      name: "Maria Garcia",
      age: 32,
      condition: "Diabetes Type 2",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "I'm experiencing some side effects from the new medication.",
      timestamp: "3 hours ago",
      unread: 2,
      online: true,
      lastVisit: "1 week ago",
      nextAppointment: "Jan 18, 2:00 PM",
      messages: [
        {
          id: 1,
          sender: "patient",
          content: "Good morning, Dr. Johnson. I started the new diabetes medication you prescribed yesterday.",
          timestamp: "8:00 AM",
          date: "Today",
          type: "text",
        },
        {
          id: 2,
          sender: "doctor",
          content: "Good morning, Maria! How are you feeling with the new medication? Any side effects so far?",
          timestamp: "8:30 AM",
          date: "Today",
          type: "text",
        },
        {
          id: 3,
          sender: "patient",
          content: "I'm experiencing some nausea and mild stomach upset. Is this normal?",
          timestamp: "9:00 AM",
          date: "Today",
          type: "text",
        },
        {
          id: 4,
          sender: "doctor",
          content:
            "These are common side effects that usually subside within a few days. Take the medication with food and plenty of water. If symptoms persist beyond a week, let me know.",
          timestamp: "9:15 AM",
          date: "Today",
          type: "text",
        },
        {
          id: 5,
          sender: "patient",
          content: "I'm experiencing some side effects from the new medication.",
          timestamp: "11:00 AM",
          date: "Today",
          type: "text",
        },
      ],
    },
    {
      id: 3,
      name: "David Johnson",
      age: 28,
      condition: "Anxiety",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "The breathing exercises you recommended are really helping.",
      timestamp: "1 day ago",
      unread: 0,
      online: false,
      lastVisit: "3 days ago",
      nextAppointment: "Jan 25, 4:00 PM",
      messages: [
        {
          id: 1,
          sender: "patient",
          content: "Dr. Johnson, I've been practicing the breathing exercises you taught me during our last session.",
          timestamp: "2:00 PM",
          date: "Yesterday",
          type: "text",
        },
        {
          id: 2,
          sender: "doctor",
          content:
            "That's wonderful to hear, David! How often are you practicing them, and have you noticed any improvement in your anxiety levels?",
          timestamp: "2:30 PM",
          date: "Yesterday",
          type: "text",
        },
        {
          id: 3,
          sender: "patient",
          content:
            "I do them twice a day - morning and evening. My anxiety attacks have reduced significantly. The breathing exercises you recommended are really helping.",
          timestamp: "3:00 PM",
          date: "Yesterday",
          type: "text",
        },
      ],
    },
  ]

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.condition.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const sendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return

    const newMsg = {
      id: Date.now(),
      sender: "doctor",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      date: "Today",
      type: "text",
    }

    // Simulate typing indicator
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      // Add patient response simulation
      const patientResponse = {
        id: Date.now() + 1,
        sender: "patient",
        content: "Thank you for your response, Doctor. I'll follow your advice.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        date: "Today",
        type: "text",
      }
      // In a real app, you would update the state properly
    }, 2000)

    setNewMessage("")
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [selectedChat?.messages, isTyping])

  const MessageBubble = ({ message, isPatient }) => (
    <div className={`flex ${isPatient ? "justify-start" : "justify-end"} mb-4`}>
      <div className={`max-w-xs lg:max-w-md ${isPatient ? "order-2" : "order-1"}`}>
        <div
          className={`px-4 py-3 rounded-2xl ${
            isPatient
              ? "bg-white border border-gray-200 text-gray-900"
              : "bg-gradient-to-r from-emerald-500 to-blue-500 text-white"
          }`}
        >
          <p className="text-sm leading-relaxed">{message.content}</p>
          {message.attachment && (
            <div className={`mt-3 p-3 rounded-lg ${isPatient ? "bg-gray-50" : "bg-white/20"}`}>
              <div className="flex items-center space-x-2">
                {message.attachment.type === "document" ? (
                  <FileText className="h-4 w-4" />
                ) : (
                  <ImageIcon className="h-4 w-4" />
                )}
                <div className="flex-1">
                  <p className="text-xs font-medium">{message.attachment.name}</p>
                  <p className="text-xs opacity-70">{message.attachment.size}</p>
                </div>
                <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 17a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" />
                  </svg>
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className={`flex items-center mt-1 space-x-1 ${isPatient ? "justify-start" : "justify-end"}`}>
          <Clock className="h-3 w-3 opacity-60" />
          <span className="text-xs opacity-60">{message.timestamp}</span>
        </div>
      </div>
      {isPatient && (
        <Avatar className="h-8 w-8 order-1 mr-2">
          <AvatarImage src={selectedChat?.avatar || "/placeholder.svg"} />
          <AvatarFallback>
            {selectedChat?.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  )

  return (
    <DashboardLayout userRole="doctor" userName="Dr. Sarah Johnson" userAvatar="/placeholder.svg?height=48&width=48">
      <div className="h-[calc(100vh-12rem)] flex bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Sidebar - Conversations List */}
        <div className="w-80 border-r border-gray-200 flex flex-col bg-gray-50">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 bg-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Patient Messages</h2>
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                {conversations.filter((c) => c.unread > 0).length} new
              </Badge>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search patients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-50 border-gray-200"
              />
            </div>
          </div>

          {/* Conversations List */}
          <ScrollArea className="flex-1">
            <div className="p-2">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedChat(conversation)}
                  className={`p-4 rounded-xl cursor-pointer transition-all mb-2 ${
                    selectedChat?.id === conversation.id
                      ? "bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg"
                      : "hover:bg-white hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12 border-2 border-white/20">
                        <AvatarImage src={conversation.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {conversation.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`font-semibold truncate ${
                            selectedChat?.id === conversation.id ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {conversation.name}
                        </h3>
                        <span
                          className={`text-xs ${
                            selectedChat?.id === conversation.id ? "text-white/70" : "text-gray-500"
                          }`}
                        >
                          {conversation.timestamp}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <p
                          className={`text-sm ${
                            selectedChat?.id === conversation.id ? "text-white/90" : "text-emerald-600"
                          }`}
                        >
                          {conversation.age}y • {conversation.condition}
                        </p>
                      </div>
                      <p
                        className={`text-sm truncate mt-1 ${
                          selectedChat?.id === conversation.id ? "text-white/80" : "text-gray-600"
                        }`}
                      >
                        {conversation.lastMessage}
                      </p>
                      {conversation.nextAppointment && (
                        <div
                          className={`flex items-center space-x-1 mt-1 ${
                            selectedChat?.id === conversation.id ? "text-white/70" : "text-gray-500"
                          }`}
                        >
                          <Calendar className="h-3 w-3" />
                          <span className="text-xs">Next: {conversation.nextAppointment}</span>
                        </div>
                      )}
                    </div>
                    {conversation.unread > 0 && (
                      <Badge className="bg-red-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center">
                        {conversation.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedChat ? (
            <>
              {/* Chat Header */}
              <div className="bg-white border-b border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Avatar className="h-12 w-12 border-2 border-emerald-200">
                        <AvatarImage src={selectedChat.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {selectedChat.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {selectedChat.online && (
                        <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">{selectedChat.name}</h2>
                      <div className="flex items-center space-x-3">
                        <p className="text-sm text-emerald-600">
                          {selectedChat.age}y • {selectedChat.condition}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500">
                        Last visit: {selectedChat.lastVisit} • {selectedChat.online ? "Online now" : "Offline"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-emerald-600 hover:bg-emerald-50">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                      <Video className="h-4 w-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <User className="h-4 w-4 mr-2" />
                          View Patient Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Calendar className="h-4 w-4 mr-2" />
                          Schedule Appointment
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FileText className="h-4 w-4 mr-2" />
                          View Medical Records
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Stethoscope className="h-4 w-4 mr-2" />
                          Write Prescription
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Archive className="h-4 w-4 mr-2" />
                          Archive Conversation
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Flag className="h-4 w-4 mr-2" />
                          Flag for Review
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <ScrollArea className="flex-1 p-6 bg-gradient-to-b from-gray-50 to-white">
                <div className="space-y-1">
                  {selectedChat.messages.map((message, index) => {
                    const isPatient = message.sender === "patient"
                    const showDate = index === 0 || selectedChat.messages[index - 1].date !== message.date

                    return (
                      <div key={message.id}>
                        {showDate && (
                          <div className="text-center my-6">
                            <span className="bg-white text-gray-600 text-xs px-4 py-2 rounded-full shadow-sm border">
                              {message.date}
                            </span>
                          </div>
                        )}
                        <MessageBubble message={message} isPatient={isPatient} />
                      </div>
                    )
                  })}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start mb-4">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={selectedChat.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {selectedChat.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Message Input */}
              <div className="bg-white border-t border-gray-200 p-6">
                <div className="flex items-center space-x-3">
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                    <ImageIcon className="h-4 w-4" />
                  </Button>
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Type your message to patient..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                      className="pr-12 bg-gray-50 border-gray-200 focus:bg-white"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      <Smile className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                    <Mic className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={sendMessage}
                    disabled={!newMessage.trim()}
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            /* No Chat Selected */
            <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a patient</h3>
                <p className="text-gray-600 mb-6">Choose a patient from the list to start messaging</p>
                <Button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600">
                  View All Patients
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
