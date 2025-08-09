import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PhoneCall, Ambulance, Hospital, UserPlus } from "lucide-react"

export default function PatientEmergencyPage() {
  return (
    <div className="grid gap-6 p-4 md:p-6">
      <h1 className="text-3xl font-bold">Emergency Services</h1>

      <Card>
        <CardHeader>
          <CardTitle>Emergency Contacts</CardTitle>
          <CardDescription>Manage your emergency contacts.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between rounded-md border p-4">
            <div>
              <p className="font-medium">John Doe (Spouse)</p>
              <p className="text-sm text-gray-500">Phone: +1 (555) 123-4567</p>
            </div>
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </div>
          <div className="flex items-center justify-between rounded-md border p-4">
            <div>
              <p className="font-medium">Jane Smith (Parent)</p>
              <p className="text-sm text-gray-500">Phone: +1 (555) 987-6543</p>
            </div>
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </div>
          <Button className="w-full">
            <UserPlus className="mr-2 h-4 w-4" /> Add New Contact
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Emergency Hotlines</CardTitle>
          <CardDescription>Quick access to emergency services.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <Button variant="destructive" className="h-auto py-4 text-lg">
            <PhoneCall className="mr-3 h-6 w-6" />
            Call 911 (Emergency)
          </Button>
          <Button variant="outline" className="h-auto py-4 text-lg bg-transparent">
            <Ambulance className="mr-3 h-6 w-6" />
            Ambulance Services
          </Button>
          <Button variant="outline" className="h-auto py-4 text-lg bg-transparent">
            <Hospital className="mr-3 h-6 w-6" />
            Nearest Hospital
          </Button>
          <Button variant="outline" className="h-auto py-4 text-lg bg-transparent">
            <PhoneCall className="mr-3 h-6 w-6" />
            Poison Control
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Emergency Notes</CardTitle>
          <CardDescription>Important medical information for emergencies.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="allergies">Allergies</Label>
              <Textarea id="allergies" placeholder="e.g., Penicillin, Peanuts" rows={3} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="medications">Current Medications</Label>
              <Textarea id="medications" placeholder="e.g., Insulin, Lisinopril" rows={3} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="conditions">Medical Conditions</Label>
              <Textarea id="conditions" placeholder="e.g., Diabetes, Asthma" rows={3} />
            </div>
            <Button type="submit" className="w-full">
              Save Emergency Notes
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
