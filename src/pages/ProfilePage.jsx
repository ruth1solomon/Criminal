import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Mail, MapPin, Phone, Building } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="container p-6 mx-auto">
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="flex flex-col items-center gap-4 sm:flex-row">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile picture" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <CardTitle className="text-2xl">John Doe</CardTitle>
            <CardDescription>ID: 123456789</CardDescription>
            <div className="flex flex-wrap justify-center gap-2 mt-2 sm:justify-start">
              <Badge variant="secondary">Low Risk</Badge>
              <Badge variant="outline">Probation</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center">
                <CalendarDays className="w-4 h-4 mr-2 opacity-70" /> <span>DOB: 01/01/1980</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 opacity-70" /> <span>Location: New York, NY</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 opacity-70" /> <span>Email: john.doe@example.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 opacity-70" /> <span>Phone: (123) 456-7890</span>
              </div>
            </div>
            <div className="flex items-center">
              <Building className="w-4 h-4 mr-2 opacity-70" /> <span>Supervising Agency: New York Department of Corrections</span>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Case Summary</h3>
              <p className="text-sm text-muted-foreground">
                John Doe has a history of minor offenses and has shown significant improvement in behavior. 
                Currently on probation with regular check-ins and counseling sessions.
              </p>
            </div>
            <div className="flex justify-end">
              <Button>View Full Record</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
