"use client"

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function EmployeeLearningPage() {
  const assignedCourses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      description: "Learn advanced React patterns and best practices",
      progress: 75,
      dueDate: "2023-05-15",
      category: "Technical",
      duration: "4 hours",
      instructor: "Jane Smith",
      image: "https://raw.githubusercontent.com/ohansemmanuel/advanced-react-patterns-ultrasimplified/refs/heads/master/assets/hero%403x.png",
    },
    {
      id: 2,
      title: "Leadership Fundamentals",
      description: "Essential leadership skills for modern professionals",
      progress: 30,
      dueDate: "2023-05-30",
      category: "Soft Skills",
      duration: "6 hours",
      instructor: "Michael Johnson",
      image: "https://cdn.lynda.com/course/2974166/2974166-1592411933382-16x9.jpg",
    },
    {
      id: 3,
      title: "Cybersecurity Basics",
      description: "Understanding cybersecurity threats and prevention",
      progress: 0,
      dueDate: "2023-06-15",
      category: "Security",
      duration: "3 hours",
      instructor: "Robert Chen",
      image: "https://www.decorahlibrary.org/wp-content/uploads/2025/01/2025-01-Cybersecurity-Basics-Digital-Calendar.png",
    },
  ]

  const completedCourses = [
    {
      id: 4,
      title: "TypeScript Fundamentals",
      description: "Master the basics of TypeScript",
      completedDate: "2023-03-10",
      category: "Technical",
      duration: "5 hours",
      instructor: "Sarah Williams",
      rating: 4.8,
      image: "https://cbsedu.blob.core.windows.net/course-video-covers/course-video-covers-4b152677-ff2d-4ad7-88c4-97b735a3b96c.jpg",
    },
    {
      id: 5,
      title: "Effective Communication",
      description: "Improve your communication skills in the workplace",
      completedDate: "2023-02-15",
      category: "Soft Skills",
      duration: "4 hours",
      instructor: "David Brown",
      rating: 4.5,
      image: "https://yotelecom.co.uk/wp-content/uploads/2023/04/the-importance-of-effective-communication-in-business-1024x576.webp",
    },
  ]

  const recommendedCourses = [
    {
      id: 6,
      title: "Cloud Architecture",
      description: "Design scalable and resilient cloud solutions",
      category: "Technical",
      duration: "8 hours",
      instructor: "Alex Johnson",
      rating: 4.9,
      image: "https://www.gologica.com/images/masterprogram/videothumb/aws-cloud-architect-master-program-thumbnail.jpg",
    },
    {
      id: 7,
      title: "Project Management",
      description: "Learn to manage projects effectively",
      category: "Management",
      duration: "10 hours",
      instructor: "Emily Davis",
      rating: 4.7,
      image: "https://emeritus.org/in/wp-content/uploads/sites/3/2022/03/What-is-project-management-Meaning-and-Definition-of-Project-Management-1-768x458.jpg.optimal.jpg",
    },
    {
      id: 8,
      title: "Data Visualization",
      description: "Create effective data visualizations",
      category: "Data",
      duration: "6 hours",
      instructor: "Mark Wilson",
      rating: 4.6,
      image: "https://itchronicles.com/wp-content/uploads/2023/03/Data-Visualization-1024x492.jpg",
    },
  ]

  const renderCourseCard = (course: { id: any; title: any; description: any; progress?: any; dueDate?: any; category: any; duration: any; instructor: any; image: any; completedDate?: any; rating?: any }, type: string) => (
    <Card key={course.id} className="transition-shadow hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-primary/90">{course.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <img src={course.image} alt={course.title} width={400} height={200} className="rounded-lg" />
          <p className="text-sm text-muted-foreground">{course.description}</p>
          <div className="flex gap-2 flex-wrap">
            <Badge>{course.category}</Badge>
            <Badge variant="secondary">Instructor: {course.instructor}</Badge>
            <Badge variant="secondary">Duration: {course.duration}</Badge>
            {type === "assigned" && (
              <>
                <Badge variant="outline">Due: {course.dueDate}</Badge>
                <div className="w-full">
                  <p className="text-xs text-muted-foreground mb-1">Progress: {course.progress}%</p>
                  <Progress value={course.progress} />
                </div>
              </>
            )}
            {type === "completed" && (
              <>
                <Badge variant="outline">Completed: {course.completedDate}</Badge>
                <Badge variant="secondary">Rating: {course.rating} ⭐</Badge>
              </>
            )}
            {type === "recommended" && (
              <>
                <Badge variant="secondary">Rating: {course.rating} ⭐</Badge>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-4xl font-bold tracking-tight text-primary">My Learning Dashboard</h1>

      <Tabs defaultValue="assigned">
        <TabsList className="mb-6">
          <TabsTrigger value="assigned">Assigned Courses</TabsTrigger>
          <TabsTrigger value="completed">Completed Courses</TabsTrigger>
          <TabsTrigger value="recommended">Recommended Courses</TabsTrigger>
        </TabsList>

        <TabsContent value="assigned" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {assignedCourses.map(course => renderCourseCard(course, "assigned"))}
        </TabsContent>

        <TabsContent value="completed" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {completedCourses.map(course => renderCourseCard(course, "completed"))}
        </TabsContent>

        <TabsContent value="recommended" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recommendedCourses.map(course => renderCourseCard(course, "recommended"))}
        </TabsContent>
      </Tabs>

      <div className="flex items-center justify-center bg-muted/20 p-6">
        <div className="bg-muted/40 p-6 w-full max-w-2xl rounded-xl space-y-6">
          <h2 className="text-2xl font-semibold text-center">Request a New Course</h2>
          <p className="text-sm text-muted-foreground text-center">
            Suggest a course you'd like to see added to your learning path.
          </p>
          <form className="grid gap-6">
            <div className="col-span-2">
              <label className="block text-sm font-medium">Name</label>
              <Input placeholder="Enter your name" className="mt-1" />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium">Purpose</label>
              <Textarea placeholder="Why do you need this course?" className="mt-1" />
            </div>
            <div>
              <label className="block text-sm font-medium">Reference</label>
              <Input placeholder="Reference material or course link" className="mt-1" />
            </div>
            <div>
              <label className="block text-sm font-medium">Department</label>
              <Input placeholder="Your department" className="mt-1" />
            </div>
            <div className="col-span-2 flex justify-center">
              <Button type="submit" className="w-full max-w-xs mt-4">Submit Request</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
