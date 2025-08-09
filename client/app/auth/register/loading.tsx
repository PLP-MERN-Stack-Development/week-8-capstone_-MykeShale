import { CardDescription } from "@/components/ui/card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Heart } from "lucide-react"
import Link from "next/link"

export default function RegisterLoadingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <Heart className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">WellCareCircle</span>
          </Link>
        </div>

        <Card className="border-emerald-100 shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Skeleton className="h-16 w-16 rounded-full" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              <Skeleton className="h-8 w-3/4 mx-auto" />
            </CardTitle>
            <CardDescription className="text-gray-600">
              <Skeleton className="h-5 w-1/2 mx-auto" />
            </CardDescription>
            <div className="flex justify-center mt-4">
              <div className="flex space-x-2">
                <Skeleton className="h-2 w-8 rounded-full" />
                <Skeleton className="h-2 w-8 rounded-full" />
                <Skeleton className="h-2 w-8 rounded-full" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <Skeleton className="h-10 w-24" />
              <Skeleton className="h-10 w-32 ml-auto" />
            </div>

            <div className="mt-6 text-center">
              <Skeleton className="h-4 w-2/3 mx-auto" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
