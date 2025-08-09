import { redirect } from "next/navigation"

export default function DashboardRootPage() {
  // This page acts as a redirector to a default dashboard based on user role.
  // For now, we'll redirect to the patient dashboard as a default.
  // In a real application, you would determine the user's role from authentication
  // and redirect them to their specific dashboard (e.g., /dashboard/patient, /dashboard/doctor, /dashboard/admin).
  redirect("/dashboard/patient")
}
