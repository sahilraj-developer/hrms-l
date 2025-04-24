import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowDownToLine, Calendar, CreditCard, DollarSign, Eye, FileText, Printer, Search } from "lucide-react"
import { format } from "date-fns"

export default function EmployeePayslipsPage() {
  // Sample payslip data
  const payslips = [
    {
      id: "PS-2023-04",
      period: "April 2023",
      date: "2023-04-30",
      netPay: 4850.75,
      grossPay: 6000.0,
      deductions: 1149.25,
      status: "Paid",
    },
    {
      id: "PS-2023-03",
      period: "March 2023",
      date: "2023-03-31",
      netPay: 4850.75,
      grossPay: 6000.0,
      deductions: 1149.25,
      status: "Paid",
    },
    {
      id: "PS-2023-02",
      period: "February 2023",
      date: "2023-02-28",
      netPay: 4850.75,
      grossPay: 6000.0,
      deductions: 1149.25,
      status: "Paid",
    },
    {
      id: "PS-2023-01",
      period: "January 2023",
      date: "2023-01-31",
      netPay: 4850.75,
      grossPay: 6000.0,
      deductions: 1149.25,
      status: "Paid",
    },
    {
      id: "PS-2022-12",
      period: "December 2022",
      date: "2022-12-31",
      netPay: 5350.75,
      grossPay: 7000.0,
      deductions: 1649.25,
      status: "Paid",
    },
    {
      id: "PS-2022-11",
      period: "November 2022",
      date: "2022-11-30",
      netPay: 4850.75,
      grossPay: 6000.0,
      deductions: 1149.25,
      status: "Paid",
    },
  ]

  const currentPayslip = payslips[0]

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">My Payslips</h2>
          <div className="flex items-center gap-2">
            <Select defaultValue="2023">
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Year-to-Date Earnings</CardTitle>
              <CardDescription>Total earnings in 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹29,104.50</div>
              <p className="text-xs text-muted-foreground">From January 1, 2023 to present</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Year-to-Date Taxes</CardTitle>
              <CardDescription>Total taxes paid in 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹6,895.50</div>
              <p className="text-xs text-muted-foreground">Federal, State, and Local taxes</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Latest Payslip</CardTitle>
              <CardDescription>Most recent payment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{currentPayslip.netPay.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">
                {currentPayslip.period} • Paid on {format(new Date(currentPayslip.date), "MMM d, yyyy")}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          <Card className="col-span-7 md:col-span-4">
            <CardHeader>
              <CardTitle>Payslip History</CardTitle>
              <CardDescription>View and download your past payslips</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {payslips.map((payslip) => (
                  <div key={payslip.id} className="flex flex-col space-y-2 rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{payslip.period} Payslip</span>
                      </div>
                      <Badge variant="outline">{payslip.status}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Paid on {format(new Date(payslip.date), "MMM d, yyyy")}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Gross Pay:</span>
                        <p className="font-medium">₹{payslip.grossPay.toFixed(2)}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Deductions:</span>
                        <p className="font-medium">₹{payslip.deductions.toFixed(2)}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Net Pay:</span>
                        <p className="font-medium">₹{payslip.netPay.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Printer className="mr-2 h-4 w-4" />
                        Print
                      </Button>
                      <Button size="sm">
                        <ArrowDownToLine className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Load More
              </Button>
            </CardFooter>
          </Card>
          <Card className="col-span-7 md:col-span-3">
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
              <CardDescription>Your payment method and schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium mb-2">Payment Method</h4>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Direct Deposit</p>
                      <p className="text-sm text-muted-foreground">Bank of America ****6789</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium mb-2">Payment Schedule</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Frequency:</span>
                      <span className="font-medium">Monthly</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Pay Day:</span>
                      <span className="font-medium">Last day of month</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Next Payment:</span>
                      <span className="font-medium">May 31, 2023</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium mb-2">Year-to-Date Summary</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Gross Earnings:</span>
                      <span className="font-medium">₹36,000.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Total Taxes:</span>
                      <span className="font-medium">₹6,895.50</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Net Pay:</span>
                      <span className="font-medium">₹29,104.50</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <DollarSign className="mr-2 h-4 w-4" />
                Tax Documents
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
