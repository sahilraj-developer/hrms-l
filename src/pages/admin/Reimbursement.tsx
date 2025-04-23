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
  DollarSign,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  Receipt,
  Download,
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
import { Textarea } from "@/components/ui/textarea"

// Sample reimbursement requests data
const reimbursementRequests = [
  {
    id: "RR001",
    employeeId: "EMP001",
    employeeName: "John Doe",
    department: "Engineering",
    category: "Travel",
    amount: 450.75,
    description: "Flight tickets for client meeting in New York",
    submissionDate: "2023-05-10",
    status: "Pending",
    approver: "Michael Chen",
    receiptUrl: "#",
  },
  {
    id: "RR002",
    employeeId: "EMP002",
    employeeName: "Jane Smith",
    department: "Design",
    category: "Office Supplies",
    amount: 125.3,
    description: "Design software subscription and drawing tablet",
    submissionDate: "2023-05-08",
    status: "Approved",
    approver: "Sarah Johnson",
    receiptUrl: "#",
    approvalDate: "2023-05-12",
  },
  {
    id: "RR003",
    employeeId: "EMP003",
    employeeName: "Michael Johnson",
    department: "Marketing",
    category: "Training",
    amount: 750.0,
    description: "Digital marketing course registration fee",
    submissionDate: "2023-05-05",
    status: "Approved",
    approver: "Robert Wilson",
    receiptUrl: "#",
    approvalDate: "2023-05-09",
  },
  {
    id: "RR004",
    employeeId: "EMP004",
    employeeName: "Emily Davis",
    department: "HR",
    category: "Travel",
    amount: 320.45,
    description: "Transportation and meals for recruitment event",
    submissionDate: "2023-05-12",
    status: "Pending",
    approver: "Lisa Wang",
    receiptUrl: "#",
  },
  {
    id: "RR005",
    employeeId: "EMP005",
    employeeName: "Robert Wilson",
    department: "Finance",
    category: "Meals",
    amount: 85.2,
    description: "Client lunch meeting",
    submissionDate: "2023-05-03",
    status: "Rejected",
    approver: "David Lee",
    receiptUrl: "#",
    rejectionReason: "Missing receipt details",
  },
  {
    id: "RR006",
    employeeId: "EMP001",
    employeeName: "John Doe",
    department: "Engineering",
    category: "Equipment",
    amount: 1200.0,
    description: "External monitor and docking station",
    submissionDate: "2023-05-15",
    status: "Pending",
    approver: "Michael Chen",
    receiptUrl: "#",
  },
]

// Sample reimbursement categories
const reimbursementCategories = [
  {
    id: "CAT001",
    name: "Travel",
    description: "Business travel expenses including flights, hotels, and transportation",
    limit: 2000,
  },
  { id: "CAT002", name: "Office Supplies", description: "Office supplies and equipment for work purposes", limit: 500 },
  { id: "CAT003", name: "Training", description: "Professional development courses and certifications", limit: 1500 },
  { id: "CAT004", name: "Meals", description: "Business meals with clients or team members", limit: 200 },
  { id: "CAT005", name: "Equipment", description: "Hardware and equipment for work", limit: 2000 },
]

