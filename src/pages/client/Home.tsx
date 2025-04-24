import { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Building2,
  Users,
  BarChart3,
  ArrowRight,
  Calendar,
  BookOpen,
  CreditCard,
  Award,
  Heart,
  CheckCircle2,
  Menu,
  X
} from "lucide-react"
import { Testimonial } from "@/components/testimonial"
import { FeatureCard } from "@/components/feature-card"
import { StatCard } from "@/components/stat-card"
import { Link } from "react-router-dom"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sample company data
  const companies = [
    {
      id: 1,
      name: "TechCorp Solutions",
      employees: 245,
      departments: 8,
      logo: "T",
      testimonial:
        "HRMS Portal has transformed how we manage our workforce. The intuitive interface and comprehensive features have saved us countless hours.",
    },
    {
      id: 2,
      name: "Innovate Industries",
      employees: 178,
      departments: 6,
      logo: "I",
      testimonial:
        "The employee self-service features have greatly reduced the administrative burden on our HR team while improving employee satisfaction.",
    },
    {
      id: 3,
      name: "Global Enterprises",
      employees: 412,
      departments: 12,
      logo: "G",
      testimonial:
        "The analytics and reporting capabilities have given us valuable insights into our workforce, helping us make data-driven decisions.",
    },
  ]

  const stats = [
    { label: "Companies", value: "500+" },
    { label: "Employees Managed", value: "250,000+" },
    { label: "Countries", value: "25+" },
    { label: "Satisfaction", value: "98%" },
  ]

  const features = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Employee Management",
      description: "Centralized employee records with document management and comprehensive profiles.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Leave Management",
      description: "Streamlined leave requests, approvals, and balance tracking for all types of time off.",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      title: "Payroll Processing",
      description: "Automated salary calculations, tax deductions, and seamless payment processing.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Performance Tracking",
      description: "Goal setting, reviews, and continuous feedback to drive employee growth.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Learning & Development",
      description: "Customized training programs and skill development tracking for career growth.",
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Health & Wellness",
      description: "Track health metrics, manage benefits, and promote employee wellbeing.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
  <div className="flex items-center gap-2 font-bold text-xl">

            <Building2 className="h-6 w-6" />
            <span>HRMS Portal</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link to="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
            <Link to="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link to="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
          </nav>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Login Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/employee/dashboard">
              <Button variant="outline">Employee Login</Button>
            </Link>
            <Link to="/admin/dashboard">
              <Button>Admin Login</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="container flex flex-col gap-4 py-4 px-4 sm:px-6">
              <Link 
                to="#features" 
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="#testimonials" 
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                to="#pricing" 
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="#about" 
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex flex-col gap-2">
                <Link to="/employee/dashboard" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">Employee Login</Button>
                </Link>
                <Link to="/admin/dashboard" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full">Admin Login</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground w-fit">
                  All-in-one HR Solution
                </div>
                <div className="space-y-3">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Streamline Your HR Operations
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground text-base sm:text-lg md:text-xl">
                    A comprehensive HRMS solution designed to manage your entire employee lifecycle from hiring to retirement with powerful tools for both HR teams and employees.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link to="#demo">
                    <Button size="lg" className="w-full sm:w-auto gap-1">
                      Request Demo <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="#features">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Explore Features
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-4 sm:p-6 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
                    {[
                      { name: "Job Hub", icon: <Building2 className="h-5 w-5" /> },
                      { name: "Employee Info", icon: <Users className="h-5 w-5" /> },
                      { name: "Payroll", icon: <CreditCard className="h-5 w-5" /> },
                      { name: "Leaves", icon: <Calendar className="h-5 w-5" /> },
                      { name: "Performance", icon: <Award className="h-5 w-5" /> },
                      { name: "Learning", icon: <BookOpen className="h-5 w-5" /> },
                    ].map((feature, i) => (
                      <div
                        key={i}
                        className="flex h-24 sm:h-28 w-full flex-col items-center justify-center rounded-lg bg-background p-3 sm:p-4 shadow-md transition-all hover:shadow-lg hover:-translate-y-1"
                      >
                        <div className="mb-2 rounded-full bg-primary/10 p-2">{feature.icon}</div>
                        <span className="font-medium text-center text-sm sm:text-base">{feature.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 bg-primary/5">
          <div className="container px-4 sm:px-6">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <StatCard key={index} label={stat.label} value={stat.value} />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32" id="features">
          <div className="container px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl">
                  Everything you need to manage your workforce
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-base sm:text-lg md:text-xl">
                  Our HRMS platform provides a comprehensive suite of tools to streamline your HR operations.
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-muted" id="testimonials">
          <div className="container px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl">Trusted by leading companies</h2>
                <p className="max-w-[900px] text-muted-foreground text-base sm:text-lg md:text-xl">
                  See what our clients have to say about our HRMS solution.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
              {companies.map((company) => (
                <Testimonial
                  key={company.id}
                  logo={company.logo}
                  companyName={company.name}
                  employeeCount={company.employees}
                  departmentCount={company.departments}
                  testimonial={company.testimonial}
                />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32">
          <div className="container px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  How It Works
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl">
                  Simple implementation, powerful results
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-base sm:text-lg md:text-xl">
                  Get up and running with our HRMS in just a few simple steps.
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-3 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Setup Your Account</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Create your organization profile and configure your departments, teams, and user roles.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Import Your Data</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Easily import your employee data, or start fresh with our intuitive data entry forms.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Start Managing</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Begin using the platform for your HR operations and invite your employees to access their accounts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground" id="demo">
          <div className="container px-4 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to transform your HR operations?
                </h2>
                <p className="text-primary-foreground/90 text-base sm:text-lg md:text-xl">
                  Schedule a personalized demo to see how our HRMS can help your organization streamline HR processes
                  and improve employee experience.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-1">
                    Request Demo <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Contact Sales
                  </Button>
                </div>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-4 sm:p-6">
                <div className="grid gap-3 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                    <span className="text-sm sm:text-base">Comprehensive HR management tools</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                    <span className="text-sm sm:text-base">Employee self-service portal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                    <span className="text-sm sm:text-base">Advanced analytics and reporting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                    <span className="text-sm sm:text-base">Mobile-friendly interface</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                    <span className="text-sm sm:text-base">Dedicated support team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                    <span className="text-sm sm:text-base">Regular updates and new features</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 bg-muted/50">
  <div className="container px-4 sm:px-6 mx-auto">
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <Building2 className="h-6 w-6" />
                <span>HRMS Portal</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Comprehensive HR management solution for modern businesses.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#features" className="text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="#pricing" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="#testimonials" className="text-muted-foreground hover:text-foreground">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-foreground">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-foreground">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-foreground">
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-foreground">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-foreground">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2023 HRMS Portal. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="#" className="text-muted-foreground hover:text-foreground">
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
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">
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
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">
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
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
 reWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}