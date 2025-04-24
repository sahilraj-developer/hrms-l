"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

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
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">My Projects</h1>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Ongoing Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {ongoingProjects.map(project => (
              <div key={project.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <Badge variant="default">{project.status}</Badge>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <p className="text-sm text-muted-foreground">Role: {project.role}</p>
                <p className="text-sm text-muted-foreground">
                  Timeline: {project.startDate} → {project.deadline}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <Progress value={project.progress} />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Completed Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {completedProjects.map(project => (
              <div key={project.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <Badge variant="success">{project.status}</Badge>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <p className="text-sm text-muted-foreground">Role: {project.role}</p>
                <p className="text-sm text-muted-foreground">
                  Completed on: {project.completedDate}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
