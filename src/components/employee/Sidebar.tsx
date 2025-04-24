"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
// import { Menu, X, LogOut } from "lucide-react";


import {
  Building2,
  Briefcase,
  Users,
  DollarSign,
  GraduationCap,
  Calendar,
  BarChart3,
  Receipt,
  FolderKanban,
  Network,
  Activity,
  Settings,
  Menu,
  LogOut,
  User,
  X
} from "lucide-react"


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);


  

  return (
    <>
      {/* Sidebar Toggle Button (Mobile) */}
      <Button
        className="fixed top-4 left-4 z-50 md:hidden"
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Sidebar Container */}
      <aside
        className={`fixed md:relative top-0 left-0 h-full w-64 bg-gray-900 text-white p-6 
          shadow-lg transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Employee Panel</h2>
          {/* Close Button (Mobile) */}
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="space-y-3">
          {[
            { name: "Dashboard", path: "/employee", icon: <Building2 className="h-5 w-5" /> },
            { name: "Profile", path: "/employee/profile" ,icon: <Receipt className="h-5 w-5" />, },
            // { name: "Employee Hiring", path: "/employee/employee-hiring", icon: <Users className="h-5 w-5" />, },
            // { name: "Employee Info", path: "/employee/employee-info",icon: <User className="h-5 w-5" />, },
            // { name: "Health", path: "/employee/health" ,icon: <Activity className="h-5 w-5" />,},
            // { name: "Job Hub", path: "/employee/job-hub", icon: <Briefcase className="h-5 w-5" /> },
            { name: "Learning", path: "/employee/learning",icon: <GraduationCap className="h-5 w-5" />, },
            { name: "Leaves", path: "/employee/leaves",icon: <Calendar className="h-5 w-5" />, },
            // { name: "Organisation", path: "/employee/organisation", icon: <Network className="h-5 w-5" />, },
            { name: "Payslip", path: "/employee/payslip",icon: <DollarSign className="h-5 w-5" />, },
            // { name: "Payroll", path: "/employee/payroll",icon: <DollarSign className="h-5 w-5" />, },
            // { name: "Performance", path: "/employee/performance",icon: <BarChart3 className="h-5 w-5" />, },
            { name: "Projects", path: "/employee/projects" , icon: <FolderKanban className="h-5 w-5" />,},
            { name: "Reimbursement", path: "/employee/reimbursement" ,icon: <Receipt className="h-5 w-5" />,},

            // { name: "Reports", path: "/admin/reports" },
            { name: "Settings", path: "/employee/settings" ,icon: <Settings className="h-5 w-5" />,},
            // { name: "CMS", path: "/admin/cms" },
            
          ].map((item) => (
            
            <Link
      key={item.path}
      to={item.path}
      className="flex items-center gap-3 p-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition"
    >
      <span className="text-lg">{item.icon}</span>
      <span>{item.name}</span>
    </Link>
          ))}
        </nav>

        {/* Logout Button (Fixed at Bottom) */}
        <div className="absolute bottom-6 left-6 right-6">
          <Button
            variant="destructive"
            className="w-full flex items-center justify-center gap-2"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Overlay for Mobile (Click to Close) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
