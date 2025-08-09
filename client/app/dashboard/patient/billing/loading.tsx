import { Skeleton } from "@/components/ui/skeleton"

export default function PatientBillingLoading() {
  return (
    <div className="grid gap-6 p-4 md:p-6">
      <Skeleton className="h-10 w-64" />

      <div className="grid gap-6 md:grid-cols-2">
        <Skeleton className="h-[200px] w-full" />
        <Skeleton className="h-[300px] w-full" />
      </div>

      <Skeleton className="h-[400px] w-full" />
    </div>
  )
}
