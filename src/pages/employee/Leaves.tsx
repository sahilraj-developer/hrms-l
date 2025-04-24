import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CalendarIcon, Clock, FileText, Plus, X } from "lucide-react"
import { format } from "date-fns"

export default function EmployeeLeavesPage() {
  // Sample leave data
  const leaveBalance = {
    annual: { total: 20, used: 5, pending: 2 },
    sick: { total: 10, used: 2, pending: 0 },
    personal: { total: 5, used: 1, pending: 0 },
  }

  const leaveRequests = [
    {
      id: 1,
      type: "Annual Leave",
      startDate: "2023-04-15",
      endDate: "2023-04-18",
      days: 4,
      reason: "Family vacation",
      status: "Approved",
      approvedBy: "Sarah Williams",
      approvedOn: "2023-03-20",
    },
    {
      id: 2,
      type: "Sick Leave",
      startDate: "2023-03-10",
      endDate: "2023-03-11",
      days: 2,
      reason: "Fever",
      status: "Approved",
      approvedBy: "Sarah Williams",
      approvedOn: "2023-03-10",
    },
    {
      id: 3,
      type: "Annual Leave",
      startDate: "2023-05-22",
      endDate: "2023-05-23",
      days: 2,
      reason: "Personal event",
      status: "Pending",
      submittedOn: "2023-04-15",
    },
  ]

  const holidays = [
    { date: "2023-01-01", name: "New Year's Day" },
    { date: "2023-01-16", name: "Martin Luther King Jr. Day" },
    { date: "2023-02-20", name: "Presidents' Day" },
    { date: "2023-05-29", name: "Memorial Day" },
    { date: "2023-06-19", name: "Juneteenth" },
    { date: "2023-07-04", name: "Independence Day" },
    { date: "2023-09-04", name: "Labor Day" },
    { date: "2023-10-09", name: "Columbus Day" },
    { date: "2023-11-11", name: "Veterans Day" },
    { date: "2023-11-23", name: "Thanksgiving Day" },
    { date: "2023-12-25", name: "Christmas Day" },
  ]

  const date = new Date()

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">My Leaves</h2>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Apply for Leave
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Annual Leave</CardTitle>
              <CardDescription>Regular vacation days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {leaveBalance.annual.total - leaveBalance.annual.used - leaveBalance.annual.pending} days
              </div>
              <p className="text-xs text-muted-foreground">Available out of {leaveBalance.annual.total} days</p>
              <div className="mt-2">
                <Progress value={(leaveBalance.annual.used / leaveBalance.annual.total) * 100} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Used: {leaveBalance.annual.used} days</span>
                  <span>Pending: {leaveBalance.annual.pending} days</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Sick Leave</CardTitle>
              <CardDescription>Medical and health related</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {leaveBalance.sick.total - leaveBalance.sick.used - leaveBalance.sick.pending} days
              </div>
              <p className="text-xs text-muted-foreground">Available out of {leaveBalance.sick.total} days</p>
              <div className="mt-2">
                <Progress value={(leaveBalance.sick.used / leaveBalance.sick.total) * 100} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Used: {leaveBalance.sick.used} days</span>
                  <span>Pending: {leaveBalance.sick.pending} days</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Personal Leave</CardTitle>
              <CardDescription>For personal matters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {leaveBalance.personal.total - leaveBalance.personal.used - leaveBalance.personal.pending} days
              </div>
              <p className="text-xs text-muted-foreground">Available out of {leaveBalance.personal.total} days</p>
              <div className="mt-2">
                <Progress value={(leaveBalance.personal.used / leaveBalance.personal.total) * 100} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Used: {leaveBalance.personal.used} days</span>
                  <span>Pending: {leaveBalance.personal.pending} days</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          <Card className="col-span-7 md:col-span-4">
            <CardHeader>
              <CardTitle>Leave Requests</CardTitle>
              <CardDescription>Your leave applications and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="approved">Approved</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-4 space-y-4">
                  {leaveRequests.map((request) => (
                    <div key={request.id} className="flex flex-col space-y-2 rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{request.type}</span>
                        </div>
                        <Badge
                          variant={
                            request.status === "Approved"
                              ? "success"
                              : request.status === "Rejected"
                                ? "destructive"
                                : "outline"
                          }
                        >
                          {request.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>
                          {format(new Date(request.startDate), "MMM d, yyyy")} -{" "}
                          {format(new Date(request.endDate), "MMM d, yyyy")}
                        </span>
                        <Badge variant="outline" className="ml-2">
                          {request.days} days
                        </Badge>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Reason: </span>
                        <span className="text-muted-foreground">{request.reason}</span>
                      </div>
                      {request.status === "Approved" && (
                        <div className="text-sm">
                          <span className="font-medium">Approved by: </span>
                          <span className="text-muted-foreground">
                            {request.approvedBy} on {format(new Date(request.approvedOn), "MMM d, yyyy")}
                          </span>
                        </div>
                      )}
                      {request.status === "Pending" && (
                        <div className="text-sm">
                          <span className="font-medium">Submitted on: </span>
                          <span className="text-muted-foreground">
                            {format(new Date(request.submittedOn), "MMM d, yyyy")}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-end gap-2 pt-2">
                        <Button variant="outline" size="sm">
                          <FileText className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                        {request.status === "Pending" && (
                          <Button variant="destructive" size="sm">
                            <X className="mr-2 h-4 w-4" />
                            Cancel Request
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="pending" className="mt-4 space-y-4">
                  {leaveRequests
                    .filter((r) => r.status === "Pending")
                    .map((request) => (
                      <div key={request.id} className="flex flex-col space-y-2 rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{request.type}</span>
                          </div>
                          <Badge variant="outline">{request.status}</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {format(new Date(request.startDate), "MMM d, yyyy")} -{" "}
                            {format(new Date(request.endDate), "MMM d, yyyy")}
                          </span>
                          <Badge variant="outline" className="ml-2">
                            {request.days} days
                          </Badge>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Reason: </span>
                          <span className="text-muted-foreground">{request.reason}</span>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Submitted on: </span>
                          <span className="text-muted-foreground">
                            {format(new Date(request.submittedOn), "MMM d, yyyy")}
                          </span>
                        </div>
                        <div className="flex justify-end gap-2 pt-2">
                          <Button variant="outline" size="sm">
                            <FileText className="mr-2 h-4 w-4" />
                            View Details
                          </Button>
                          <Button variant="destructive" size="sm">
                            <X className="mr-2 h-4 w-4" />
                            Cancel Request
                          </Button>
                        </div>
                      </div>
                    ))}
                </TabsContent>
                <TabsContent value="approved" className="mt-4 space-y-4">
                  {leaveRequests
                    .filter((r) => r.status === "Approved")
                    .map((request) => (
                      <div key={request.id} className="flex flex-col space-y-2 rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{request.type}</span>
                          </div>
                          <Badge variant="success">{request.status}</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {format(new Date(request.startDate), "MMM d, yyyy")} -{" "}
                            {format(new Date(request.endDate), "MMM d, yyyy")}
                          </span>
                          <Badge variant="outline" className="ml-2">
                            {request.days} days
                          </Badge>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Reason: </span>
                          <span className="text-muted-foreground">{request.reason}</span>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Approved by: </span>
                          <span className="text-muted-foreground">
                            {request.approvedBy} on {format(new Date(request.approvedOn), "MMM d, yyyy")}
                          </span>
                        </div>
                        <div className="flex justify-end gap-2 pt-2">
                          <Button variant="outline" size="sm">
                            <FileText className="mr-2 h-4 w-4" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          <Card className="col-span-7 md:col-span-3">
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
              <CardDescription>View your leaves and holidays</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar mode="single" selected={date} className="rounded-md border" />
              <div className="mt-4">
                <h4 className="font-medium mb-2">Upcoming Holidays</h4>
                <div className="space-y-2">
                  {holidays
                    .filter((h) => new Date(h.date) > new Date())
                    .slice(0, 3)
                    .map((holiday, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span>{holiday.name}</span>
                        <Badge variant="outline">{format(new Date(holiday.date), "MMM d, yyyy")}</Badge>
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <CalendarIcon className="mr-2 h-4 w-4" />
                View Full Calendar
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
