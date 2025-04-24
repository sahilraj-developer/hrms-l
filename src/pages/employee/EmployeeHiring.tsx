"use client"

import type React from "react"

import { useState } from "react"
import {
  ArrowUpDown,
  MoreHorizontal,
  Search,
  Filter,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  Users,
  UserPlus,
  FileText,
  Mail,
  Star,
} from "lucide-react"
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample candidates data
const candidates = [
  {
    id: "CAN001",
    name: "John Smith",
    email: "john.smith@example.com",
    position: "Senior Frontend Developer",
    department: "Engineering",
    status: "Interview",
    stage: "Technical Interview",
    appliedDate: "2023-05-10",
    source: "LinkedIn",
    rating: 4,
  },
  {
    id: "CAN002",
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    position: "UX Designer",
    department: "Design",
    status: "Screening",
    stage: "Resume Review",
    appliedDate: "2023-05-12",
    source: "Indeed",
    rating: 3,
  },
  {
    id: "CAN003",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    position: "Backend Developer",
    department: "Engineering",
    status: "Offer",
    stage: "Offer Extended",
    appliedDate: "2023-05-05",
    source: "Referral",
    rating: 5,
  },
  {
    id: "CAN004",
    name: "Sarah Davis",
    email: "sarah.davis@example.com",
    position: "Marketing Specialist",
    department: "Marketing",
    status: "Rejected",
    stage: "Final Interview",
    appliedDate: "2023-05-03",
    source: "Company Website",
    rating: 2,
  },
  {
    id: "CAN005",
    name: "David Wilson",
    email: "david.wilson@example.com",
    position: "Senior Frontend Developer",
    department: "Engineering",
    status: "New",
    stage: "Application Received",
    appliedDate: "2023-05-15",
    source: "LinkedIn",
    rating: 0,
  },
]

// Sample interviews data
const interviews = [
  {
    id: "INT001",
    candidateId: "CAN001",
    candidateName: "John Smith",
    position: "Senior Frontend Developer",
    interviewType: "Technical",
    interviewers: ["Michael Chen", "Sarah Johnson"],
    scheduledDate: "2023-05-20T10:00:00",
    duration: 60,
    status: "Scheduled",
    location: "Virtual (Zoom)",
  },
  {
    id: "INT002",
    candidateId: "CAN002",
    candidateName: "Emily Johnson",
    position: "UX Designer",
    interviewType: "Portfolio Review",
    interviewers: ["Lisa Wang", "Robert Wilson"],
    scheduledDate: "2023-05-18T14:00:00",
    duration: 45,
    status: "Scheduled",
    location: "Office - Meeting Room 3",
  },
  {
    id: "INT003",
    candidateId: "CAN003",
    candidateName: "Michael Brown",
    position: "Backend Developer",
    interviewType: "Final",
    interviewers: ["David Lee", "John Doe"],
    scheduledDate: "2023-05-12T11:00:00",
    duration: 90,
    status: "Completed",
    location: "Virtual (Teams)",
    feedback: "Strong technical skills, good cultural fit. Recommended for offer.",
    rating: 4.5,
  },
  {
    id: "INT004",
    candidateId: "CAN004",
    candidateName: "Sarah Davis",
    position: "Marketing Specialist",
    interviewType: "Final",
    interviewers: ["Jane Smith", "Michael Johnson"],
    scheduledDate: "2023-05-10T15:30:00",
    duration: 60,
    status: "Completed",
    location: "Office - Meeting Room 1",
    feedback: "Good experience but not enough technical knowledge for the role.",
    rating: 3.0,
  },
]

