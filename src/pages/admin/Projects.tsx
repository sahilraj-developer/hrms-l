"use client"

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
  AlertCircle,
  Users,
  Briefcase,
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

// Sample projects data
const projects = [
  {
    id: "PRJ001",
    name: "Website Redesign",
    client: "TechCorp Solutions",
    startDate: "2023-03-15",
    endDate: "2023-06-30",
    status: "In Progress",
    progress: 65,
    manager: "John Doe",
    team: 8,
    budget: 45000,
    spent: 28000,
  },
  {
    id: "PRJ002",
    name: "Mobile App Development",
    client: "Innovate Industries",
    startDate: "2023-02-01",
    endDate: "2023-07-15",
    status: "In Progress",
    progress: 40,
    manager: "Jane Smith",
    team: 6,
    budget: 75000,
    spent: 32000,
  },
  {
    id: "PRJ003",
    name: "CRM Implementation",
    client: "Global Enterprises",
    startDate: "2023-01-10",
    endDate: "2023-04-30",
    status: "Completed",
    progress: 100,
    manager: "Michael Johnson",
    team: 5,
    budget: 60000,
    spent: 58000,
  },
  {
    id: "PRJ004",
    name: "Data Migration",
    client: "Finance Corp",
    startDate: "2023-04-01",
    endDate: "2023-05-15",
    status: "In Progress",
    progress: 80,
    manager: "Emily Davis",
    team: 4,
    budget: 25000,
    spent: 18000,
  },
  {
    id: "PRJ005",
    name: "Security Audit",
    client: "Healthcare Systems",
    startDate: "2023-05-01",
    endDate: "2023-05-31",
    status: "Not Started",
    progress: 0,
    manager: "Robert Wilson",
    team: 3,
    budget: 15000,
    spent: 0,
  },
]

