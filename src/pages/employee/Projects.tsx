"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { CalendarDays, Code, Rocket, CheckCircle2 } from "lucide-react"

export default function EmployeeProjectsPage() {
  const ongoingProjects = [
    {
      id: 1,
      name: "HRMS Redesign",
      description: "Complete UI/UX overhaul of the HRMS system.",
      role: "Frontend Developer",
      progress: 60,
      startDate: "2024-01-10",
      deadline: "2024-05-15",
      status: "In Progress",
      techStack: ["React", "Tailwind", "Next.js"],
    },
    {
      id: 2,
      name: "Employee Portal",
      description: "Self-service portal for employees to manage leaves and payroll.",
      role: "Full Stack Developer",
      progress: 35,
      startDate: "2024-02-01",
      deadline: "2024-07-30",
      status: "In Progress",
      techStack: ["Node.js", "MongoDB", "Express", "React"],
    },
  ]

  const completedProjects = [
    {
      id: 3,
      name: "Attendance System",
      description: "Automated biometric attendance system.",
      role: "Backend Developer",
      completedDate: "2023-12-20",
      status: "Completed",
      techStack: ["Node.js", "PostgreSQL"],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-1">My Projects</h1>
        <p className="text-muted-foreground text-sm">
          Track your current and completed project responsibilities.
        </p>
      </div>

      <section>
        <Card className="shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-xl font-semibold text-blue-600">
              <Rocket className="w-5 h-5" />
              Ongoing Projects
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="space-y-6 pt-6">
            {ongoingProjects.map(project => (
              <div key={project.id} className="space-y-3 border-b pb-6 last:border-none last:pb-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{project.name}</h3>
                  <Badge variant="default">{project.status}</Badge>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="text-sm space-y-1">
                  <p>
                    <Code className="inline mr-1 w-4 h-4" />
                    Role: <span className="font-medium">{project.role}</span>
                  </p>
                  <p>
                    <CalendarDays className="inline mr-1 w-4 h-4" />
                    {project.startDate} → {project.deadline}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Progress value={project.progress} className="h-2 mt-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-xl font-semibold text-green-600">
              <CheckCircle2 className="w-5 h-5" />
              Completed Projects
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="space-y-6 pt-6">
            {completedProjects.map(project => (
              <div key={project.id} className="space-y-3 border-b pb-6 last:border-none last:pb-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{project.name}</h3>
                  <Badge variant="success">{project.status}</Badge>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="text-sm space-y-1">
                  <p>
                    <Code className="inline mr-1 w-4 h-4" />
                    Role: <span className="font-medium">{project.role}</span>
                  </p>
                  <p>
                    <CalendarDays className="inline mr-1 w-4 h-4" />
                    Completed on: {project.completedDate}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
