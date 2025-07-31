import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Calendar, MessageCircle, Shield, Globe } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold text-gray-900">WellCareCircle</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Features
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-emerald-600 transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connecting Communities to
              <span className="text-emerald-600 block">Quality Healthcare</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Bridging the gap between patients, doctors, and clinics in underserved communities through innovative
              digital health solutions. Supporting SDG 3 - Good Health and Well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register?role=patient">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                  Join as Patient
                </Button>
              </Link>
              <Link href="/auth/register?role=doctor">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 bg-transparent"
                >
                  Join as Doctor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Healthcare Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to access, provide, and manage healthcare services in one platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle className="text-xl">Easy Appointment Booking</CardTitle>
                <CardDescription>
                  Schedule appointments with healthcare providers in your area with just a few clicks
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Secure Messaging</CardTitle>
                <CardDescription>
                  Communicate directly with your healthcare providers through encrypted messaging
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Community Network</CardTitle>
                <CardDescription>
                  Connect with local clinics, NGOs, and healthcare initiatives in your community
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-orange-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle className="text-xl">Privacy & Security</CardTitle>
                <CardDescription>
                  Your health data is protected with enterprise-grade security and encryption
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">Multi-language Support</CardTitle>
                <CardDescription>
                  Access healthcare services in your preferred language with our translation features
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-red-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle className="text-xl">Emergency Services</CardTitle>
                <CardDescription>Quick access to emergency contacts and nearest healthcare facilities</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-emerald-100">Patients Served</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-emerald-100">Healthcare Providers</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-emerald-100">Partner Clinics</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-emerald-100">Communities Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-emerald-400" />
                <span className="text-xl font-bold">WellCareCircle</span>
              </div>
              <p className="text-gray-400">
                Connecting communities to quality healthcare through innovative digital solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/auth/register?role=patient" className="hover:text-white">
                    For Patients
                  </Link>
                </li>
                <li>
                  <Link href="/auth/register?role=doctor" className="hover:text-white">
                    For Doctors
                  </Link>
                </li>
                <li>
                  <Link href="/auth/register?role=clinic" className="hover:text-white">
                    For Clinics
                  </Link>
                </li>
                <li>
                  <Link href="/auth/register?role=ngo" className="hover:text-white">
                    For NGOs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">SDG Impact</h3>
              <p className="text-gray-400 text-sm">
                Supporting UN Sustainable Development Goal 3: Ensure healthy lives and promote well-being for all at all
                ages.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WellCareCircle. All rights reserved. Built for community health access.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
