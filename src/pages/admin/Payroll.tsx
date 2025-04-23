"use client"

import { useState } from "react"
import {
  ArrowUpDown,
  MoreHorizontal,
  Plus,
  Search,
  Filter,
  Calendar,
  DollarSign,
  Download,
  FileText,
  Clock,
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

// Sample payroll data
const payrolls = [
  {
    id: "PAY001",
    period: "April 2023",
    startDate: "2023-04-01",
    endDate: "2023-04-30",
    status: "Processed",
    totalAmount: 125000,
    employees: 45,
    processedDate: "2023-04-28",
  },
  {
    id: "PAY002",
    period: "March 2023",
    startDate: "2023-03-01",
    endDate: "2023-03-31",
    status: "Processed",
    totalAmount: 122500,
    employees: 44,
    processedDate: "2023-03-29",
  },
  {
    id: "PAY003",
    period: "February 2023",
    startDate: "2023-02-01",
    endDate: "2023-02-28",
    status: "Processed",
    totalAmount: 120000,
    employees: 43,
    processedDate: "2023-02-27",
  },
  {
    id: "PAY004",
    period: "January 2023",
    startDate: "2023-01-01",
    endDate: "2023-01-31",
    status: "Processed",
    totalAmount: 118000,
    employees: 42,
    processedDate: "2023-01-28",
  },
  {
    id: "PAY005",
    period: "May 2023",
    startDate: "2023-05-01",
    endDate: "2023-05-31",
    status: "Pending",
    totalAmount: 127500,
    employees: 45,
    processedDate: null,
  },
]

// Sample employee salary data
const employeeSalaries = [
  {
    id: "EMP001",
    name: "John Doe",
    position: "Senior Developer",
    department: "Engineering",
    baseSalary: 8500,
    bonus: 1000,
    deductions: 950,
    netSalary: 8550,
  },
  {
    id: "EMP002",
    name: "Jane Smith",
    position: "UX Designer",
    department: "Design",
    baseSalary: 7200,
    bonus: 800,
    deductions: 820,
    netSalary: 7180,
  },
  {
    id: "EMP003",
    name: "Michael Johnson",
    position: "Marketing Manager",
    department: "Marketing",
    baseSalary: 9000,
    bonus: 1200,
    deductions: 1050,
    netSalary: 9150,
  },
  {
    id: "EMP004",
    name: "Emily Davis",
    position: "HR Specialist",
    department: "HR",
    baseSalary: 6800,
    bonus: 500,
    deductions: 750,
    netSalary: 6550,
  },
  {
    id: "EMP005",
    name: "Robert Wilson",
    position: "Financial Analyst",
    department: "Finance",
    baseSalary: 7500,
    bonus: 900,
    deductions: 850,
    netSalary: 7550,
  },
]

export default function PayrollPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter payrolls based on search term
  const filteredPayrolls = payrolls.filter(
    (payroll) =>
      payroll.period.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payroll.status.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Filter employee salaries based on search term
  const filteredEmployeeSalaries = employeeSalaries.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()),
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
          <h1 className="text-3xl font-bold tracking-tight">Payroll</h1>
          <p className="text-muted-foreground">Manage payroll processing and employee compensation.</p>
        </div>
        <Button className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          Run Payroll
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Payroll (Monthly)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(125000)}</div>
            <p className="text-xs text-muted-foreground">+2.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Salary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(7800)}</div>
            <p className="text-xs text-muted-foreground">+1.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Next Payroll Date</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">May 28, 2023</div>
            <p className="text-xs text-muted-foreground">
              <Clock className="inline h-3 w-3 mr-1" />
              In 7 days
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="payroll-history">
        <TabsList>
          <TabsTrigger value="payroll-history">Payroll History</TabsTrigger>
          <TabsTrigger value="employee-salaries">Employee Salaries</TabsTrigger>
        </TabsList>
        <TabsContent value="payroll-history" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Payroll Cycles</CardTitle>
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
              <CardDescription>View and manage payroll processing history.</CardDescription>
              <div className="flex items-center gap-2 pt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search payroll periods..."
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
                        Period
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Date Range</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Total Amount</TableHead>
                    <TableHead>Employees</TableHead>
                    <TableHead>Processed Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPayrolls.map((payroll) => (
                    <TableRow key={payroll.id}>
                      <TableCell className="font-medium">{payroll.id}</TableCell>
                      <TableCell>{payroll.period}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                          {new Date(payroll.startDate).toLocaleDateString()} -{" "}
                          {new Date(payroll.endDate).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={payroll.status === "Processed" ? "success" : "secondary"}>
                          {payroll.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-3.5 w-3.5 text-muted-foreground" />
                          {formatCurrency(payroll.totalAmount)}
                        </div>
                      </TableCell>
                      <TableCell>{payroll.employees}</TableCell>
                      <TableCell>
                        {payroll.processedDate ? new Date(payroll.processedDate).toLocaleDateString() : "-"}
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
                            <DropdownMenuItem>
                              <FileText className="mr-2 h-4 w-4" />
                              Generate report
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Download slips
                            </DropdownMenuItem>
                            {payroll.status === "Pending" && (
                              <>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Process payroll</DropdownMenuItem>
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
                Showing <strong>{filteredPayrolls.length}</strong> of <strong>{payrolls.length}</strong> payroll cycles
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
        <TabsContent value="employee-salaries" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Employee Salaries</CardTitle>
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
              <CardDescription>View and manage employee compensation details.</CardDescription>
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
                        Name
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Base Salary</TableHead>
                    <TableHead>Bonus</TableHead>
                    <TableHead>Deductions</TableHead>
                    <TableHead>Net Salary</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEmployeeSalaries.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell className="font-medium">{employee.id}</TableCell>
                      <TableCell>{employee.name}</TableCell>
                      <TableCell>{employee.position}</TableCell>
                      <TableCell>{employee.department}</TableCell>
                      <TableCell>{formatCurrency(employee.baseSalary)}</TableCell>
                      <TableCell>{formatCurrency(employee.bonus)}</TableCell>
                      <TableCell>{formatCurrency(employee.deductions)}</TableCell>
                      <TableCell className="font-medium">{formatCurrency(employee.netSalary)}</TableCell>
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
                            <DropdownMenuItem>Edit salary</DropdownMenuItem>
                            <DropdownMenuItem>Salary history</DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Download slip
                            </DropdownMenuItem>
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
                Showing <strong>{filteredEmployeeSalaries.length}</strong> of <strong>{employeeSalaries.length}</strong>{" "}
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
