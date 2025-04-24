"use client"

import { useState } from "react"
import { Briefcase, Building, Calendar, Edit, Mail, MapPin, Phone, User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EmployeeProfile() {
  // Mock employee data
  const [employee] = useState({
    id: "EMP001",
    name: "John Doe",
    role: "Senior Software Engineer",
    department: "Engineering",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    joinDate: "January 15, 2020",
    manager: "Sarah Johnson",
    avatar: "/placeholder.svg?height=200&width=200",
    skills: ["JavaScript", "React", "Node.js", "TypeScript", "GraphQL", "AWS"],
    bio: "Experienced software engineer with over 8 years of experience in full-stack development. Passionate about creating efficient and scalable web applications.",
    education: [
      {
        degree: "Master of Science in Computer Science",
        institution: "Stanford University",
        year: "2015-2017",
      },
      {
        degree: "Bachelor of Science in Computer Engineering",
        institution: "MIT",
        year: "2011-2015",
      },
    ],
    experience: [
      {
        position: "Senior Software Engineer",
        company: "Current Company",
        duration: "2020 - Present",
        description: "Leading the development of the company's main product, managing a team of 5 developers.",
      },
      {
        position: "Software Engineer",
        company: "Previous Company",
        duration: "2017 - 2020",
        description: "Worked on various web applications using React and Node.js.",
      },
      {
        position: "Junior Developer",
        company: "First Company",
        duration: "2015 - 2017",
        description: "Developed and maintained internal tools and applications.",
      },
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2022",
      },
      {
        name: "Certified Scrum Master",
        issuer: "Scrum Alliance",
        date: "2021",
      },
    ],
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
        <Button variant="outline" size="sm">
          <Edit className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <Avatar className="h-32 w-32 mb-4">
              <AvatarImage src={employee.avatar || "/placeholder.svg"} alt={employee.name} />
              <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold">{employee.name}</h2>
            <p className="text-muted-foreground mb-2">{employee.role}</p>
            <Badge className="mb-4">{employee.department}</Badge>
            
            <div className="w-full space-y-3 mt-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{employee.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{employee.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{employee.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Joined: {employee.joinDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Manager: {employee.manager}</span>
              </div>
            </div>

            <div className="w-full mt-6">
              <h3 className="font-medium mb-2 text-left">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {employee.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{employee.bio}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Professional Information</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="experience">
                <TabsList className="mb-4">
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="certifications">Certifications</TabsTrigger>
                </TabsList>
                
                <TabsContent value="experience" className="space-y-4">
                  {employee.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4 pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className="h-4 w-4 text-primary" />
                        <h3 className="font-medium">{exp.position}</h3>
                      </div>
                      <div className="flex items-center gap-2 mb-1 text-sm">
                        <Building className="h-3 w-3 text-muted-foreground" />
                        <span>{exp.company}</span>
                        <span className="text-muted-foreground">• {exp.duration}</span>
                      </div>
                      <p className="text-sm mt-1">{exp.description}</p>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="education" className="space-y-4">
                  </TabsContent>
                  </Tabs>

                  </CardContent>

                  </Card>
                  </div>
                  </div>
                  </div>

                )
              }
