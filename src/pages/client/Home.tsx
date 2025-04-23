import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, BarChart3, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function HomePage() {
  // Sample company data
  const companies = [
    {
      id: 1,
      name: "TechCorp Solutions",
      employees: 245,
      departments: 8,
      logo: "T",
    },
    {
      id: 2,
      name: "Innovate Industries",
      employees: 178,
      departments: 6,
      logo: "I",
    },
    {
      id: 3,
      name: "Global Enterprises",
      employees: 412,
      departments: 12,
      logo: "G",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Building2 className="h-6 w-6" />
            <span>HRMS Portal</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link to="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link to="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link to="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link to="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/admin/dashboard">
              <Button>Admin Login</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Streamline Your HR Operations
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A comprehensive HRMS solution designed to manage your entire employee lifecycle from hiring to
                    retirement.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/admin/dashboard">
                    <Button size="lg" className="gap-1">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="#features">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-6 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    {["Job Hub", "Employee Info", "Payroll", "Leaves", "Performance", "Learning"].map((feature, i) => (
                      <div
                        key={i}
                        className="flex h-24 w-full items-center justify-center rounded-lg bg-background p-4 shadow-sm"
                      >
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" id="features">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to manage your workforce
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our HRMS platform provides a comprehensive suite of tools to streamline your HR operations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-4 md:gap-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Employee Management</h3>
                    <p className="text-sm text-muted-foreground">
                      Manage employee information, documents, and history in one centralized location.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Performance Tracking</h3>
                    <p className="text-sm text-muted-foreground">
                      Set goals, conduct reviews, and track employee performance over time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 md:gap-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Payroll Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      Automate payroll calculations, tax deductions, and payment processing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Learning & Development</h3>
                    <p className="text-sm text-muted-foreground">
                      Create training programs, track progress, and develop employee skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Companies Using Our HRMS</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join these organizations in transforming their HR operations.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8 mt-8">
              {companies.map((company) => (
                <Card key={company.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                        {company.logo}
                      </div>
                      <CardTitle>{company.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 opacity-70" />
                      <span>{company.employees} Employees</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Building2 className="h-4 w-4 opacity-70" />
                      <span>{company.departments} Departments</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full" asChild>
                      <Link to={`/company/${company.id}`}>
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 HRMS Portal. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
