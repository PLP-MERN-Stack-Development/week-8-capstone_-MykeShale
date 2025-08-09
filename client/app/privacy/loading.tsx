import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function PrivacySecurityLoadingPage() {
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

        {/* Content Area Skeleton (e.g., Privacy Controls) */}
        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Skeleton className="h-5 w-5" />
              <Skeleton className="h-6 w-48" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i}>
                  <Skeleton className="h-4 w-32 mb-2" />
                  <Skeleton className="h-10 w-full" />
                  {i < 5 && <Skeleton className="h-px w-full mt-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
