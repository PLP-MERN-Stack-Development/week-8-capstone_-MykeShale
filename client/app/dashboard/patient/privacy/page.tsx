import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function PatientPrivacyPage() {
  return (
    <div className="grid gap-6 p-4 md:p-6">
      <h1 className="text-3xl font-bold">Privacy & Security</h1>

      <Card>
        <CardHeader>
          <CardTitle>Privacy Settings</CardTitle>
          <CardDescription>Manage how your personal data is used and shared.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="data-sharing">Share anonymized data for research</Label>
            <Switch id="data-sharing" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="marketing-emails">Receive marketing emails</Label>
            <Switch id="marketing-emails" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="third-party-access">Allow third-party app access</Label>
            <Switch id="third-party-access" />
          </div>
          <Separator />
          <Button variant="outline" className="w-full bg-transparent">
            View Privacy Policy
          </Button>
          <Button variant="outline" className="w-full bg-transparent">
            Request Data Deletion
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
          <CardDescription>Enhance the security of your account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="two-factor-auth">Two-Factor Authentication (2FA)</Label>
            <Switch id="two-factor-auth" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="login-alerts">Email alerts for new logins</Label>
            <Switch id="login-alerts" defaultChecked />
          </div>
          <Button variant="outline" className="w-full bg-transparent">
            Change Password
          </Button>
          <Button variant="outline" className="w-full bg-transparent">
            View Login Activity
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data Export</CardTitle>
          <CardDescription>Export your health data for your records.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">Export All My Data</Button>
        </CardContent>
      </Card>
    </div>
  )
}
