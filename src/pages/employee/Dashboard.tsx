"use client"

import { useState } from "react"
import { Calendar, CheckCircle, Clock, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function EmployeeDashboard() {
  const [currentDate] = useState(
    new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  )

  // Mock data
  const stats = [
    {
      title: "Leave Balance",
      value: "12 days",
      icon: Calendar,
      description: "Annual leave remaining",
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Tasks",
      value: "8/12",
      icon: CheckCircle,
      description: "Tasks completed this week",
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Team",
      value: "6 members",
      icon: Users,
      description: "In your project team",
      color: "bg-purple-100 text-purple-700",
    },
  ]

  const upcomingEvents = [
    {
      title: "Team Meeting",
      date: "Today, 2:00 PM",
      type: "meeting",
    },
    {
      title: "Project Deadline",
      date: "Tomorrow, 5:00 PM",
      type: "deadline",
    },
    {
      title: "Performance Review",
      date: "May 15, 10:00 AM",
      type: "review",
    },
    {
      title: "Company Event",
      date: "May 20, All day",
      type: "event",
    },
  ]

  const announcements = [
    {
      title: "New Health Benefits",
      date: "May 1, 2023",
      content: "We've updated our health benefits package. Check your email for details.",
    },
    {
      title: "Office Closure",
      date: "May 29, 2023",
      content: "The office will be closed for Memorial Day. Enjoy the long weekend!",
    },
    {
      title: "New Learning Platform",
      date: "April 28, 2023",
      content: "We've launched a new learning platform. Explore new courses now!",
    },
  ]

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Team Lead",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Sarah Williams",
      role: "UX Designer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Michael Brown",
      role: "Developer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Emily Davis",
      role: "Product Manager",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">{currentDate}</p>
        </div>
        <Button>
          <Clock className="mr-2 h-4 w-4" />
          Clock In
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className={`p-2 rounded-full ${stat.color}`}>
                <stat.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Current Projects</CardTitle>
            <CardDescription>Your active project progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="font-medium">Website Redesign</div>
                <div className="text-sm text-muted-foreground">75%</div>
              </div>
              <Progress value={75} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="font-medium">Mobile App Development</div>
                <div className="text-sm text-muted-foreground">40%</div>
              </div>
              <Progress value={40} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="font-medium">API Integration</div>
                <div className="text-sm text-muted-foreground">90%</div>
              </div>
              <Progress value={90} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>People you work with</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-muted-foreground">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming & Announcements</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="upcoming">
            <TabsList className="mb-4">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="announcements">Announcements</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming" className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-slate-100">
                      <Calendar className="h-4 w-4 text-slate-600" />
                    </div>
                    <div>
                      <div className="font-medium">{event.title}</div>
                      <div className="text-sm text-muted-foreground">{event.date}</div>
                    </div>
                  </div>
                  <Badge
                    variant={
                      event.type === "meeting"
                        ? "default"
                        : event.type === "deadline"
                          ? "destructive"
                          : event.type === "review"
                            ? "outline"
                            : "secondary"
                    }
                  >
                    {event.type}
                  </Badge>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="announcements" className="space-y-4">
              {announcements.map((announcement, index) => (
                <div key={index} className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium">{announcement.title}</div>
                    <div className="text-xs text-muted-foreground">{announcement.date}</div>
                  </div>
                  <p className="text-sm">{announcement.content}</p>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
