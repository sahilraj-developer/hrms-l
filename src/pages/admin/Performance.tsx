"use client"

import { useState } from "react"
import { ArrowUpDown, MoreHorizontal, Plus, Search, Filter, Calendar, Star, Clock, CheckCircle } from "lucide-react"
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

// Sample performance reviews data
const performanceReviews = [
  {
    id: "PR001",
    employeeName: "John Doe",
    employeeId: "EMP001",
    position: "Senior Developer",
    department: "Engineering",
    reviewType: "Annual",
    reviewDate: "2023-05-15",
    status: "Scheduled",
    reviewer: "Michael Chen",
    lastReview: "2022-05-18",
  },
  {
    id: "PR002",
    employeeName: "Jane Smith",
    employeeId: "EMP002",
    position: "UX Designer",
    department: "Design",
    reviewType: "Annual",
    reviewDate: "2023-05-20",
    status: "Scheduled",
    reviewer: "Sarah Johnson",
    lastReview: "2022-05-22",
  },
  {
    id: "PR003",
    employeeName: "Michael Johnson",
    employeeId: "EMP003",
    position: "Marketing Manager",
    department: "Marketing",
    reviewType: "Quarterly",
    reviewDate: "2023-04-10",
    status: "Completed",
    reviewer: "Robert Wilson",
    lastReview: "2023-01-12",
  },
  {
    id: "PR004",
    employeeName: "Emily Davis",
    employeeId: "EMP004",
    position: "HR Specialist",
    department: "HR",
    reviewType: "Probation",
    reviewDate: "2023-03-15",
    status: "Completed",
    reviewer: "Lisa Wang",
    lastReview: null,
  },
  {
    id: "PR005",
    employeeName: "Robert Wilson",
    employeeId: "EMP005",
    position: "Financial Analyst",
    department: "Finance",
    reviewType: "Annual",
    reviewDate: "2023-06-05",
    status: "Scheduled",
    reviewer: "David Lee",
    lastReview: "2022-06-08",
  },
]

// Sample performance ratings data
const performanceRatings = [
  {
    employeeId: "EMP001",
    employeeName: "John Doe",
    position: "Senior Developer",
    department: "Engineering",
    ratings: {
      technical: 4.5,
      communication: 4.0,
      teamwork: 4.2,
      leadership: 3.8,
      overall: 4.1,
    },
    reviewDate: "2022-05-18",
    strengths: ["Technical expertise", "Problem solving", "Code quality"],
    improvements: ["Documentation", "Mentoring junior developers"],
  },
  {
    employeeId: "EMP002",
    employeeName: "Jane Smith",
    position: "UX Designer",
    department: "Design",
    ratings: {
      technical: 4.3,
      communication: 4.5,
      teamwork: 4.7,
      leadership: 3.5,
      overall: 4.3,
    },
    reviewDate: "2022-05-22",
    strengths: ["Design thinking", "User research", "Collaboration"],
    improvements: ["Technical skills", "Project management"],
  },
  {
    employeeId: "EMP003",
    employeeName: "Michael Johnson",
    position: "Marketing Manager",
    department: "Marketing",
    ratings: {
      technical: 4.0,
      communication: 4.8,
      teamwork: 4.5,
      leadership: 4.2,
      overall: 4.4,
    },
    reviewDate: "2023-01-12",
    strengths: ["Campaign strategy", "Team leadership", "Communication"],
    improvements: ["Data analysis", "Budget management"],
  },
  {
    employeeId: "EMP004",
    employeeName: "Emily Davis",
    position: "HR Specialist",
    department: "HR",
    ratings: {
      technical: 3.8,
      communication: 4.6,
      teamwork: 4.4,
      leadership: 3.2,
      overall: 4.0,
    },
    reviewDate: "2023-03-15",
    strengths: ["Employee relations", "Policy implementation", "Recruitment"],
    improvements: ["HRIS systems", "Data-driven decision making"],
  },
]

