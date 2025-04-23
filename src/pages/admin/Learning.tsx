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
  GraduationCap,
  BookOpen,
  Award,
  Play,
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
import { Progress } from "@/components/ui/progress"
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

// Sample training programs data
const trainingPrograms = [
  {
    id: "TP001",
    title: "Leadership Development",
    category: "Management",
    description: "Develop essential leadership skills for managers and team leads.",
    duration: "8 weeks",
    status: "Active",
    enrolledEmployees: 24,
    startDate: "2023-04-10",
    endDate: "2023-06-05",
    instructor: "Sarah Johnson",
  },
  {
    id: "TP002",
    title: "Technical Skills: Frontend Development",
    category: "Technical",
    description: "Learn modern frontend development techniques and frameworks.",
    duration: "6 weeks",
    status: "Active",
    enrolledEmployees: 18,
    startDate: "2023-05-01",
    endDate: "2023-06-12",
    instructor: "Michael Chen",
  },
  {
    id: "TP003",
    title: "Communication Skills",
    category: "Soft Skills",
    description: "Improve workplace communication and presentation skills.",
    duration: "4 weeks",
    status: "Upcoming",
    enrolledEmployees: 32,
    startDate: "2023-06-15",
    endDate: "2023-07-13",
    instructor: "Emily Davis",
  },
  {
    id: "TP004",
    title: "Project Management Fundamentals",
    category: "Management",
    description: "Learn the basics of project management methodologies and tools.",
    duration: "5 weeks",
    status: "Completed",
    enrolledEmployees: 15,
    startDate: "2023-02-10",
    endDate: "2023-03-17",
    instructor: "Robert Wilson",
  },
  {
    id: "TP005",
    title: "Data Analysis with Python",
    category: "Technical",
    description: "Learn data analysis techniques using Python and related libraries.",
    duration: "6 weeks",
    status: "Active",
    enrolledEmployees: 12,
    startDate: "2023-04-20",
    endDate: "2023-06-01",
    instructor: "David Lee",
  },
]

// Sample employee training data
const employeeTrainings = [
  {
    id: "ET001",
    employeeId: "EMP001",
    employeeName: "John Doe",
    department: "Engineering",
    trainingId: "TP002",
    trainingTitle: "Technical Skills: Frontend Development",
    progress: 75,
    status: "In Progress",
    startDate: "2023-05-01",
    completionDate: null,
  },
  {
    id: "ET002",
    employeeId: "EMP002",
    employeeName: "Jane Smith",
    department: "Design",
    trainingId: "TP002",
    trainingTitle: "Technical Skills: Frontend Development",
    progress: 60,
    status: "In Progress",
    startDate: "2023-05-01",
    completionDate: null,
  },
  {
    id: "ET003",
    employeeId: "EMP003",
    employeeName: "Michael Johnson",
    department: "Marketing",
    trainingId: "TP001",
    trainingTitle: "Leadership Development",
    progress: 90,
    status: "In Progress",
    startDate: "2023-04-10",
    completionDate: null,
  },
  {
    id: "ET004",
    employeeId: "EMP004",
    employeeName: "Emily Davis",
    department: "HR",
    trainingId: "TP001",
    trainingTitle: "Leadership Development",
    progress: 100,
    status: "Completed",
    startDate: "2023-04-10",
    completionDate: "2023-05-20",
  },
  {
    id: "ET005",
    employeeId: "EMP005",
    employeeName: "Robert Wilson",
    department: "Finance",
    trainingId: "TP004",
    trainingTitle: "Project Management Fundamentals",
    progress: 100,
    status: "Completed",
    startDate: "2023-02-10",
    completionDate: "2023-03-15",
  },
  {
    id: "ET006",
    employeeId: "EMP006",
    employeeName: "Sarah Johnson",
    department: "Engineering",
    trainingId: "TP005",
    trainingTitle: "Data Analysis with Python",
    progress: 45,
    status: "In Progress",
    startDate: "2023-04-20",
    completionDate: null,
  },
]

