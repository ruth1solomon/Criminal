import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Pic, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Pic";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import Separator from "@/components/ui/separator";
import { Check, ChevronLeft, ChevronRight, Clock, MoreVertical, Search, X } from "lucide-react";


export default function CriminalRecordDashboard() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Criminal Record Dashboard</h1>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search records" className="pl-8 w-64" />
                    </div>
                    <Button variant="ghost" size="icon">
                        <Avatar>
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                    </Button>
                </div>
            </header>

            {/* Dashboard Content */}
            <main className="p-6">
                <Pic className="max-w-4xl mx-auto">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="John Doe" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="text-3xl">John Doe</CardTitle>
                            <p className="text-muted-foreground">ID: 123456789</p>
                        </div>
                        <div className="ml-auto flex items-center space-x-2">
                            <Button variant="outline" size="icon">
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="offense">Type of Offense</Label>
                                <Input id="offense" value="Cybercrime" readOnly />
                            </div>
                            <div>
                                <Label htmlFor="jail-time">Time Spent in Jail</Label>
                                <Input id="jail-time" value="18 months" readOnly />
                            </div>
                        </div>
                        <Separator />
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="rehabilitation">Rehabilitation Status</Label>
                                <Input id="rehabilitation" value="Completed" readOnly />
                            </div>
                            <div>
                                <Label htmlFor="risk-assessment">Risk Assessment</Label>
                                <Input id="risk-assessment" value="Low" readOnly />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="skills">Relevant Skills</Label>
                            <Input id="skills" value="Programming, Network Security, Ethical Hacking" readOnly />
                        </div>
                        <div>
                            <Label htmlFor="education">Education</Label>
                            <Input id="education" value="Bachelor's in Computer Science, Cybersecurity Certification" readOnly />
                        </div>
                        <div>
                            <Label htmlFor="employment">Previous Employment</Label>
                            <Input id="employment" value="IT Consultant (2 years), Junior Developer (1 year)" readOnly />
                        </div>
                        <div>
                            <Label htmlFor="notes">Additional Notes</Label>
                            <textarea
                                id="notes"
                                className="w-full h-24 p-2 border rounded"
                                readOnly
                                value="Showed exceptional progress in rehabilitation program. Developed new skills in ethical hacking. Demonstrated strong commitment to reform and has been actively involved in mentoring programs for at-risk youth."
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">
                            <Clock className="mr-2 h-4 w-4" /> Request More Info
                        </Button>
                        <div className="space-x-2">
                            <Button variant="destructive">
                                <X className="mr-2 h-4 w-4" /> Reject
                            </Button>
                            <Button variant="default">
                                <Check className="mr-2 h-4 w-4" /> Approve
                            </Button>
                        </div>
                    </CardFooter>
                </Pic>
            </main>
        </div>
    );
}
