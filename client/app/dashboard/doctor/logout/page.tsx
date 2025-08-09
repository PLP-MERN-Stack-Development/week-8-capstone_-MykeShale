"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LogOut, Loader2 } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function DoctorLogoutPage() {
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    setIsLoggingOut(true)
    // Simulate API call for logout
    await new Promise((resolve) => setTimeout(resolve, 1500))
    // Redirect to login page after logout
    router.push("/auth/login")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md text-center shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-900">Logging Out</CardTitle>
          <CardDescription className="text-gray-600">
            Are you sure you want to sign out from your doctor account?
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <LogOut className="h-20 w-20 text-emerald-500" />
          </div>
          <Button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg"
          >
            {isLoggingOut ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Signing Out...
              </>
            ) : (
              "Sign Out"
            )}
          </Button>
          <Button
            variant="outline"
            onClick={() => router.back()}
            disabled={isLoggingOut}
            className="w-full py-3 text-lg"
          >
            Cancel
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
