"use client"

import type React from "react"

import { useState } from "react"
import {
  ArrowUpDown,
  MoreHorizontal,
  Plus,
  Search,
  Filter,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
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
import { Textarea } from "@/components/ui/textarea"

// Sample leave requests data
const leaveRequests = [
  {
    id: "LR001",
    employeeName: "John Doe",
    employeeId: "EMP001",
    type: "Vacation",
    startDate: "2023-05-15",
    endDate: "2023-05-19",
    days: 5,
    status: "Pending",
    reason: "Annual family vacation",
    appliedDate: "2023-05-01",
  },
  {
    id: "LR002",
    employeeName: "Jane Smith",
    employeeId: "EMP002",
    type: "Sick Leave",
    startDate: "2023-05-08",
    endDate: "2023-05-09",
    days: 2,
    status: "Approved",
    reason: "Flu and fever",
    appliedDate: "2023-05-07",
  },
  {
    id: "LR003",
    employeeName: "Michael Johnson",
    employeeId: "EMP003",
    type: "Personal",
    startDate: "2023-05-22",
    endDate: "2023-05-22",
    days: 1,
    status: "Pending",
    reason: "Family emergency",
    appliedDate: "2023-05-10",
  },
  {
    id: "LR004",
    employeeName: "Emily Davis",
    employeeId: "EMP004",
    type: "Vacation",
    startDate: "2023-06-05",
    endDate: "2023-06-09",
    days: 5,
    status: "Pending",
    reason: "Summer vacation",
    appliedDate: "2023-05-12",
  },
  {
    id: "LR005",
    employeeName: "Robert Wilson",
    employeeId: "EMP005",
    type: "Sick Leave",
    startDate: "2023-05-04",
    endDate: "2023-05-05",
    days: 2,
    status: "Rejected",
    reason: "Medical appointment",
    appliedDate: "2023-05-03",
  },
  {
    id: "LR006",
    employeeName: "Sarah Johnson",
    employeeId: "EMP006",
    type: "Vacation",
    startDate: "2023-05-29",
    endDate: "2023-06-02",
    days: 5,
    status: "Approved",
    reason: "Family wedding",
    appliedDate: "2023-05-08",
  },
]

// Sample leave balances data
const leaveBalances = [
  {
    employeeId: "EMP001",
    employeeName: "John Doe",
    department: "Engineering",
    vacation: {
      total: 20,
      used: 5,
      pending: 5,
      remaining: 10,
    },
    sick: {
      total: 10,
      used: 2,
      pending: 0,
      remaining: 8,
    },
    personal: {
      total: 5,
      used: 1,
      pending: 0,
      remaining: 4,
    },
  },
  {
    employeeId: "EMP002",
    employeeName: "Jane Smith",
    department: "Design",
    vacation: {
      total: 20,
      used: 8,
      pending: 0,
      remaining: 12,
    },
    sick: {
      total: 10,
      used: 4,
      pending: 0,
      remaining: 6,
    },
    personal: {
      total: 5,
      used: 2,
      pending: 0,
      remaining: 3,
    },
  },
  {
    employeeId: "EMP003",
    employeeName: "Michael Johnson",
    department: "Marketing",
    vacation: {
      total: 20,
      used: 10,
      pending: 0,
      remaining: 10,
    },
    sick: {
      total: 10,
      used: 1,
      pending: 0,
      remaining: 9,
    },
    personal: {
      total: 5,
      used: 0,
      pending: 1,
      remaining: 4,
    },
  },
  {
    employeeId: "EMP004",
    employeeName: "Emily Davis",
    department: "HR",
    vacation: {
      total: 20,
      used: 0,
      pending: 5,
      remaining: 15,
    },
    sick: {
      total: 10,
      used: 0,
      pending: 0,
      remaining: 10,
    },
    personal: {
      total: 5,
      used: 0,
      pending: 0,
      remaining: 5,
    },
  },
]

export default function LeavesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openApplyDialog, setOpenApplyDialog] = useState(false)
  const [newLeaveRequest, setNewLeaveRequest] = useState({
    type: "",
    startDate: "",
    endDate: "",
    reason: "",
  })

  // Filter leave requests based on search term
  const filteredLeaveRequests = leaveRequests.filter(
    (request) =>
      request.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.status.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Filter leave balances based on search term
  const filteredLeaveBalances = leaveBalances.filter(
    (balance) =>
      balance.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      balance.department.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewLeaveRequest((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setNewLeaveRequest((prev) => ({ ...prev, [name]: value }))
  }

  const handleApplyLeave = () => {
    // In a real application, this would submit the leave request
    console.log("Applying for leave:", newLeaveRequest)
    setOpenApplyDialog(false)
    // Reset form
    setNewLeaveRequest({
      type: "",
      startDate: "",
      endDate: "",
      reason: "",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Leave Management</h1>
          <p className="text-muted-foreground">Manage employee leave requests and balances.</p>
        </div>
        <Dialog open={openApplyDialog} onOpenChange={setOpenApplyDialog}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-1">
              <Plus className="h-4 w-4" />
              Apply for Leave
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Apply for Leave</DialogTitle>
              <DialogDescription>Fill out the form below to submit a leave request.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="leaveType" className="text-right">
                  Leave Type
                </Label>
                <Select onValueChange={(value) => handleSelectChange("type", value)} value={newLeaveRequest.type}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select leave type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Vacation">Vacation</SelectItem>
                    <SelectItem value="Sick Leave">Sick Leave</SelectItem>
                    <SelectItem value="Personal">Personal</SelectItem>
                    <SelectItem value="Bereavement">Bereavement</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="startDate" className="text-right">
                  Start Date
                </Label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="date"
                  value={newLeaveRequest.startDate}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="endDate" className="text-right">
                  End Date
                </Label>
                <Input
                  id="endDate"
                  name="endDate"
                  type="date"
                  value={newLeaveRequest.endDate}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="reason" className="text-right">
                  Reason
                </Label>
                <Textarea
                  id="reason"
                  name="reason"
                  value={newLeaveRequest.reason}
                  onChange={handleInputChange}
                  className="col-span-3"
                  rows={3}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpenApplyDialog(false)}>
                Cancel
              </Button>
              <Button onClick={handleApplyLeave}>Submit Request</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{leaveRequests.filter((req) => req.status === "Pending").length}</div>
            <p className="text-xs text-muted-foreground">Awaiting approval</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Approved Leaves</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{leaveRequests.filter((req) => req.status === "Approved").length}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Leave Days</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2</div>
            <p className="text-xs text-muted-foreground">Per employee this year</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="leave-requests">
        <TabsList>
          <TabsTrigger value="leave-requests">Leave Requests</TabsTrigger>
          <TabsTrigger value="leave-balances">Leave Balances</TabsTrigger>
        </TabsList>
        <TabsContent value="leave-requests" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Leave Requests</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    Filter
                  </Button>
                </div>
              </div>
              <CardDescription>View and manage employee leave requests.</CardDescription>
              <div className="flex items-center gap-2 pt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search leave requests..."
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
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
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
                        Employee
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Date Range</TableHead>
                    <TableHead>Days</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Applied On</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLeaveRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">{request.id}</TableCell>
                      <TableCell>{request.employeeName}</TableCell>
                      <TableCell>{request.type}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                          {new Date(request.startDate).toLocaleDateString()} -{" "}
                          {new Date(request.endDate).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>{request.days}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            request.status === "Approved"
                              ? "success"
                              : request.status === "Rejected"
                                ? "destructive"
                                : "secondary"
                          }
                          className="flex w-fit items-center gap-1"
                        >
                          {request.status === "Approved" ? (
                            <CheckCircle className="h-3 w-3" />
                          ) : request.status === "Rejected" ? (
                            <XCircle className="h-3 w-3" />
                          ) : (
                            <AlertCircle className="h-3 w-3" />
                          )}
                          {request.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                          {new Date(request.appliedDate).toLocaleDateString()}
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
                            {request.status === "Pending" && (
                              <>
                                <DropdownMenuItem className="text-green-600">
                                  <CheckCircle className="mr-2 h-4 w-4" />
                                  Approve
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  <XCircle className="mr-2 h-4 w-4" />
                                  Reject
                                </DropdownMenuItem>
                              </>
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
                Showing <strong>{filteredLeaveRequests.length}</strong> of <strong>{leaveRequests.length}</strong> leave
                requests
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
        <TabsContent value="leave-balances" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Leave Balances</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    Filter
                  </Button>
                </div>
              </div>
              <CardDescription>View employee leave balances and allocations.</CardDescription>
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
                    <TableHead>Department</TableHead>
                    <TableHead>Vacation</TableHead>
                    <TableHead>Sick Leave</TableHead>
                    <TableHead>Personal</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLeaveBalances.map((balance) => (
                    <TableRow key={balance.employeeId}>
                      <TableCell className="font-medium">{balance.employeeId}</TableCell>
                      <TableCell>{balance.employeeName}</TableCell>
                      <TableCell>{balance.department}</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">
                            Used: {balance.vacation.used} / {balance.vacation.total}
                          </span>
                          <span className="text-xs text-muted-foreground">Pending: {balance.vacation.pending}</span>
                          <span className="font-medium">Remaining: {balance.vacation.remaining}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">
                            Used: {balance.sick.used} / {balance.sick.total}
                          </span>
                          <span className="text-xs text-muted-foreground">Pending: {balance.sick.pending}</span>
                          <span className="font-medium">Remaining: {balance.sick.remaining}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">
                            Used: {balance.personal.used} / {balance.personal.total}
                          </span>
                          <span className="text-xs text-muted-foreground">Pending: {balance.personal.pending}</span>
                          <span className="font-medium">Remaining: {balance.personal.remaining}</span>
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
                            <DropdownMenuItem>Adjust balance</DropdownMenuItem>
                            <DropdownMenuItem>Leave history</DropdownMenuItem>
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
                Showing <strong>{filteredLeaveBalances.length}</strong> of <strong>{leaveBalances.length}</strong>{" "}
                employees
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
