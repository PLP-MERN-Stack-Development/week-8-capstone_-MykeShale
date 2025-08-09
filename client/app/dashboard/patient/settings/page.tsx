import DashboardLayout from "@/components/dashboard-layout"

export default function PatientSettingsPage() {
  return (
    <DashboardLayout userRole="patient" userName="Patient User" userAvatar="/placeholder.svg">
      {/* rest of code here */}
    </DashboardLayout>
  )
}
