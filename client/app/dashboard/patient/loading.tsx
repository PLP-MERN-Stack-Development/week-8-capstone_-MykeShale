import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function PatientDashboardLoadingPage() {
  return (
    <DashboardLayout userRole="patient" userName="Loading User" userAvatar="/placeholder.svg">
      <div className="space-y-6">
        {/* Welcome Section with Health Score Skeleton */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
          <div>
            <Skeleton className="h-9 w-64 mb-2" />
            <Skeleton className="h-6 w-96" />
          </div>
          <div className="mt-4 lg:mt-0">
            <Card className="bg-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Skeleton className="w-16 h-16 rounded-full" />
                  <div>
                    <Skeleton className="h-4 w-24 mb-1" />
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-3 w-24 mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tabs List Skeleton */}
        <Skeleton className="h-10 w-full lg:w-auto" />

        {/* Quick Actions Skeleton */}
        <div className="grid md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <Skeleton className="h-12 w-12 rounded-full mx-auto mb-3" />
                <Skeleton className="h-6 w-32 mx-auto mb-1" />
                <Skeleton className="h-4 w-24 mx-auto" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Health Metrics Skeleton */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Skeleton className="h-5 w-5" />
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="text-center p-4 bg-gray-50 rounded-xl border">
                  <Skeleton className="h-12 w-12 rounded-full mx-auto mb-3" />
                  <Skeleton className="h-8 w-24 mx-auto" />
                  <Skeleton className="h-4 w-20 mx-auto mb-2" />
                  <Skeleton className="h-6 w-16 mx-auto" />
                  <Skeleton className="h-3 w-20 mx-auto mt-1" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Upcoming Appointments Skeleton */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-6 w-48" />
              </CardTitle>
              <Skeleton className="h-8 w-24" />
            </CardHeader>
            <CardContent className="space-y-4">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl border">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="flex-1 space-y-1">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <div className="flex space-x-4">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-8 w-16" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Medications Skeleton */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-6 w-48" />
              </CardTitle>
              <Skeleton className="h-8 w-24" />
            </CardHeader>
            <CardContent className="space-y-4">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-xl border">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <Skeleton className="h-5 w-32 mb-1" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-3 w-24 mt-1" />
                    </div>
                    <Skeleton className="h-6 w-20" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-2 w-full" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