// Sample tasks data
const tasks = [
  {
    id: "TSK001",
    projectId: "PRJ001",
    name: "Design Homepage Mockups",
    assignee: "Lisa Wang",
    status: "Completed",
    priority: "High",
    dueDate: "2023-04-10",
    completedDate: "2023-04-08",
  },
  {
    id: "TSK002",
    projectId: "PRJ001",
    name: "Implement Frontend Components",
    assignee: "David Lee",
    status: "In Progress",
    priority: "Medium",
    dueDate: "2023-05-15",
    completedDate: null,
  },
  {
    id: "TSK003",
    projectId: "PRJ001",
    name: "Backend API Development",
    assignee: "John Doe",
    status: "In Progress",
    priority: "High",
    dueDate: "2023-05-20",
    completedDate: null,
  },
  {
    id: "TSK004",
    projectId: "PRJ002",
    name: "User Authentication Module",
    assignee: "Sarah Johnson",
    status: "In Progress",
    priority: "High",
    dueDate: "2023-04-30",
    completedDate: null,
  },
  {
    id: "TSK005",
    projectId: "PRJ002",
    name: "UI/UX Design for Mobile App",
    assignee: "Lisa Wang",
    status: "Completed",
    priority: "Medium",
    dueDate: "2023-03-15",
    completedDate: "2023-03-12",
  },
  {
    id: "TSK006",
    projectId: "PRJ003",
    name: "Data Migration Scripts",
    assignee: "Michael Johnson",
    status: "Completed",
    priority: "High",
    dueDate: "2023-03-01",
    completedDate: "2023-02-28",
  },
  {
    id: "TSK007",
    projectId: "PRJ004",
    name: "Database Schema Design",
    assignee: "Emily Davis",
    status: "Completed",
    priority: "High",
    dueDate: "2023-04-15",
    completedDate: "2023-04-12",
  },
]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeProject, setActiveProject] = useState<string | null>(null)

  // Filter projects based on search term
  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.manager.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Filter tasks based on active project and search term
  const filteredTasks = tasks.filter(
    (task) =>
      (activeProject ? task.projectId === activeProject : true) &&
      (task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.assignee.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.priority.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Project Management</h1>
          <p className="text-muted-foreground">Manage projects, tasks, and resources.</p>
        </div>
        <Button className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {projects.filter((project) => project.status === "In Progress").length}
            </div>
            <p className="text-xs text-muted-foreground">
              {projects.filter((project) => project.status === "Not Started").length} not started,{" "}
              {projects.filter((project) => project.status === "Completed").length} completed
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(projects.reduce((sum, project) => sum + project.budget, 0))}
            </div>
            <p className="text-xs text-muted-foreground">
              {formatCurrency(projects.reduce((sum, project) => sum + project.spent, 0))} spent so far
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projects.reduce((sum, project) => sum + project.team, 0)}</div>
            <p className="text-xs text-muted-foreground">Across {projects.length} projects</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="projects">
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
        </TabsList>
        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Project List</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    Filter
                  </Button>
                </div>
              </div>
              <CardDescription>View and manage all projects.</CardDescription>
              <div className="flex items-center gap-2 pt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search projects..."
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
                        Project Name
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Timeline</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Manager</TableHead>
                    <TableHead>Team</TableHead>
                    <TableHead>Budget</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProjects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="font-medium">{project.id}</TableCell>
                      <TableCell>{project.name}</TableCell>
                      <TableCell>{project.client}</TableCell>
                      <TableCell>
                        <div className="flex flex-col text-xs">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 text-muted-foreground" />
                            {new Date(project.startDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 text-muted-foreground" />
                            {new Date(project.endDate).toLocaleDateString()}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            project.status === "Completed"
                              ? "success"
                              : project.status === "In Progress"
                                ? "default"
                                : "secondary"
                          }
                          className="flex w-fit items-center gap-1"
                        >
                          {project.status === "Completed" ? (
                            <CheckCircle className="h-3 w-3" />
                          ) : project.status === "In Progress" ? (
                            <Clock className="h-3 w-3" />
                          ) : (
                            <AlertCircle className="h-3 w-3" />
                          )}
                          {project.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <Progress value={project.progress} className="h-2" />
                          <span className="text-xs text-muted-foreground">{project.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>{project.manager}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Users className="h-3.5 w-3.5 text-muted-foreground" />
                          {project.team}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col text-xs">
                          <span>Budget: {formatCurrency(project.budget)}</span>
                          <span className="text-muted-foreground">Spent: {formatCurrency(project.spent)}</span>
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
                            <DropdownMenuItem>Edit project</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setActiveProject(project.id)}>View tasks</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Archive project</DropdownMenuItem>
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
                Showing <strong>{filteredProjects.length}</strong> of <strong>{projects.length}</strong> projects
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
        <TabsContent value="tasks" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>
                  {activeProject ? `Tasks for ${projects.find((p) => p.id === activeProject)?.name}` : "All Tasks"}
                </CardTitle>
                <div className="flex items-center gap-2">
                  {activeProject && (
                    <Button variant="outline" size="sm" className="h-8" onClick={() => setActiveProject(null)}>
                      View All Tasks
                    </Button>
                  )}
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    Filter
                  </Button>
                  <Button size="sm" className="h-8 gap-1">
                    <Plus className="h-3.5 w-3.5" />
                    Add Task
                  </Button>
                </div>
              </div>
              <CardDescription>View and manage project tasks.</CardDescription>
              <div className="flex items-center gap-2 pt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search tasks..."
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
                        Task Name
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    {!activeProject && <TableHead>Project</TableHead>}
                    <TableHead>Assignee</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Completed Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell className="font-medium">{task.id}</TableCell>
                      <TableCell>{task.name}</TableCell>
                      {!activeProject && (
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-3.5 w-3.5 text-muted-foreground" />
                            {projects.find((p) => p.id === task.projectId)?.name}
                          </div>
                        </TableCell>
                      )}
                      <TableCell>{task.assignee}</TableCell>
                      <TableCell>
                        <Badge
                          variant={task.status === "Completed" ? "success" : "default"}
                          className="flex w-fit items-center gap-1"
                        >
                          {task.status === "Completed" ? (
                            <CheckCircle className="h-3 w-3" />
                          ) : (
                            <Clock className="h-3 w-3" />
                          )}
                          {task.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            task.priority === "High"
                              ? "destructive"
                              : task.priority === "Medium"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {task.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                          {new Date(task.dueDate).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        {task.completedDate ? (
                          <div className="flex items-center gap-1">
                            <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                            {new Date(task.completedDate).toLocaleDateString()}
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
                            <DropdownMenuItem>Edit task</DropdownMenuItem>
                            {task.status !== "Completed" ? (
                              <DropdownMenuItem className="text-green-600">
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Mark as completed
                              </DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem>
                                <Clock className="mr-2 h-4 w-4" />
                                Mark as in progress
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Delete task</DropdownMenuItem>
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
                Showing <strong>{filteredTasks.length}</strong> of{" "}
                <strong>
                  {activeProject ? tasks.filter((t) => t.projectId === activeProject).length : tasks.length}
                </strong>{" "}
                tasks
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
