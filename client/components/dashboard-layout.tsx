"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Heart,
  Search,
  Bell,
  Settings,
  User,
  LogOut,
  Menu,
  Home,
  Calendar,
  MessageCircle,
  FileText,
  Users,
  Activity,
  CreditCard,
  HelpCircle,
  Shield,
  Stethoscope,
  Video,
  Pill,
  BarChart3,
  Clock,
  MapPin,
  Phone,
  ChevronDown,
  Sun,
  Moon,
  Laptop,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
  children: React.ReactNode
  userRole: "patient" | "doctor" | "admin"
  userName: string
  userAvatar?: string
}

export function DashboardLayout({ children, userRole, userName, userAvatar }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [theme, setTheme] = useState("light")
  const pathname = usePathname()

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  const getMenuItems = () => {
    const commonItems = [
      { icon: Settings, label: "Settings", href: "/settings" },
      { icon: User, label: "Account Center", href: "/account" },
      { icon: HelpCircle, label: "Help & Support", href: "/help" },
      { icon: Shield, label: "Privacy & Security", href: "/privacy" },
    ]

    switch (userRole) {
      case "patient":
        return [
          { icon: Home, label: "Dashboard", href: "/dashboard/patient" },
          { icon: Calendar, label: "Appointments", href: "/appointments" },
          { icon: MessageCircle, label: "Messages", href: "/messages" },
          { icon: FileText, label: "Health Records", href: "/health-records" },
          { icon: Pill, label: "Medications", href: "/medications" },
          { icon: Video, label: "Telemedicine", href: "/telemedicine" },
          { icon: Activity, label: "Health Metrics", href: "/health-metrics" },
          { icon: CreditCard, label: "Billing", href: "/billing" },
          { icon: Phone, label: "Emergency", href: "/emergency" },
          ...commonItems,
        ]
      case "doctor":
        return [
          { icon: Home, label: "Dashboard", href: "/dashboard/doctor" },
          { icon: Calendar, label: "Appointments", href: "/appointments" },
          { icon: Users, label: "Patients", href: "/patients" },
          { icon: MessageCircle, label: "Messages", href: "/messages" },
          { icon: Video, label: "Telemedicine", href: "/telemedicine" },
          { icon: Pill, label: "Prescriptions", href: "/prescriptions" },
          { icon: BarChart3, label: "Analytics", href: "/analytics" },
          { icon: Clock, label: "Schedule", href: "/schedule" },
          { icon: FileText, label: "Medical Records", href: "/medical-records" },
          ...commonItems,
        ]
      case "admin":
        return [
          { icon: Home, label: "Dashboard", href: "/dashboard/admin" },
          { icon: Users, label: "Patients", href: "/admin/patients" },
          { icon: Stethoscope, label: "Doctors", href: "/admin/doctors" },
          { icon: Calendar, label: "Appointments", href: "/admin/appointments" },
          { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
          { icon: CreditCard, label: "Billing", href: "/admin/billing" },
          { icon: MapPin, label: "Clinics", href: "/admin/clinics" },
          { icon: Shield, label: "System Security", href: "/admin/security" },
          { icon: Activity, label: "System Health", href: "/admin/system" },
          ...commonItems,
        ]
      default:
        return commonItems
    }
  }

  const menuItems = getMenuItems()

  const notifications = [
    {
      id: 1,
      title: "New appointment request",
      message: "John Smith requested an appointment for tomorrow",
      time: "5 min ago",
      unread: true,
      type: "appointment",
    },
    {
      id: 2,
      title: "Lab results ready",
      message: "Blood test results are now available",
      time: "1 hour ago",
      unread: true,
      type: "results",
    },
    {
      id: 3,
      title: "Medication reminder",
      message: "Time to refill your prescription",
      time: "2 hours ago",
      unread: false,
      type: "medication",
    },
  ]

  const unreadCount = notifications.filter((n) => n.unread).length

  const Sidebar = ({ mobile = false }) => (
    <div className={cn("flex flex-col h-full", mobile ? "w-full" : "w-64")}>
      {/* Logo */}
      <div className="flex items-center space-x-2 p-6 border-b">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg blur opacity-75"></div>
          <Heart className="relative h-8 w-8 text-white bg-gradient-to-r from-emerald-500 to-blue-500 p-1.5 rounded-lg" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
          WellCareCircle
        </span>
      </div>

      {/* User Info */}
      <div className="p-6 border-b">
        <div className="flex items-center space-x-3">
          <Avatar className="h-12 w-12 border-2 border-emerald-200">
            <AvatarImage src={userAvatar || "/placeholder.svg?height=48&width=48"} />
            <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
              {userName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{userName}</h3>
            <p className="text-sm text-gray-600 capitalize">{userRole}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const IconComponent = item.icon
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100 hover:text-emerald-600",
                )}
              >
                <IconComponent className="h-5 w-5" />
                <span>{item.label}</span>
              </div>
            </Link>
          )
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t space-y-2">
        <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
          <HelpCircle className="h-4 w-4 mr-2" />
          Help & Support
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          size="sm"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 shadow-sm">
          <Sidebar />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <Sidebar mobile />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Navigation */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Left Side */}
              <div className="flex items-center space-x-4">
                {/* Mobile Menu Button */}
                <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="sm" className="lg:hidden">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                </Sheet>

                {/* Search */}
                <div className="relative hidden sm:block">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search patients, appointments..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 lg:w-80 pl-10 bg-gray-50 border-gray-200 focus:bg-white"
                  />
                </div>
              </div>

              {/* Right Side */}
              <div className="flex items-center space-x-4">
                {/* Mobile Search */}
                <Button variant="ghost" size="sm" className="sm:hidden">
                  <Search className="h-5 w-5" />
                </Button>

                {/* Theme Toggle */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      {theme === "light" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                      <Sun className="h-4 w-4 mr-2" />
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                      <Moon className="h-4 w-4 mr-2" />
                      Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                      <Laptop className="h-4 w-4 mr-2" />
                      System
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Notifications */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="relative">
                      <Bell className="h-5 w-5" />
                      {unreadCount > 0 && (
                        <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                          {unreadCount}
                        </Badge>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80">
                    <DropdownMenuLabel className="flex items-center justify-between">
                      Notifications
                      <Badge variant="secondary">{unreadCount} new</Badge>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.map((notification) => (
                        <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-4 space-y-1">
                          <div className="flex items-center justify-between w-full">
                            <h4 className="font-medium text-sm">{notification.title}</h4>
                            {notification.unread && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                          </div>
                          <p className="text-sm text-gray-600">{notification.message}</p>
                          <span className="text-xs text-gray-500">{notification.time}</span>
                        </DropdownMenuItem>
                      ))}
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-center text-blue-600 hover:text-blue-700">
                      View all notifications
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-2 px-2">
                      <Avatar className="h-8 w-8 border-2 border-emerald-200">
                        <AvatarImage src={userAvatar || "/placeholder.svg?height=32&width=32"} />
                        <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
                          {userName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <ChevronDown className="h-4 w-4 text-gray-500 hidden sm:block" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">{userName}</p>
                        <p className="text-xs text-gray-500 capitalize">{userRole}</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard className="h-4 w-4 mr-2" />
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <HelpCircle className="h-4 w-4 mr-2" />
                      Help & Support
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600 hover:text-red-700 hover:bg-red-50">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1">
          <div className="px-4 sm:px-6 lg:px-8 py-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
