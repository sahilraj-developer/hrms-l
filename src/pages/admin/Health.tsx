"use client"

import { useState } from "react"
import {
  AlertTriangle,
  ArrowUpDown,
  CheckCircle,
  Clock,
  Database,
  Globe,
  HardDrive,
  MoreHorizontal,
  RefreshCw,
  Search,
  Server,
  Settings,
  Zap,
} from "lucide-react"
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
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample system health data
const systemComponents = [
  {
    id: "SYS001",
    name: "Authentication Service",
    type: "API",
    status: "Operational",
    uptime: "99.98%",
    lastIncident: "2023-03-15",
    responseTime: 120,
  },
  {
    id: "SYS002",
    name: "Database Cluster",
    type: "Database",
    status: "Operational",
    uptime: "99.95%",
    lastIncident: "2023-04-02",
    responseTime: 85,
  },
  {
    id: "SYS003",
    name: "File Storage",
    type: "Storage",
    status: "Degraded",
    uptime: "98.75%",
    lastIncident: "2023-05-10",
    responseTime: 250,
    issue: "High latency in US-West region",
  },
  {
    id: "SYS004",
    name: "Email Service",
    type: "Communication",
    status: "Operational",
    uptime: "99.90%",
    lastIncident: "2023-02-28",
    responseTime: 180,
  },
  {
    id: "SYS005",
    name: "Payment Processing",
    type: "API",
    status: "Operational",
    uptime: "99.99%",
    lastIncident: "2023-01-15",
    responseTime: 150,
  },
  {
    id: "SYS006",
    name: "Search Engine",
    type: "Service",
    status: "Maintenance",
    uptime: "95.50%",
    lastIncident: "2023-05-18",
    responseTime: 320,
    issue: "Scheduled maintenance in progress",
  },
]

// Sample recent incidents
const recentIncidents = [
  {
    id: "INC001",
    component: "File Storage",
    type: "Degraded Performance",
    startTime: "2023-05-10T14:30:00",
    endTime: "2023-05-10T16:45:00",
    duration: "2h 15m",
    status: "Resolved",
    impact: "Medium",
    description: "High latency in US-West region due to network congestion",
    resolution: "Rerouted traffic and increased capacity",
  },
  {
    id: "INC002",
    component: "Database Cluster",
    type: "Outage",
    startTime: "2023-04-02T08:15:00",
    endTime: "2023-04-02T09:30:00",
    duration: "1h 15m",
    status: "Resolved",
    impact: "High",
    description: "Database cluster unavailable due to storage failure",
    resolution: "Failover to backup cluster and replaced faulty hardware",
  },
  {
    id: "INC003",
    component: "Search Engine",
    type: "Maintenance",
    startTime: "2023-05-18T22:00:00",
    endTime: null,
    duration: "Ongoing",
    status: "In Progress",
    impact: "Low",
    description: "Scheduled maintenance for search index optimization",
    resolution: null,
  },
]

// Sample performance metrics
const performanceMetrics = [
  { id: "MET001", name: "CPU Usage", value: 42, unit: "%", trend: "stable" },
  { id: "MET002", name: "Memory Usage", value: 68, unit: "%", trend: "increasing" },
  { id: "MET003", name: "Disk Space", value: 75, unit: "%", trend: "increasing" },
  { id: "MET004", name: "Network Bandwidth", value: 35, unit: "%", trend: "stable" },
  { id: "MET005", name: "API Response Time", value: 145, unit: "ms", trend: "decreasing" },
  { id: "MET006", name: "Active Users", value: 1250, unit: "users", trend: "increasing" },
]

