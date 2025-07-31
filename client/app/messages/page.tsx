"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Heart,
  Send,
  Search,
  Phone,
  Video,
  MoreVertical,
  ArrowLeft,
  Paperclip,
  Smile,
  Clock,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(null)
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const messagesEndRef = useRef(null)

  const conversations = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "General Practice",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Your test results are ready. Please check your health records.",
      timestamp: "2 hours ago",
      unread: 2,
      online: true,
      messages: [
        {
          id: 1,
          sender: "doctor",
          content: "Hello John! How are you feeling today?",
          timestamp: "10:30 AM",
          date: "Today",
        },
        {
          id: 2,
          sender: "patient",
          content: "Hi Dr. Johnson, I'm feeling much better after taking the medication you prescribed.",
          timestamp: "10:35 AM",
          date: "Today",
        },
        {
          id: 3,
          sender: "doctor",
          content: "That's great to hear! Your test results came back and everything looks normal.",
          timestamp: "10:40 AM",
          date: "Today",
        },
        {
          id: 4,
          sender: "doctor",
          content: "Your test results are ready. Please check your health records.",
          timestamp: "2:15 PM",
          date: "Today",
        },
      ],
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Cardiology",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Remember to take your medication as prescribed.",
      timestamp: "1 day ago",
      unread: 0,
      online: false,
      messages: [
        {
          id: 1,
          sender: "doctor",
          content: "Hi John, I wanted to follow up on your recent visit.",
          timestamp: "9:00 AM",
          date: "Yesterday",
        },
        {
          id: 2,
          sender: "patient",
          content: "Thank you for checking in, Doctor. I've been taking the medication regularly.",
          timestamp: "9:15 AM",
          date: "Yesterday",
        },
        {
          id: 3,
          sender: "doctor",
          content: "Remember to take your medication as prescribed.",
          timestamp: "9:20 AM",
          date: "Yesterday",
        },
      ],
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Pediatrics",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "The vaccination schedule looks good.",
      timestamp: "3 days ago",
      unread: 0,
      online: true,
      messages: [
        {
          id: 1,
          sender: "doctor",
          content: "Hello! I've reviewed your child's vaccination records.",
          timestamp: "2:00 PM",
          date: "3 days ago",
        },
        {
          id: 2,
          sender: "patient",
          content: "Thank you, Doctor. When should we schedule the next appointment?",
          timestamp: "2:30 PM",
          date: "3 days ago",
        },
        {
          id: 3,
          sender: "doctor",
          content: "The vaccination schedule looks good.",
          timestamp: "2:45 PM",
          date: "3 days ago",
        },
      ],
    },
  ]

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const sendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return

    const newMsg = {
      id: Date.now(),
      sender: "patient",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      date: "Today",
    }

    // Update the selected chat's messages
    const updatedConversations = conversations.map((conv) => {
      if (conv.id === selectedChat.id) {
        return {
          ...conv,
          messages: [...conv.messages, newMsg],
          lastMessage: newMessage,
          timestamp: "Just now",
        }
      }
      return conv
    })

    setNewMessage("")
    // In a real app, you would update the state properly
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [selectedChat?.messages])

  return (
    <div className="h-screen bg-gray-50 flex">
      {/* Sidebar - Conversations List */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <Link href="/dashboard/patient">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-emerald-600" />
              <span className="font-semibold text-gray-900">Messages</span>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
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
                className={`p-3 rounded-lg cursor-pointer transition-colors mb-2 ${
                  selectedChat?.id === conversation.id ? "bg-emerald-50 border border-emerald-200" : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={conversation.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {conversation.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900 truncate">{conversation.name}</h3>
                      <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-600">{conversation.role}</p>
                    <p className="text-sm text-gray-500 truncate mt-1">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread > 0 && (
                    <Badge className="bg-emerald-600 text-white text-xs">{conversation.unread}</Badge>
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
            <div className="bg-white border-b border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar>
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
                    <h2 className="font-semibold text-gray-900">{selectedChat.name}</h2>
                    <p className="text-sm text-gray-600">{selectedChat.role}</p>
                    <p className="text-xs text-green-600">{selectedChat.online ? "Online" : "Last seen 2 hours ago"}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {selectedChat.messages.map((message, index) => {
                  const isDoctor = message.sender === "doctor"
                  const showDate = index === 0 || selectedChat.messages[index - 1].date !== message.date

                  return (
                    <div key={message.id}>
                      {showDate && (
                        <div className="text-center my-4">
                          <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                            {message.date}
                          </span>
                        </div>
                      )}
                      <div className={`flex ${isDoctor ? "justify-start" : "justify-end"}`}>
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            isDoctor ? "bg-white border border-gray-200" : "bg-emerald-600 text-white"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <div className={`flex items-center mt-1 ${isDoctor ? "justify-start" : "justify-end"}`}>
                            <Clock className="h-3 w-3 mr-1 opacity-60" />
                            <span className={`text-xs opacity-60`}>{message.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="bg-white border-t border-gray-200 p-4">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <div className="flex-1 relative">
                  <Input
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    className="pr-10"
                  />
                  <Button variant="ghost" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2">
                    <Smile className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  onClick={sendMessage}
                  disabled={!newMessage.trim()}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          /* No Chat Selected */
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <MessageCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a conversation</h3>
              <p className="text-gray-600">Choose a doctor from the list to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