export default function ReimbursementPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openAddDialog, setOpenAddDialog] = useState(false)
  const [newReimbursement, setNewReimbursement] = useState({
    employeeId: "",
    employeeName: "",
    department: "",
    category: "",
    amount: "",
    description: "",
  })

  // Filter reimbursement requests based on search term
  const filteredReimbursements = reimbursementRequests.filter(
    (request) =>
      request.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.status.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewReimbursement((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setNewReimbursement((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddReimbursement = () => {
    // In a real application, this would submit the reimbursement request
    console.log("Adding new reimbursement request:", newReimbursement)
    setOpenAddDialog(false)
    // Reset form
    setNewReimbursement({
      employeeId: "",
      employeeName: "",
      department: "",
      category: "",
      amount: "",
      description: "",
    })
  }

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reimbursement</h1>
          <p className="text-muted-foreground">Manage employee expense reimbursement requests.</p>
        </div>
        <Dialog open={openAddDialog} onOpenChange={setOpenAddDialog}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-1">
              <Plus className="h-4 w-4" />
              New Request
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Submit Reimbursement Request</DialogTitle>
              <DialogDescription>Fill out the form to submit a new reimbursement request.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="employeeName" className="text-right">
                  Employee
                </Label>
                <Select onValueChange={(value) => handleSelectChange("employeeName", value)}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select employee" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="John Doe">John Doe</SelectItem>
                    <SelectItem value="Jane Smith">Jane Smith</SelectItem>
                    <SelectItem value="Michael Johnson">Michael Johnson</SelectItem>
                    <SelectItem value="Emily Davis">Emily Davis</SelectItem>
                    <SelectItem value="Robert Wilson">Robert Wilson</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="department" className="text-right">
                  Department
                </Label>
                <Select onValueChange={(value) => handleSelectChange("department", value)}>
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
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <Select onValueChange={(value) => handleSelectChange("category", value)}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {reimbursementCategories.map((category) => (
                      <SelectItem key={category.id} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="amount" className="text-right">
                  Amount
                </Label>
                <div className="col-span-3 flex items-center">
                  <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    step="0.01"
                    value={newReimbursement.amount}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={newReimbursement.description}
                  onChange={handleInputChange}
                  className="col-span-3"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="receipt" className="text-right">
                  Receipt
                </Label>
                <Input id="receipt" type="file" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpenAddDialog(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddReimbursement}>Submit Request</Button>
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
            <div className="text-2xl font-bold">
              {reimbursementRequests.filter((req) => req.status === "Pending").length}
            </div>
            <p className="text-xs text-muted-foreground">Awaiting approval</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Reimbursed (Month)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(
                reimbursementRequests
                  .filter((req) => req.status === "Approved")
                  .reduce((sum, req) => sum + req.amount, 0),
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              {reimbursementRequests.filter((req) => req.status === "Approved").length} approved requests
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Processing Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.5 days</div>
            <p className="text-xs text-muted-foreground">From submission to approval</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="requests">
        <TabsList>
          <TabsTrigger value="requests">Reimbursement Requests</TabsTrigger>
          <TabsTrigger value="categories">Reimbursement Categories</TabsTrigger>
        </TabsList>
        <TabsContent value="requests" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Reimbursement Requests</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Download className="h-3.5 w-3.5" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    Filter
                  </Button>
                </div>
              </div>
              <CardDescription>View and manage employee reimbursement requests.</CardDescription>
              <div className="flex items-center gap-2 pt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search requests..."
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
                    <TableHead>Department</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Submission Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Approver</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredReimbursements.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">{request.id}</TableCell>
                      <TableCell>{request.employeeName}</TableCell>
                      <TableCell>{request.department}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="flex w-fit items-center gap-1">
                          <Receipt className="h-3 w-3" />
                          {request.category}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-3.5 w-3.5 text-muted-foreground" />
                          {formatCurrency(request.amount)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                          {new Date(request.submissionDate).toLocaleDateString()}
                        </div>
                      </TableCell>
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
                            <Clock className="h-3 w-3" />
                          )}
                          {request.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{request.approver}</TableCell>
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
                            <DropdownMenuItem>
                              <FileText className="mr-2 h-4 w-4" />
                              View receipt
                            </DropdownMenuItem>
                            {request.status === "Pending" && (
                              <>
                                <DropdownMenuSeparator />
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
                Showing <strong>{filteredReimbursements.length}</strong> of{" "}
                <strong>{reimbursementRequests.length}</strong> requests
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
        <TabsContent value="categories" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Reimbursement Categories</CardTitle>
                <Button size="sm" className="h-8 gap-1">
                  <Plus className="h-3.5 w-3.5" />
                  Add Category
                </Button>
              </div>
              <CardDescription>Manage reimbursement categories and policies.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1 cursor-pointer">
                        Category Name
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Limit</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reimbursementCategories.map((category) => (
                    <TableRow key={category.id}>
                      <TableCell className="font-medium">{category.id}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="flex w-fit items-center gap-1">
                          <Receipt className="h-3 w-3" />
                          {category.name}
                        </Badge>
                      </TableCell>
                      <TableCell>{category.description}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-3.5 w-3.5 text-muted-foreground" />
                          {formatCurrency(category.limit)}
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
                            <DropdownMenuItem>Edit category</DropdownMenuItem>
                            <DropdownMenuItem>Adjust limit</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Delete category</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