export default function EmployeeHiringPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openAddCandidateDialog, setOpenAddCandidateDialog] = useState(false)
  const [openScheduleInterviewDialog, setOpenScheduleInterviewDialog] = useState(false)
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null)
  const [newCandidate, setNewCandidate] = useState({
    name: "",
    email: "",
    position: "",
    department: "",
    source: "",
  })
  const [newInterview, setNewInterview] = useState({
    candidateId: "",
    candidateName: "",
    interviewType: "",
    interviewers: "",
    scheduledDate: "",
    scheduledTime: "",
    duration: "",
    location: "",
  })

  // Filter candidates based on search term
  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.status.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Filter interviews based on search term
  const filteredInterviews = interviews.filter(
    (interview) =>
      interview.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      interview.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      interview.interviewType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      interview.status.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCandidateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewCandidate((prev) => ({ ...prev, [name]: value }))
  }

  const handleCandidateSelectChange = (name: string, value: string) => {
    setNewCandidate((prev) => ({ ...prev, [name]: value }))
  }

  const handleInterviewInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewInterview((prev) => ({ ...prev, [name]: value }))
  }

  const handleInterviewSelectChange = (name: string, value: string) => {
    setNewInterview((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddCandidate = () => {
    // In a real application, this would add the candidate to the database
    console.log("Adding new candidate:", newCandidate)
    setOpenAddCandidateDialog(false)
    // Reset form
    setNewCandidate({
      name: "",
      email: "",
      position: "",
      department: "",
      source: "",
    })
  }

  const handleScheduleInterview = () => {
    // In a real application, this would schedule the interview in the database
    console.log("Scheduling new interview:", newInterview)
    setOpenScheduleInterviewDialog(false)
    // Reset form
    setNewInterview({
      candidateId: "",
      candidateName: "",
      interviewType: "",
      interviewers: "",
      scheduledDate: "",
      scheduledTime: "",
      duration: "",
      location: "",
    })
  }

  const openScheduleDialog = (candidateId: string) => {
    const candidate = candidates.find((c) => c.id === candidateId)
    if (candidate) {
      setSelectedCandidate(candidateId)
      setNewInterview((prev) => ({
        ...prev,
        candidateId: candidateId,
        candidateName: candidate.name,
      }))
      setOpenScheduleInterviewDialog(true)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Employee Hiring</h1>
          <p className="text-muted-foreground">Manage candidates and hiring process.</p>
        </div>
        <Dialog open={openAddCandidateDialog} onOpenChange={setOpenAddCandidateDialog}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-1">
              <UserPlus className="h-4 w-4" />
              Add Candidate
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Candidate</DialogTitle>
              <DialogDescription>Enter the details of the new candidate.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={newCandidate.name}
                  onChange={handleCandidateInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={newCandidate.email}
                  onChange={handleCandidateInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="position" className="text-right">
                  Position
                </Label>
                <Select onValueChange={(value) => handleCandidateSelectChange("position", value)}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Senior Frontend Developer">Senior Frontend Developer</SelectItem>
                    <SelectItem value="Backend Developer">Backend Developer</SelectItem>
                    <SelectItem value="UX Designer">UX Designer</SelectItem>
                    <SelectItem value="Marketing Specialist">Marketing Specialist</SelectItem>
                    <SelectItem value="HR Specialist">HR Specialist</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="department" className="text-right">
                  Department
                </Label>
                <Select onValueChange={(value) => handleCandidateSelectChange("department", value)}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Engineering">Engineering</SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="HR">HR</SelectItem>
                    <SelectItem value="Finance">Finance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="source" className="text-right">
                  Source
                </Label>
                <Select onValueChange={(value) => handleCandidateSelectChange("source", value)}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                    <SelectItem value="Indeed">Indeed</SelectItem>
                    <SelectItem value="Referral">Referral</SelectItem>
                    <SelectItem value="Company Website">Company Website</SelectItem>
                    <SelectItem value="Job Fair">Job Fair</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="resume" className="text-right">
                  Resume
                </Label>
                <Input id="resume" type="file" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpenAddCandidateDialog(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddCandidate}>Add Candidate</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Candidates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{candidates.length}</div>
            <p className="text-xs text-muted-foreground">
              {candidates.filter((c) => c.status === "New").length} new applications
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Interviews Scheduled</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {interviews.filter((interview) => interview.status === "Scheduled").length}
            </div>
            <p className="text-xs text-muted-foreground">Next 7 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Hiring Pipeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {candidates.filter((candidate) => candidate.status === "Offer").length}
            </div>
            <p className="text-xs text-muted-foreground">Offers pending acceptance</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="candidates">
        <TabsList>
          <TabsTrigger value="candidates">Candidates</TabsTrigger>
          <TabsTrigger value="interviews">Interviews</TabsTrigger>
        </TabsList>
        <TabsContent value="candidates" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Candidate Pipeline</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    Filter
                  </Button>
                </div>
              </div>
              <CardDescription>View and manage candidates in the hiring pipeline.</CardDescription>
              <div className="flex items-center gap-2 pt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search candidates..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="screening">Screening</SelectItem>
                    <SelectItem value="interview">Interview</SelectItem>
                    <SelectItem value="offer">Offer</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
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
                    <TableHead>Position</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Stage</TableHead>
                    <TableHead>Applied Date</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCandidates.map((candidate) => (
                    <TableRow key={candidate.id}>
                      <TableCell className="font-medium">{candidate.id}</TableCell>
                      <TableCell>
                        <div className="font-medium">{candidate.name}</div>
                        <div className="text-xs text-muted-foreground">{candidate.email}</div>
                      </TableCell>
                      <TableCell>{candidate.position}</TableCell>
                      <TableCell>{candidate.department}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            candidate.status === "Offer"
                              ? "success"
                              : candidate.status === "Rejected"
                              ? "destructive"
                              : candidate.status === "Interview"
                              ? "default"
                              : "secondary"
                          }
                          className="flex w-fit items-center gap-1"
                        >
                          {candidate.status === "Offer" ? (
                            <CheckCircle className="h-3 w-3" />
                          ) : candidate.status === "Rejected" ? (
                            <XCircle className="h-3 w-3" />
                          ) : candidate.status === "Interview" ? (
                            <Users className="h-3 w-3" />
                          ) : (
                            <Clock className="h-3 w-3" />
                          )}
                          {candidate.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{candidate.stage}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                          {new Date(candidate.appliedDate).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>{candidate.source}</TableCell>
                      <TableCell>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < candidate.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
                              }`}
                            />
                          ))}
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
                            <DropdownMenuItem>
                              <FileText className="mr-2 h-4 w-4" />
                              View resume
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => openScheduleDialog(candidate.id)}>
                              <Calendar className="mr-2 h-4 w-4" />
                              Schedule interview
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Mail className="mr-2 h-4 w-4" />
                              Send email
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Update status</DropdownMenuItem>
                            {candidate.status !== "Rejected" && (
                              <DropdownMenuItem className="text-red-600">
                                <XCircle className="mr-2 h-4 w-4" />
                                Reject candidate
                              </DropdownMenuItem>
                            )}
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
                Showing <strong>{filteredCandidates.length}</strong> of <strong>{candidates.length}</strong> candidates
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
        <TabsContent value="interviews" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Scheduled Interviews</CardTitle>
                <Dialog open={openScheduleInterviewDialog} onOpenChange={setOpenScheduleInterviewDialog}>
                  <DialogTrigger asChild>
                    <Button size="sm" className="h-8 gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      Schedule Interview
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Schedule Interview</DialogTitle>
                      <DialogDescription>Schedule an interview with a candidate.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="candidateName" className="text-right">
                          Candidate
                        </Label>
                        <Select
                          value={newInterview.candidateId}
                          onValueChange={(value) => {
                            const candidate = candidates.find((c) => c.id === value)
                            if (candidate) {
                              handleInterviewSelectChange("candidateId", value)
                              handleInterviewSelectChange("candidateName", candidate.name)
                            }
                          }}
                        >
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select candidate" />
                          </SelectTrigger>
                          <SelectContent>
                            {candidates.map((candidate) => (
                              <SelectItem key={candidate.id} value={candidate.id}>
                                {candidate.name} - {candidate.position}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="interviewType" className="text-right">
                          Interview Type
                        </Label>
                        <Select onValueChange={(value) => handleInterviewSelectChange("interviewType", value)}>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Screening">Screening</SelectItem>
                            <SelectItem value="Technical">Technical</SelectItem>
                            <SelectItem value="Portfolio Review">Portfolio Review</SelectItem>
                            <SelectItem value="Cultural Fit">Cultural Fit</SelectItem>
                            <SelectItem value="Final">Final</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="interviewers" className="text-right">
                          Interviewers
                        </Label>
                        <Input
                          id="interviewers"
                          name="interviewers"
                          value={newInterview.interviewers}
                          onChange={handleInterviewInputChange}
                          className="col-span-3"
                          placeholder="e.g., John Doe, Jane Smith"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="scheduledDate" className="text-right">
                          Date
                        </Label>
                        <Input
                          id="scheduledDate"
                          name="scheduledDate"
                          type="date"
                          value={newInterview.scheduledDate}
                          onChange={handleInterviewInputChange}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="scheduledTime" className="text-right">
                          Time
                        </Label>
                        <Input
                          id="scheduledTime"
                          name="scheduledTime"
                          type="time"
                          value={newInterview.scheduledTime}
                          onChange={handleInterviewInputChange}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="duration" className="text-right">
                          Duration (min)
                        </Label>
                        <Input
                          id="duration"
                          name="duration"
                          type="number"
                          value={newInterview.duration}
                          onChange={handleInterviewInputChange}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">

                      </div>

                      </div>


                      </DialogContent>

                      </Dialog>

                      </div>


                      </CardHeader>

                      </Card>


                      </TabsContent>


                      </Tabs>

                      </div>)

                          }
