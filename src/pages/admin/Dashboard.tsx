// import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  UserPlus,
  UserMinus,
  DollarSign,
  Calendar,
  BarChart3,
  Clock,
  Briefcase,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your HR operations and key metrics.</p>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">245</div>
                <p className="text-xs text-muted-foreground">+12 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Hires</CardTitle>
                <UserPlus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <div className="flex items-center text-xs text-green-500">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  <span>+28.5% from last month</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Turnover Rate</CardTitle>
                <UserMinus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2%</div>
                <div className="flex items-center text-xs text-red-500">
                  <ArrowDownRight className="mr-1 h-3 w-3" />
                  <span>+0.5% from last month</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Open Positions</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">4 in final interview stage</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Employee Overview</CardTitle>
                <CardDescription>Distribution of employees across departments</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <div className="text-center">
                    <BarChart3 className="h-10 w-10 mx-auto text-muted-foreground/60" />
                    <p className="mt-2 text-sm text-muted-foreground">Department Distribution Chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Team Meeting",
                      date: "Today, 2:00 PM",
                      icon: <Users className="h-4 w-4 text-muted-foreground" />,
                    },
                    {
                      title: "Performance Review",
                      date: "Tomorrow, 10:00 AM",
                      icon: <BarChart3 className="h-4 w-4 text-muted-foreground" />,
                    },
                    {
                      title: "Payroll Processing",
                      date: "Apr 25, 2023",
                      icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
                    },
                    {
                      title: "New Hire Orientation",
                      date: "Apr 26, 2023",
                      icon: <UserPlus className="h-4 w-4 text-muted-foreground" />,
                    },
                  ].map((event, i) => (
                    <div key={i} className="flex items-center">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">{event.icon}</div>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">{event.title}</p>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                      <div className="ml-auto font-medium">
                        <Link to="#" className="text-xs text-primary hover:underline">
                          View
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Leave Requests</CardTitle>
                <CardDescription>Pending approval</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Sarah Johnson", type: "Vacation", days: 5 },
                    { name: "Michael Chen", type: "Sick Leave", days: 2 },
                    { name: "Emily Davis", type: "Personal", days: 1 },
                  ].map((leave, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{leave.name}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="mr-1 h-3 w-3" />
                          <span>
                            {leave.type} • {leave.days} day{leave.days > 1 ? "s" : ""}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-xs">Pending</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Link to="/admin/leaves" className="text-xs text-primary hover:underline">
                    View all requests
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Upcoming Reviews</CardTitle>
                <CardDescription>Performance evaluations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "David Wilson", position: "Senior Developer", date: "May 5, 2023" },
                    { name: "Lisa Wang", position: "UX Designer", date: "May 8, 2023" },
                    { name: "Robert Smith", position: "Project Manager", date: "May 12, 2023" },
                  ].map((review, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{review.name}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <BarChart3 className="mr-1 h-3 w-3" />
                          <span>{review.position}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-xs">
                        <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                        <span>{review.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Link to="/admin/performance" className="text-xs text-primary hover:underline">
                    View all reviews
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest HR activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: "New employee onboarded", time: "2 hours ago" },
                    { action: "Payroll processed", time: "Yesterday" },
                    { action: "Training completed", time: "2 days ago" },
                    { action: "Job posting published", time: "3 days ago" },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <p className="text-sm">{activity.action}</p>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>HR Analytics</CardTitle>
                <CardDescription>Key performance indicators and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <div className="text-center">
                    <BarChart3 className="h-10 w-10 mx-auto text-muted-foreground/60" />
                    <p className="mt-2 text-sm text-muted-foreground">HR Analytics Dashboard</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>HR Reports</CardTitle>
                <CardDescription>Generated reports and documents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <div className="text-center">
                    <BarChart3 className="h-10 w-10 mx-auto text-muted-foreground/60" />
                    <p className="mt-2 text-sm text-muted-foreground">HR Reports Dashboard</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
