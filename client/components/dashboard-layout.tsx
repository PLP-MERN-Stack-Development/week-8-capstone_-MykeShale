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
    const baseRoute = `/dashboard/${userRole}`

    switch (userRole) {
      case "patient":
        return [
          { icon: Home, label: "Dashboard", href: `${baseRoute}` },
          { icon: Calendar, label: "Appointments", href: `${baseRoute}/appointments` },
          { icon: MessageCircle, label: "Messages", href: `${baseRoute}/messages` },
          { icon: FileText, label: "Health Records", href: `${baseRoute}/health-records` },
          { icon: Pill, label: "Medications", href: `${baseRoute}/medications` },
          { icon: Video, label: "Telemedicine", href: `${baseRoute}/telemedicine` },
          { icon: Activity, label: "Health Metrics", href: `${baseRoute}/health-metrics` },
          { icon: CreditCard, label: "Billing", href: `${baseRoute}/billing` },
          { icon: Phone, label: "Emergency", href: `${baseRoute}/emergency` },
          { icon: Settings, label: "Settings", href: `${baseRoute}/settings` },
          { icon: User, label: "Account Center", href: `${baseRoute}/account` },
          { icon: HelpCircle, label: "Help & Support", href: `${baseRoute}/help` },
          { icon: Shield, label: "Privacy & Security", href: `${baseRoute}/privacy` },
        ]
      case "doctor":
        return [
          { icon: Home, label: "Dashboard", href: `${baseRoute}` },
          { icon: Calendar, label: "Appointments", href: `${baseRoute}/appointments` },
          { icon: Users, label: "Patients", href: `${baseRoute}/patients` },
          { icon: MessageCircle, label: "Messages", href: `${baseRoute}/messages` },
          { icon: Video, label: "Telemedicine", href: `${baseRoute}/telemedicine` },
          { icon: Pill, label: "Prescriptions", href: `${baseRoute}/prescriptions` },
          { icon: BarChart3, label: "Analytics", href: `${baseRoute}/analytics` },
          { icon: Clock, label: "Schedule", href: `${baseRoute}/schedule` },
          { icon: FileText, label: "Medical Records", href: `${baseRoute}/medical-records` },
          { icon: Settings, label: "Settings", href: `${baseRoute}/settings` },
          { icon: User, label: "Account Center", href: `${baseRoute}/account` },
          { icon: HelpCircle, label: "Help & Support", href: `${baseRoute}/help` },
          { icon: Shield, label: "Privacy & Security", href: `${baseRoute}/privacy` },
        ]
      case "admin":
        return [
          { icon: Home, label: "Dashboard", href: `${baseRoute}` },
          { icon: Users, label: "Patients", href: `${baseRoute}/patients` },
          { icon: Stethoscope, label: "Doctors", href: `${baseRoute}/doctors` },
          { icon: Calendar, label: "Appointments", href: `${baseRoute}/appointments` },
          { icon: BarChart3, label: "Analytics", href: `${baseRoute}/analytics` },
          { icon: CreditCard, label: "Billing", href: `${baseRoute}/billing` },
          { icon: MapPin, label: "Clinics", href: `${baseRoute}/clinics` },
          { icon: Shield, label: "System Security", href: `${baseRoute}/security` },
          { icon: Activity, label: "System Health", href: `${baseRoute}/system` },
          { icon: Settings, label: "Settings", href: `${baseRoute}/settings` },
          { icon: User, label: "Account Center", href: `${baseRoute}/account` },
          { icon: HelpCircle, label: "Help & Support", href: `${baseRoute}/help` },
          { icon: Shield, label: "Privacy & Security", href: `${baseRoute}/privacy` },
        ]
      default:
        return []
    }
  }

  const menuItems = getMenuItems()

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(newTheme)
  }

  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      {/* Sidebar for Desktop */}
      <aside className="sticky top-0 hidden w-64 flex-col border-r bg-white p-4 lg:flex shadow-lg">
        <div className="flex items-center justify-center h-16 border-b mb-6">
          <Link href="/" className="flex items-center gap-2 font-semibold text-emerald-600 text-2xl">
            <Heart className="h-8 w-8" />
            <span>WellCare</span>
          </Link>
        </div>
        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-emerald-100 hover:text-emerald-800",
                pathname === item.href && "bg-emerald-500 text-white hover:bg-emerald-600 hover:text-white",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-4 border-t">
          <Link
            href="/auth/logout"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-red-100 hover:text-red-800"
          >
            <LogOut className="h-5 w-5" />
            Sign Out
          </Link>
        </div>
      </aside>

      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-4 shadow-sm sm:static sm:h-auto sm:bg-transparent sm:px-6">
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="lg:hidden bg-transparent">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Navigation Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col bg-white p-4 sm:max-w-xs">
              <div className="flex items-center justify-center h-16 border-b mb-6">
                <Link href="/" className="flex items-center gap-2 font-semibold text-emerald-600 text-2xl">
                  <Heart className="h-8 w-8" />
                  <span>WellCare</span>
                </Link>
              </div>
              <nav className="grid gap-2 text-lg font-medium flex-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-emerald-100 hover:text-emerald-800",
                      pathname === item.href && "bg-emerald-500 text-white hover:bg-emerald-600 hover:text-white",
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pt-4 border-t">
                <Link
                  href="/auth/logout"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-red-100 hover:text-red-800"
                >
                  <LogOut className="h-5 w-5" />
                  Sign Out
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <div className="relative flex-1 md:grow-0">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-gray-100 pl-9 md:w-[200px] lg:w-[336px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center rounded-full bg-red-500 text-white text-xs">
                3
              </Badge>
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={userAvatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {userName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{userName}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={`/dashboard/${userRole}/account`} className="flex items-center w-full">
                    <User className="mr-2 h-4 w-4" /> Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={`/dashboard/${userRole}/settings`} className="flex items-center w-full">
                    <Settings className="mr-2 h-4 w-4" /> Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center w-full">
                      <Sun className="mr-2 h-4 w-4" /> Theme <ChevronDown className="ml-auto h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleThemeChange("light")}>
                        <Sun className="mr-2 h-4 w-4" /> Light
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
                        <Moon className="mr-2 h-4 w-4" /> Dark
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleThemeChange("system")}>
                        <Laptop className="mr-2 h-4 w-4" /> System
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/auth/logout" className="flex items-center w-full text-red-600">
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:px-6 sm:py-0 lg:p-6">{children}</main>
      </div>
    </div>
  )
}
