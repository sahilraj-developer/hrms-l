"use client"

import { useState } from "react"
// import Link from "next/link"
import { ArrowUpDown, MoreHorizontal, Plus, Search, Filter, Calendar, Users, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Link } from "react-router-dom"

// Sample job data
const jobs = [
  {
    id: "JOB001",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    status: "Open",
    applicants: 24,
    postedDate: "2023-04-10",
  },
  {
    id: "JOB002",
    title: "UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    status: "Open",
    applicants: 18,
    postedDate: "2023-04-12",
  },
  {
    id: "JOB003",
    title: "Marketing Specialist",
    department: "Marketing",
    location: "New York, NY",
    type: "Full-time",
    status: "Open",
    applicants: 15,
    postedDate: "2023-04-15",
  },
  {
    id: "JOB004",
    title: "HR Coordinator",
    department: "HR",
    location: "Chicago, IL",
    type: "Full-time",
    status: "Closed",
    applicants: 32,
    postedDate: "2023-03-20",
  },
  {
    id: "JOB005",
    title: "Financial Analyst",
    department: "Finance",
    location: "Boston, MA",
    type: "Full-time",
    status: "Open",
    applicants: 12,
    postedDate: "2023-04-18",
  },
  {
    id: "JOB006",
    title: "Backend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    status: "Open",
    applicants: 28,
    postedDate: "2023-04-05",
  },
  {
    id: "JOB007",
    title: "Sales Representative",
    department: "Sales",
    location: "Los Angeles, CA",
    type: "Full-time",
    status: "Open",
    applicants: 9,
    postedDate: "2023-04-20",
  },
]

// Sample applicant data
const applicants = [
  {
    id: "APP001",
    name: "John Smith",
    email: "john.smith@example.com",
    position: "Senior Frontend Developer",
    status: "Interview",
    appliedDate: "2023-04-12",
  },
  {
    id: "APP002",
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    position: "UX Designer",
    status: "Screening",
    appliedDate: "2023-04-14",
  },
  {
    id: "APP003",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    position: "Backend Developer",
    status: "Offer",
    appliedDate: "2023-04-08",
  },
  {
    id: "APP004",
    name: "Sarah Davis",
    email: "sarah.davis@example.com",
    position: "Marketing Specialist",
    status: "Rejected",
    appliedDate: "2023-04-16",
  },
  {
    id: "APP005",
    name: "David Wilson",
    email: "david.wilson@example.com",
    position: "Senior Frontend Developer",
    status: "New",
    appliedDate: "2023-04-21",
  },
]

export default function JobHubPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter jobs based on search term
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Filter applicants based on search term
  const filteredApplicants = applicants.filter(
    (applicant) =>
      applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.status.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Job Hub</h1>
          <p className="text-muted-foreground">Manage job postings and applicants.</p>
        </div>
        <Button className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          Post New Job
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Open Positions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{jobs.filter((job) => job.status === "Open").length}</div>
            <p className="text-xs text-muted-foreground">
              Across {Array.from(new Set(jobs.map((job) => job.department))).length} departments
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Applicants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{applicants.length}</div>
            <p className="text-xs text-muted-foreground">
              {applicants.filter((app) => app.status === "New").length} new this week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Time to Hire (Avg)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24 days</div>
            <p className="text-xs text-muted-foreground">-3 days from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="jobs">
        <TabsList>
          <TabsTrigger value="jobs">Job Postings</TabsTrigger>
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
        </TabsList>
        <TabsContent value="jobs" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Job Listings</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    Filter
                  </Button>
                </div>
              </div>
              <CardDescription>Manage all job postings across the organization.</CardDescription>
              <div className="flex items-center gap-2 pt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search jobs..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1 cursor-pointer">
                        Job Title
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Applicants</TableHead>
                    <TableHead>Posted Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredJobs.map((job) => (
                    <TableRow key={job.id}>
                      <TableCell className="font-medium">{job.id}</TableCell>
                      <TableCell>
                        <Link to={`/admin/job-hub/${job.id}`} className="hover:underline">
                          {job.title}
                        </Link>
                      </TableCell>
                      <TableCell>{job.department}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                          {job.location}
                        </div>
                      </TableCell>
                      <TableCell>{job.type}</TableCell>
                      <TableCell>
                        <Badge variant={job.status === "Open" ? "default" : "secondary"}>{job.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Users className="h-3.5 w-3.5 text-muted-foreground" />
                          {job.applicants}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                          {new Date(job.postedDate).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuItem>Edit job</DropdownMenuItem>
                            <DropdownMenuItem>View applicants</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Close job</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">
                Showing <strong>{filteredJobs.length}</strong> of <strong>{jobs.length}</strong> jobs
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="applicants" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Applicants</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    Filter
                  </Button>
                </div>
              </div>
              <CardDescription>Track and manage job applicants.</CardDescription>
              <div className="flex items-center gap-2 pt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search applicants..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1 cursor-pointer">
                        Name
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Applied Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredApplicants.map((applicant) => (
                    <TableRow key={applicant.id}>
                      <TableCell className="font-medium">{applicant.id}</TableCell>
                      <TableCell>
                        <Link to={`/admin/job-hub/applicants/${applicant.id}`} className="hover:underline">
                          {applicant.name}
                        </Link>
                      </TableCell>
                      <TableCell>{applicant.email}</TableCell>
                      <TableCell>{applicant.position}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            applicant.status === "Offer"
                              ? "success"
                              : applicant.status === "Interview"
                                ? "default"
                                : applicant.status === "Rejected"
                                  ? "destructive"
                                  : "secondary"
                          }
                        >
                          {applicant.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                          {new Date(applicant.appliedDate).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View profile</DropdownMenuItem>
                            <DropdownMenuItem>Schedule interview</DropdownMenuItem>
                            <DropdownMenuItem>Send email</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Reject application</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">
                Showing <strong>{filteredApplicants.length}</strong> of <strong>{applicants.length}</strong> applicants
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
