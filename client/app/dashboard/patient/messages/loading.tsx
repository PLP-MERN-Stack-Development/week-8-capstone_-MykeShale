import { Skeleton } from "@/components/ui/skeleton"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Search } from "lucide-react"

export default function PatientMessagesLoadingPage() {
  return (
    <DashboardLayout userRole="patient" userName="Loading User" userAvatar="/placeholder.svg">
      <div className="h-[calc(100vh-12rem)] flex bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Sidebar - Conversations List Skeleton */}
        <div className="w-80 border-r border-gray-200 flex flex-col bg-gray-50">
          <div className="p-6 border-b border-gray-200 bg-white">
            <div className="flex items-center justify-between mb-4">
              <Skeleton className="h-7 w-32" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Skeleton className="h-10 w-full pl-10" />
            </div>
          </div>
          <div className="flex-1 p-2 space-y-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="p-4 rounded-xl flex items-center space-x-3 bg-white shadow-sm">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                  <Skeleton className="h-3 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area Skeleton */}
        <div className="flex-1 flex flex-col">
          <div className="bg-white border-b border-gray-200 p-6">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div>
                <Skeleton className="h-6 w-48 mb-1" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
          </div>

          <div className="flex-1 p-6 bg-gradient-to-b from-gray-50 to-white space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    i % 2 === 0 ? "bg-white border border-gray-200" : "bg-gray-200"
                  }`}
                >
                  <Skeleton className="h-4 w-48 mb-1" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border-t border-gray-200 p-6">
            <div className="flex items-center space-x-3">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="flex-1 h-10" />
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-10 w-16" />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