export default function HealthPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Filter system components based on search term
  const filteredComponents = systemComponents.filter(
    (component) =>
      component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      component.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      component.status.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleRefresh = () => {
    setIsRefreshing(true)
    // Simulate refresh delay
    setTimeout(() => {
      setIsRefreshing(false)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Application Health</h1>
          <p className="text-muted-foreground">Monitor system health and performance.</p>
        </div>
        <Button variant="outline" onClick={handleRefresh} disabled={isRefreshing} className="flex items-center gap-1">
          <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
          {isRefreshing ? "Refreshing..." : "Refresh"}
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center gap-2">
              {systemComponents.filter((comp) => comp.status === "Operational").length === systemComponents.length ? (
                <>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  All Systems Operational
                </>
              ) : (
                <>
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Partial System Outage
                </>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              {systemComponents.filter((comp) => comp.status === "Operational").length} of {systemComponents.length}{" "}
              components operational
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(systemComponents.reduce((sum, comp) => sum + comp.responseTime, 0) / systemComponents.length)}{" "}
              ms
            </div>
            <p className="text-xs text-muted-foreground">Across all services</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Uptime</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.85%</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="components">
        <TabsList>
          <TabsTrigger value="components">System Components</TabsTrigger>
          <TabsTrigger value="incidents">Incidents</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>
        <TabsContent value="components" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>System Components</CardTitle>
              </div>
              <CardDescription>Monitor the status of all system components.</CardDescription>
              <div className="flex items-center gap-2 pt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search components..."
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
                        Component Name
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Uptime</TableHead>
                    <TableHead>Response Time</TableHead>
                    <TableHead>Last Incident</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredComponents.map((component) => (
                    <TableRow key={component.id}>
                      <TableCell className="font-medium">{component.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {component.type === "API" ? (
                            <Globe className="h-4 w-4 text-primary" />
                          ) : component.type === "Database" ? (
                            <Database className="h-4 w-4 text-primary" />
                          ) : component.type === "Storage" ? (
                            <HardDrive className="h-4 w-4 text-primary" />
                          ) : component.type === "Service" ? (
                            <Server className="h-4 w-4 text-primary" />
                          ) : (
                            <Settings className="h-4 w-4 text-primary" />
                          )}
                          {component.name}
                        </div>
                        {component.issue && <div className="text-xs text-muted-foreground mt-1">{component.issue}</div>}
                      </TableCell>
                      <TableCell>{component.type}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            component.status === "Operational"
                              ? "success"
                              : component.status === "Degraded"
                                ? "warning"
                                : "secondary"
                          }
                          className="flex w-fit items-center gap-1"
                        >
                          {component.status === "Operational" ? (
                            <CheckCircle className="h-3 w-3" />
                          ) : component.status === "Degraded" ? (
                            <AlertTriangle className="h-3 w-3" />
                          ) : (
                            <Clock className="h-3 w-3" />
                          )}
                          {component.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{component.uptime}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Zap className="h-3.5 w-3.5 text-muted-foreground" />
                          {component.responseTime} ms
                        </div>
                      </TableCell>
                      <TableCell>
                        {component.lastIncident ? new Date(component.lastIncident).toLocaleDateString() : "N/A"}
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
                            <DropdownMenuItem>View metrics</DropdownMenuItem>
                            <DropdownMenuItem>View logs</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Run diagnostics</DropdownMenuItem>
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
        <TabsContent value="incidents" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Recent Incidents</CardTitle>
              </div>
              <CardDescription>View and manage system incidents.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1 cursor-pointer">
                        Component
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Start Time</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Impact</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentIncidents.map((incident) => (
                    <TableRow key={incident.id}>
                      <TableCell className="font-medium">{incident.id}</TableCell>
                      <TableCell>{incident.component}</TableCell>
                      <TableCell>{incident.type}</TableCell>
                      <TableCell>{new Date(incident.startTime).toLocaleString()}</TableCell>
                      <TableCell>{incident.duration}</TableCell>
                      <TableCell>
                        <Badge
                          variant={incident.status === "Resolved" ? "success" : "warning"}
                          className="flex w-fit items-center gap-1"
                        >
                          {incident.status === "Resolved" ? (
                            <CheckCircle className="h-3 w-3" />
                          ) : (
                            <Clock className="h-3 w-3" />
                          )}
                          {incident.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            incident.impact === "High"
                              ? "destructive"
                              : incident.impact === "Medium"
                                ? "warning"
                                : "secondary"
                          }
                        >
                          {incident.impact}
                        </Badge>
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
                            <DropdownMenuItem>View timeline</DropdownMenuItem>
                            {incident.status !== "Resolved" && (
                              <>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Update status</DropdownMenuItem>
                                <DropdownMenuItem className="text-green-600">
                                  <CheckCircle className="mr-2 h-4 w-4" />
                                  Mark as resolved
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
          </Card>
        </TabsContent>
        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Performance Metrics</CardTitle>
              </div>
              <CardDescription>Monitor system performance metrics.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {performanceMetrics.map((metric) => (
                  <Card key={metric.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">{metric.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="text-2xl font-bold">
                        {metric.value}
                        {metric.unit}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span
                          className={
                            metric.trend === "increasing"
                              ? "text-green-500"
                              : metric.trend === "decreasing"
                                ? "text-red-500"
                                : "text-amber-500"
                          }
                        >
                          {metric.trend === "increasing" ? "↑" : metric.trend === "decreasing" ? "↓" : "→"}
                        </span>
                        <span>{metric.trend}</span>
                      </div>
                      {(metric.name === "CPU Usage" ||
                        metric.name === "Memory Usage" ||
                        metric.name === "Disk Space") && <Progress value={metric.value} className="h-2 mt-2" />}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
