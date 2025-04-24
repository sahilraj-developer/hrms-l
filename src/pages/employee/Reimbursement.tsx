"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function EmployeeReimbursementPage() {
  const [reimbursements, setReimbursements] = useState([
    {
      id: 1,
      type: "Travel",
      amount: 2500,
      status: "Approved",
      dateSubmitted: "2024-04-01",
      dateProcessed: "2024-04-05",
      billFile: null,
      billUrl: null,
    },
    {
      id: 2,
      type: "Food",
      amount: 450,
      status: "Pending",
      dateSubmitted: "2024-04-10",
      billFile: null,
      billUrl: null,
    },
    {
      id: 3,
      type: "Accommodation",
      amount: 1200,
      status: "Rejected",
      dateSubmitted: "2024-03-22",
      dateProcessed: "2024-03-25",
      billFile: null,
      billUrl: null,
    },
  ])

  const [newType, setNewType] = useState("")
  const [newAmount, setNewAmount] = useState("")
  const [newFile, setNewFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [previewType, setPreviewType] = useState(null)

  const statusBadge = (status:any) => {
    switch (status) {
      case "Approved":
        return <Badge variant="success">Approved</Badge>
      case "Pending":
        return <Badge variant="default">Pending</Badge>
      case "Rejected":
        return <Badge variant="destructive">Rejected</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  const handleAddReimbursement = () => {
    if (!newType || !newAmount) return

    const reader = newFile ? URL.createObjectURL(newFile) : null

    const newReimbursement:any = {
      id: reimbursements.length + 1,
      type: newType,
      amount: parseFloat(newAmount),
      status: "Pending",
      dateSubmitted: new Date().toISOString().split("T")[0],
      billFile: newFile,
      billUrl: reader,
    }

    setReimbursements([...reimbursements, newReimbursement])
    setNewType("")
    setNewAmount("")
    setNewFile(null)
  }

  const renderBillPreview = (billFile:any, billUrl:any) => {
    if (!billFile || !billUrl) return "—"
    const fileType = billFile.type

    if (fileType.startsWith("image/")) {
      return (
        <img
          src={billUrl}
          alt="Bill"
          className="w-16 h-16 object-cover rounded cursor-pointer"
          onClick={() => {
            setPreviewUrl(billUrl)
            setPreviewType("image")
          }}
        />
      )
    }

    if (fileType === "application/pdf") {
      return (
        <a
          href={billUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View PDF
        </a>
      )
    }

    return billFile.name
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">My Reimbursements</h1>
      </div>

      {/* New Submission Form */}
      <Card>
        <CardHeader>
          <CardTitle>Submit New Request</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label>Type</Label>
              <Input
                value={newType}
                onChange={(e) => setNewType(e.target.value)}
                placeholder="Travel, Food, etc."
              />
            </div>
            <div>
              <Label>Amount</Label>
              <Input
                type="number"
                value={newAmount}
                onChange={(e) => setNewAmount(e.target.value)}
                placeholder="₹"
              />
            </div>
            <div>
              <Label>Bill Image / PDF</Label>
              <Input
                type="file"
                accept="image/*,.pdf"
                onChange={(e:any) => setNewFile(e.target.files[0])}
              />
            </div>
          </div>
          <Button onClick={handleAddReimbursement}>Submit</Button>
        </CardContent>
      </Card>

      {/* Reimbursement Table */}
      <Card>
        <CardHeader>
          <CardTitle>Reimbursement History</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount (₹)</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date Submitted</TableHead>
                <TableHead>Date Processed</TableHead>
                <TableHead>Bill</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reimbursements.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>₹{item.amount}</TableCell>
                  <TableCell>{statusBadge(item.status)}</TableCell>
                  <TableCell>{item.dateSubmitted}</TableCell>
                  <TableCell>{item.dateProcessed || "—"}</TableCell>
                  <TableCell>{renderBillPreview(item.billFile, item.billUrl)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Image Preview Dialog */}
      {previewUrl && (
        <Dialog open={!!previewUrl} onOpenChange={() => setPreviewUrl(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Bill Preview</DialogTitle>
            </DialogHeader>
            {previewType === "image" && (
              <img src={previewUrl} alt="Preview" className="w-full h-auto rounded" />
            )}
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
