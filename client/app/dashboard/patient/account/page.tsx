import DashboardLayout from "@/components/dashboard-layout"

export default function PatientAccountPage() {
  return (
    <DashboardLayout userRole="patient" userName="Patient User" userAvatar="/placeholder.svg">
      {/* rest of code here */}
    </DashboardLayout>
  )
}
