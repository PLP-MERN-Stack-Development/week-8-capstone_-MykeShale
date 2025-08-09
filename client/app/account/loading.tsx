import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function AccountLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="lg:pl-64">
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center">
              <Skeleton className="h-8 w-64 mx-auto mb-2" />
              <Skeleton className="h-4 w-96 mx-auto" />
            </div>

            {/* Tabs */}
            <div className="space-y-6">
              <div className="flex space-x-2 bg-white border shadow-sm rounded-lg p-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-10 w-24" />
                ))}
              </div>

              {/* Profile Summary */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                    <div className="relative">
                      <Skeleton className="w-32 h-32 rounded-full" />
                    </div>
                    <div className="flex-1 text-center lg:text-left space-y-4">
                      <Skeleton className="h-8 w-48 mx-auto lg:mx-0" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-64 mx-auto lg:mx-0" />
                        <Skeleton className="h-4 w-56 mx-auto lg:mx-0" />
                        <Skeleton className="h-4 w-72 mx-auto lg:mx-0" />
                        <Skeleton className="h-4 w-48 mx-auto lg:mx-0" />
                      </div>
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-32 mx-auto lg:mx-0" />
                        <Skeleton className="h-2 w-full" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stats Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Card key={i} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <Skeleton className="h-4 w-4" />
                      </div>
                      <div className="space-y-2">
                        <Skeleton className="h-8 w-12" />
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-3 w-20" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Activity */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <Skeleton className="h-6 w-48" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div className="flex-1 space-y-2">
                          <Skeleton className="h-4 w-48" />
                          <Skeleton className="h-3 w-64" />
                        </div>
                        <Skeleton className="h-3 w-16" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
