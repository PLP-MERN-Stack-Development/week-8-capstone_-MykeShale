import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cookies } from "next/headers" // Import cookies for SSR theme
import { ThemeProvider } from "@/components/theme-provider" // Import the ThemeProvider

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WellCareCircle",
  description: "Connecting Communities to Quality Healthcare",
    generator: 'v0.dev'
}

export default async function RootLayout({
  // Make the function async to use cookies()
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = cookies()
  // Assuming the theme cookie is named "theme" and stores "light", "dark", or "system"
  const defaultTheme = cookieStore.get("theme")?.value || "system"

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme={defaultTheme} enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
