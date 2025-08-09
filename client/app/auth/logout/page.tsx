"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { LogOut, Shield, CheckCircle, Clock, Home, User, HelpCircle, Heart, Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export default function LogoutPage() {
  const [logoutStep, setLogoutStep] = useState(0)
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(true)
  const router = useRouter()

  const logoutSteps = [
    "Securing your session...",
    "Clearing sensitive data...",
    "Saving your preferences...",
    "Finalizing logout...",
  ]

  const handleLogout = async () => {
    setIsLoggingOut(true)
    setShowConfirmation(false)

    // Simulate logout process with steps
    for (let i = 0; i < logoutSteps.length; i++) {
      setLogoutStep(i)
      await new Promise((resolve) => setTimeout(resolve, 800))
    }

    // Final step
    setLogoutStep(logoutSteps.length)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Redirect to home page
    router.push("/")
  }

  const handleCancelLogout = () => {
    router.back()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <Heart className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">WellCareCircle</span>
          </Link>
        </div>

        <AnimatePresence mode="wait">
          {showConfirmation && !isLoggingOut && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <Card className="border-emerald-100 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LogOut className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Sign Out</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">
                      Are you sure you want to sign out of your WellCareCircle account?
                    </p>
                    <Alert className="border-yellow-200 bg-yellow-50">
                      <Shield className="h-4 w-4 text-yellow-600" />
                      <AlertDescription className="text-yellow-800">
                        For your security, all active sessions will be terminated and you'll need to sign in again to
                        access your account.
                      </AlertDescription>
                    </Alert>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-700">Your data will be safely stored</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Shield className="h-5 w-5 text-blue-500" />
                      <span className="text-sm text-gray-700">All sessions will be securely terminated</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Clock className="h-5 w-5 text-purple-500" />
                      <span className="text-sm text-gray-700">You can sign back in anytime</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button variant="outline" className="flex-1 bg-white" onClick={handleCancelLogout}>
                      Cancel
                    </Button>
                    <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white" onClick={handleLogout}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {isLoggingOut && (
            <motion.div
              key="logout-process"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card className="border-emerald-100 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {logoutStep < logoutSteps.length ? (
                      <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
                    ) : (
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    )}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {logoutStep < logoutSteps.length ? "Signing Out..." : "Signed Out Successfully"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">
                      {logoutStep < logoutSteps.length
                        ? logoutSteps[logoutStep]
                        : "You have been successfully signed out. Thank you for using WellCareCircle!"}
                    </p>
                    <div className="space-y-2">
                      <Progress value={((logoutStep + 1) / (logoutSteps.length + 1)) * 100} className="h-2" />
                      <p className="text-xs text-gray-500">
                        Step {Math.min(logoutStep + 1, logoutSteps.length + 1)} of {logoutSteps.length + 1}
                      </p>
                    </div>
                  </div>

                  {logoutStep >= logoutSteps.length && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <Link href="/">
                          <Button variant="outline" className="w-full bg-white">
                            <Home className="h-4 w-4 mr-2" />
                            Home
                          </Button>
                        </Link>
                        <Link href="/auth/login">
                          <Button variant="outline" className="w-full bg-white">
                            <User className="h-4 w-4 mr-2" />
                            Sign In
                          </Button>
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Link href="/help">
                          <Button variant="outline" className="w-full bg-white">
                            <HelpCircle className="h-4 w-4 mr-2" />
                            Help
                          </Button>
                        </Link>
                        <Link href="/auth/register">
                          <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                            <User className="h-4 w-4 mr-2" />
                            Sign Up
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Security Message */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            Your privacy and security are our top priority. All data is encrypted and securely stored.
          </p>
        </div>
      </div>
    </div>
  )
}
