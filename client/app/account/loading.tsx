import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function AccountLoadingPage() {
  return (
    <DashboardLayout userRole="patient" userName="Loading User" userAvatar="/placeholder.svg">
      <div className="space-y-6">
        {/* Header Skeleton */}
        <div className="text-center">
          <Skeleton className="h-9 w-64 mx-auto mb-2" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>

        {/* Tabs List Skeleton */}
        <Skeleton className="h-10 w-full lg:w-auto" />

        {/* Profile Summary Skeleton */}
        <Card className="border-0 shadow-xl bg-white">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              <Skeleton className="w-32 h-32 rounded-full" />
              <div className="flex-1 text-center lg:text-left space-y-3">
                <Skeleton className="h-8 w-3/4 mx-auto lg:mx-0" />
                <Skeleton className="h-5 w-full mx-auto lg:mx-0" />
                <Skeleton className="h-5 w-full mx-auto lg:mx-0" />
                <Skeleton className="h-5 w-full mx-auto lg:mx-0" />
                <Skeleton className="h-5 w-1/2 mx-auto lg:mx-0" />
                <div className="mt-4">
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-2 w-full" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Stats Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <Skeleton className="h-4 w-4" />
                </div>
                <div>
                  <Skeleton className="h-8 w-20 mb-1" />
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity Skeleton */}
        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Skeleton className="h-5 w-5" />
              <Skeleton className="h-6 w-48" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="flex-1 space-y-1">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                  <Skeleton className="h-4 w-16" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
