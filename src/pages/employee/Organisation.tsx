"use client"

import { useState } from "react"
import { Search, Users, Building2, User, ChevronRight, MoreHorizontal, Plus, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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

// Sample organization data
const departments = [
  {
    id: "DEP001",
    name: "Engineering",
    head: "John Doe",
    employees: 45,
    teams: [
      { id: "TEAM001", name: "Frontend", lead: "Sarah Johnson", members: 12 },
      { id: "TEAM002", name: "Backend", lead: "Michael Chen", members: 15 },
      { id: "TEAM003", name: "QA", lead: "Lisa Wang", members: 8 },
      { id: "TEAM004", name: "DevOps", lead: "David Lee", members: 10 },
    ],
  },
  {
    id: "DEP002",
    name: "Design",
    head: "Jane Smith",
    employees: 18,
    teams: [
      { id: "TEAM005", name: "UX", lead: "Emily Davis", members: 8 },
      { id: "TEAM006", name: "UI", lead: "Robert Wilson", members: 6 },
      { id: "TEAM007", name: "Brand", lead: "Amanda Miller", members: 4 },
    ],
  },
  {
    id: "DEP003",
    name: "Marketing",
    head: "Michael Johnson",
    employees: 22,
    teams: [
      { id: "TEAM008", name: "Digital", lead: "Chris Taylor", members: 8 },
      { id: "TEAM009", name: "Content", lead: "Jessica Brown", members: 6 },
      { id: "TEAM010", name: "Events", lead: "Daniel White", members: 4 },
      { id: "TEAM011", name: "Social Media", lead: "Sophia Martinez", members: 4 },
    ],
  },
  {
    id: "DEP004",
    name: "Sales",
    head: "Robert Wilson",
    employees: 30,
    teams: [
      { id: "TEAM012", name: "North America", lead: "James Anderson", members: 12 },
      { id: "TEAM013", name: "Europe", lead: "Emma Thompson", members: 10 },
      { id: "TEAM014", name: "Asia Pacific", lead: "William Lee", members: 8 },
    ],
  },
  {
    id: "DEP005",
    name: "HR",
    head: "Emily Davis",
    employees: 12,
    teams: [
      { id: "TEAM015", name: "Recruitment", lead: "Olivia Garcia", members: 5 },
      { id: "TEAM016", name: "Employee Relations", lead: "Noah Wilson", members: 4 },
      { id: "TEAM017", name: "Training", lead: "Ava Johnson", members: 3 },
    ],
  },
  {
    id: "DEP006",
    name: "Finance",
    head: "David Lee",
    employees: 15,
    teams: [
      { id: "TEAM018", name: "Accounting", lead: "Ethan Brown", members: 6 },
      { id: "TEAM019", name: "Payroll", lead: "Isabella Smith", members: 4 },
      { id: "TEAM020", name: "Financial Planning", lead: "Mason Davis", members: 5 },
    ],
  },
]

export default function OrganizationPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter departments based on search term
  const filteredDepartments = departments.filter(
    (department) =>
      department.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      department.head.toLowerCase().includes(searchTerm.toLowerCase()) ||
      department.teams.some(
        (team) =>
          team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          team.lead.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Organization Structure</h1>
          <p className="text-muted-foreground">View and manage your organization hierarchy.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="flex items-center gap-1">
            <UserPlus className="h-4 w-4" />
            Add Employee
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Departments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{departments.length}</div>
            <p className="text-xs text-muted-foreground">
              <Building2 className="inline h-3 w-3 mr-1" />
              Company structure
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Teams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {departments.reduce((sum, department) => sum + department.teams.length, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              <Users className="inline h-3 w-3 mr-1" />
              Across all departments
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {departments.reduce((sum, department) => sum + department.employees, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              <User className="inline h-3 w-3 mr-1" />
              Active workforce
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="hierarchy">
        <TabsList>
          <TabsTrigger value="hierarchy">Organization Hierarchy</TabsTrigger>
          <TabsTrigger value="chart">Org Chart</TabsTrigger>
        </TabsList>
        <TabsContent value="hierarchy" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Departments &amp; Teams</CardTitle>
              </div>
              <CardDescription>View the organizational structure and hierarchy.</CardDescription>
              <div className="flex items-center gap-2 pt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search departments, teams, or people..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {filteredDepartments.map((department) => (
                  <div key={department.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold">{department.name}</h3>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View department</DropdownMenuItem>
                          <DropdownMenuItem>Edit department</DropdownMenuItem>
                          <DropdownMenuItem>Add team</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Delete department</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>Department Head: {department.head}</span>
                      <span className="mx-2">•</span>
                      <Users className="h-4 w-4" />
                      <span>{department.employees} Employees</span>
                    </div>
                    <div className="ml-6 space-y-2 border-l pl-6">
                      {department.teams.map((team) => (
                        <div key={team.id} className="flex items-center justify-between rounded-md border p-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-primary" />
                              <h4 className="font-medium">{team.name} Team</h4>
                            </div>
                            <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                              <User className="h-3 w-3" />
                              <span>Team Lead: {team.lead}</span>
                              <span className="mx-1">•</span>
                              <Users className="h-3 w-3" />
                              <span>{team.members} Members</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="h-8 gap-1">
                            View Team
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      <Button variant="outline" size="sm" className="ml-2 h-8 gap-1">
                        <Plus className="h-3.5 w-3.5" />
                        Add Team
                      </Button>
                    </div>
                  </div>
                ))}
                {filteredDepartments.length === 0 && (
                  <div className="flex h-[200px] items-center justify-center rounded-md border border-dashed">
                    <div className="text-center">
                      <Building2 className="mx-auto h-10 w-10 text-muted-foreground/60" />
                      <h3 className="mt-2 text-lg font-medium">No departments found</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Try adjusting your search or add a new department.
                      </p>
                      <Button className="mt-4 gap-1">
                        <Plus className="h-4 w-4" />
                        Add Department
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="chart" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Organization Chart</CardTitle>
              <CardDescription>Visual representation of the organization structure.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-[500px] items-center justify-center rounded-md border border-dashed">
                <div className="text-center">
                  <Users className="mx-auto h-10 w-10 text-muted-foreground/60" />
                  <h3 className="mt-2 text-lg font-medium">Organization Chart</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Interactive organization chart will be displayed here.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