export default function LearningPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openAddProgramDialog, setOpenAddProgramDialog] = useState(false)
  const [openAddTrainingDialog, setOpenAddTrainingDialog] = useState(false)
  const [newProgram, setNewProgram] = useState({
    title: "",
    category: "",
    description: "",
    duration: "",
    startDate: "",
    endDate: "",
    instructor: "",
  })
  const [newTraining, setNewTraining] = useState({
    employeeId: "",
    employeeName: "",
    department: "",
    trainingId: "",
    trainingTitle: "",
  })

  // Filter training programs based on search term
  const filteredTrainingPrograms = trainingPrograms.filter(
    (program) =>
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.instructor.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Filter employee trainings based on search term
  const filteredEmployeeTrainings = employeeTrainings.filter(
    (training) =>
      training.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      training.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      training.trainingTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      training.status.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleProgramInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewProgram((prev) => ({ ...prev, [name]: value }))
  }

  const handleProgramSelectChange = (name: string, value: string) => {
    setNewProgram((prev) => ({ ...prev, [name]: value }))
  }

  const handleTrainingInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewTraining((prev) => ({ ...prev, [name]: value }))
  }

  const handleTrainingSelectChange = (name: string, value: string) => {
    setNewTraining((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddProgram = () => {
    // In a real application, this would add the program to the database
    console.log("Adding new program:", newProgram)
    setOpenAddProgramDialog(false)
    // Reset form
    setNewProgram({
      title: "",
      category: "",
      description: "",
      duration: "",
      startDate: "",
      endDate: "",
      instructor: "",
    })
  }

  const handleAddTraining = () => {
    // In a real application, this would add the training to the database
    console.log("Adding new training:", newTraining)
    setOpenAddTrainingDialog(false)
    // Reset form
    setNewTraining({
      employeeId: "",
      employeeName: "",
      department: "",
      trainingId: "",
      trainingTitle: "",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Learning & Development</h1>
          <p className="text-muted-foreground">Manage employee training programs and development.</p>
        </div>
        <Dialog open={openAddProgramDialog} onOpenChange={setOpenAddProgramDialog}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-1">
              <Plus className="h-4 w-4" />
              Create Program
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Training Program</DialogTitle>
              <DialogDescription>Add a new training program for employees.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  value={newProgram.title}
                  onChange={handleProgramInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <Select onValueChange={(value) => handleProgramSelectChange("category", value)}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Technical">Technical</SelectItem>
                    <SelectItem value="Management">Management</SelectItem>
                    <SelectItem value="Soft Skills">Soft Skills</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={newProgram.description}
                  onChange={handleProgramInputChange}
                  className="col-span-3"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="duration" className="text-right">
                  Duration
                </Label>
                <Input
                  id="duration"
                  name="duration"
                  value={newProgram.duration}
                  onChange={handleProgramInputChange}
                  className="col-span-3"
                  placeholder="e.g., 6 weeks"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="startDate" className="text-right">
                  Start Date
                </Label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="date"
                  value={newProgram.startDate}
                  onChange={handleProgramInputChange}
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
                  value={newProgram.endDate}
                  onChange={handleProgramInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="instructor" className="text-right">
                  Instructor
                </Label>
                <Input
                  id="instructor"
                  name="instructor"
                  value={newProgram.instructor}
                  onChange={handleProgramInputChange}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpenAddProgramDialog(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddProgram}>Create Program</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {trainingPrograms.filter((program) => program.status === "Active").length}
            </div>
            <p className="text-xs text-muted-foreground">
              {trainingPrograms.filter((program) => program.status === "Upcoming").length} upcoming,{" "}
              {trainingPrograms.filter((program) => program.status === "Completed").length} completed
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Enrolled Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{employeeTrainings.length}</div>
            <p className="text-xs text-muted-foreground">
              {employeeTrainings.filter((training) => training.status === "Completed").length} completed trainings
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(
                (employeeTrainings.filter((training) => training.status === "Completed").length /
                  employeeTrainings.length) *
                  100,
              )}
              %
            </div>
            <p className="text-xs text-muted-foreground">Overall training completion rate</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="programs">
        <TabsList>
          <TabsTrigger value="programs">Training Programs</TabsTrigger>
          <TabsTrigger value="employee-trainings">Employee Trainings</TabsTrigger>
        </TabsList>
        <TabsContent value="programs" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Training Programs</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    Filter
                  </Button>
                </div>
              </div>
              <CardDescription>View and manage training programs.</CardDescription>
              <div className="flex items-center gap-2 pt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search programs..."
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
                        Program Title
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Enrolled</TableHead>
                    <TableHead>Date Range</TableHead>
                    <TableHead>Instructor</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTrainingPrograms.map((program) => (
                    <TableRow key={program.id}>
                      <TableCell className="font-medium">{program.id}</TableCell>
                      <TableCell>
                        <div className="font-medium">{program.title}</div>
                        <div className="text-xs text-muted-foreground line-clamp-1">{program.description}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="flex w-fit items-center gap-1">
                          {program.category === "Technical" ? (
                            <BookOpen className="h-3 w-3" />
                          ) : program.category === "Management" ? (
                            <GraduationCap className="h-3 w-3" />
                          ) : (
                            <Award className="h-3 w-3" />
                          )}
                          {program.category}
                        </Badge>
                      </TableCell>
                      <TableCell>{program.duration}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            program.status === "Active"
                              ? "default"
                              : program.status === "Completed"
                                ? "success"
                                : "secondary"
                          }
                          className="flex w-fit items-center gap-1"
                        >
                          {program.status === "Active" ? (
                            <Play className="h-3 w-3" />
                          ) : program.status === "Completed" ? (
                            <CheckCircle className="h-3 w-3" />
                          ) : (
                            <Clock className="h-3 w-3" />
                          )}
                          {program.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{program.enrolledEmployees}</TableCell>
                      <TableCell>
                        <div className="flex flex-col text-xs">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 text-muted-foreground" />
                            {new Date(program.startDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 text-muted-foreground" />
                            {new Date(program.endDate).toLocaleDateString()}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{program.instructor}</TableCell>
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
                            <DropdownMenuItem>Edit program</DropdownMenuItem>
                            <DropdownMenuItem>View participants</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {program.status === "Active" && (
                              <DropdownMenuItem className="text-green-600">
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Mark as completed
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem className="text-red-600">Archive program</DropdownMenuItem>
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
                Showing <strong>{filteredTrainingPrograms.length}</strong> of <strong>{trainingPrograms.length}</strong>{" "}
                programs
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
        <TabsContent value="employee-trainings" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Employee Trainings</CardTitle>
                <div className="flex items-center gap-2">
                  <Dialog open={openAddTrainingDialog} onOpenChange={setOpenAddTrainingDialog}>
                    <DialogTrigger asChild>
                      <Button size="sm" className="h-8 gap-1">
                        <Plus className="h-3.5 w-3.5" />
                        Enroll Employee
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Enroll Employee in Training</DialogTitle>
                        <DialogDescription>Assign an employee to a training program.</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="employeeName" className="text-right">
                            Employee
                          </Label>
                          <Select onValueChange={(value) => handleTrainingSelectChange("employeeName", value)}>
                            <SelectTrigger className="col-span-3">
                              <SelectValue placeholder="Select employee" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="John Doe">John Doe</SelectItem>
                              <SelectItem value="Jane Smith">Jane Smith</SelectItem>
                              <SelectItem value="Michael Johnson">Michael Johnson</SelectItem>
                              <SelectItem value="Emily Davis">Emily Davis</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="department" className="text-right">
                            Department
                          </Label>
                          <Select onValueChange={(value) => handleTrainingSelectChange("department", value)}>
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
                          <Label htmlFor="trainingTitle" className="text-right">
                            Training Program
                          </Label>
                          <Select onValueChange={(value) => handleTrainingSelectChange("trainingTitle", value)}>
                            <SelectTrigger className="col-span-3">
                              <SelectValue placeholder="Select program" />
                            </SelectTrigger>
                            <SelectContent>
                              {trainingPrograms.map((program) => (
                                <SelectItem key={program.id} value={program.title}>
                                  {program.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setOpenAddTrainingDialog(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleAddTraining}>Enroll</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    Filter
                  </Button>
                </div>
              </div>
              <CardDescription>Track employee training progress and completion.</CardDescription>
              <div className="flex items-center gap-2 pt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search employee trainings..."
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
                    <TableHead>Training Program</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>Completion Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEmployeeTrainings.map((training) => (
                    <TableRow key={training.id}>
                      <TableCell className="font-medium">{training.id}</TableCell>
                      <TableCell>{training.employeeName}</TableCell>
                      <TableCell>{training.department}</TableCell>
                      <TableCell>{training.trainingTitle}</TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <Progress value={training.progress} className="h-2" />
                          <span className="text-xs text-muted-foreground">{training.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={training.status === "Completed" ? "success" : "default"}
                          className="flex w-fit items-center gap-1"
                        >
                          {training.status === "Completed" ? (
                            <CheckCircle className="h-3 w-3" />
                          ) : (
                            <Clock className="h-3 w-3" />
                          )}
                          {training.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                          {new Date(training.startDate).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        {training.completionDate ? (
                          <div className="flex items-center gap-1">
                            <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                            {new Date(training.completionDate).toLocaleDateString()}
                          </div>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
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
                            <DropdownMenuItem>Update progress</DropdownMenuItem>
                            {training.status !== "Completed" && (
                              <DropdownMenuItem className="text-green-600">
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Mark as completed
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Remove enrollment</DropdownMenuItem>
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
                Showing <strong>{filteredEmployeeTrainings.length}</strong> of{" "}
                <strong>{employeeTrainings.length}</strong> employee trainings
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
