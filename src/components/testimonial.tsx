import { Building2, Users } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

interface TestimonialProps {
  logo: string
  companyName: string
  employeeCount: number
  departmentCount: number
  testimonial: string
}

export function Testimonial({ logo, companyName, employeeCount, departmentCount, testimonial }: TestimonialProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
            {logo}
          </div>
          <CardTitle>{companyName}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <blockquote className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground">
          "{testimonial}"
        </blockquote>
        <div className="grid gap-2 mt-4">
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 opacity-70" />
            <span>{employeeCount} Employees</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Building2 className="h-4 w-4 opacity-70" />
            <span>{departmentCount} Departments</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full" asChild>
          <Link to={`/company/${companyName.toLowerCase().replace(/\s+/g, "-")}`}>
            View Case Study <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