export default function PerformancePage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter performance reviews based on search term
  const filteredPerformanceReviews = performanceReviews.filter(
    (review) =>
      review.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.status.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Filter performance ratings based on search term
  const filteredPerformanceRatings = performanceRatings.filter(
    (rating) =>
      rating.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rating.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rating.department.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Appraisal & Performance</h1>
          <p className="text-muted-foreground">Manage employee performance reviews and appraisals.</p>
        </div>
        <Button className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          Schedule Review
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {performanceReviews.filter((review) => review.status === "Scheduled").length}
            </div>
            <p className="text-xs text-muted-foreground">Next 30 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
              <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
              <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
              <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
              <Star className="mr-1 h-3 w-3 fill-muted text-muted" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {performanceReviews.filter((review) => review.status === "Completed").length}
            </div>
            <p className="text-xs text-muted-foreground">This quarter</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="reviews">
        <TabsList>
          <TabsTrigger value="reviews">Performance Reviews</TabsTrigger>
          <TabsTrigger value="ratings">Performance Ratings</TabsTrigger>
        </TabsList>
        <TabsContent value="reviews" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Scheduled Reviews</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    Filter
                  </Button>
                </div>
              </div>
              <CardDescription>View and manage upcoming and past performance reviews.</CardDescription>
              <div className="flex items-center gap-2 pt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search reviews..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="sm" className="h-9 gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  May 2023
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1 cursor-pointer">
                        Employee
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Review Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Reviewer</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPerformanceReviews.map((review) => (
                    <TableRow key={review.id}>
                      <TableCell className="font-medium">{review.id}</TableCell>
                      <TableCell>{review.employeeName}</TableCell>
                      <TableCell>{review.position}</TableCell>
                      <TableCell>{review.department}</TableCell>
                      <TableCell>{review.reviewType}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                          {new Date(review.reviewDate).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={review.status === "Completed" ? "success" : "secondary"}
                          className="flex w-fit items-center gap-1"
                        >
                          {review.status === "Completed" ? (
                            <CheckCircle className="h-3 w-3" />
                          ) : (
                            <Clock className="h-3 w-3" />
                          )}
                          {review.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{review.reviewer}</TableCell>
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
                            {review.status === "Scheduled" ? (
                              <>
                                <DropdownMenuItem>Conduct review</DropdownMenuItem>
                                <DropdownMenuItem>Reschedule</DropdownMenuItem>
                              </>
                            ) : (
                              <DropdownMenuItem>View results</DropdownMenuItem>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Employee history</DropdownMenuItem>
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
                Showing <strong>{filteredPerformanceReviews.length}</strong> of{" "}
                <strong>{performanceReviews.length}</strong> reviews
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
        <TabsContent value="ratings" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Performance Ratings</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    Filter
                  </Button>
                </div>
              </div>
              <CardDescription>View employee performance ratings and feedback.</CardDescription>
              <div className="flex items-center gap-2 pt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search employees..."
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
                        Employee
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Technical</TableHead>
                    <TableHead>Communication</TableHead>
                    <TableHead>Teamwork</TableHead>
                    <TableHead>Leadership</TableHead>
                    <TableHead>Overall</TableHead>
                    <TableHead>Review Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPerformanceRatings.map((rating) => (
                    <TableRow key={rating.employeeId}>
                      <TableCell className="font-medium">{rating.employeeId}</TableCell>
                      <TableCell>{rating.employeeName}</TableCell>
                      <TableCell>{rating.position}</TableCell>
                      <TableCell>{rating.department}</TableCell>
                      <TableCell>{rating.ratings.technical}</TableCell>
                      <TableCell>{rating.ratings.communication}</TableCell>
                      <TableCell>{rating.ratings.teamwork}</TableCell>
                      <TableCell>{rating.ratings.leadership}</TableCell>
                      <TableCell className="font-medium">{rating.ratings.overall}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                          {new Date(rating.reviewDate).toLocaleDateString()}
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
                            <DropdownMenuItem>View feedback</DropdownMenuItem>
                            <DropdownMenuItem>Performance history</DropdownMenuItem>
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
                Showing <strong>{filteredPerformanceRatings.length}</strong> of{" "}
                <strong>{performanceRatings.length}</strong> employees
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
