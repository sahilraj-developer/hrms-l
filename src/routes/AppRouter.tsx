import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "../auth/AuthProvider";
import ProtectedRoute from "../auth/ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";
import EmployeeLayout from "../layouts/EmployeeLayout";
import ClientLayout from "../layouts/ClientLayout";
import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Home from "../pages/client/Home";
import Profile from "../pages/client/Profile";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Reports from "@/pages/admin/Reports";
import Settings from "@/pages/admin/Settings";
import ProductPage from "@/pages/client/ProductPage";
import CartPage from "@/pages/client/CartPage";
import CMS from "@/pages/admin/CMS";
import EmployeeInfoPage from "@/pages/admin/EmployeeInfo";
import EmployeeHiring from "@/pages/admin/EmployeeHiring";
import HealthPage from "@/pages/admin/Health";
import JobHubPage from "@/pages/admin/JobHub";
import LearningPage from "@/pages/admin/Learning";
import LeavesPage from "@/pages/admin/Leaves";
import OrganizationPage from "@/pages/admin/Organisation";
import PayrollPage from "@/pages/admin/Payroll";
import PerformancePage from "@/pages/admin/Performance";
import ProjectsPage from "@/pages/admin/Projects";
import ReimbursementPage from "@/pages/admin/Reimbursement";
import EmployeeDashboard from "@/pages/employee/Dashboard";
import EmployeeLeavesPage from "@/pages/employee/Leaves";
import EmployeePayslipsPage from "@/pages/employee/Payslip";
import EmployeeProfile from "@/pages/employee/Profile";
import EmployeeLearningPage from "@/pages/employee/Learning";
import EmployeeProjectsPage from "@/pages/employee/Projects";
import EmployeeReimbursementPage from "@/pages/employee/Reimbursement";

const AppRouter = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />



          {/* employee */}



          {/* Protected Admin Routes */}
          <Route
            path="/employee/*"
            element={
              // <ProtectedRoute>
              <EmployeeLayout>
                <EmployeeDashboard/>
              </EmployeeLayout>
              // </ProtectedRoute>
            }
          />
          <Route
            path="/employee/profile"
            element={
              // <ProtectedRoute>
              <EmployeeLayout>
                <EmployeeProfile/>
              </EmployeeLayout>
              // </ProtectedRoute>
            }
          />



          <Route
            path="/employee/employee-hiring"
            element={
              // <ProtectedRoute>
              <EmployeeLayout>
                <EmployeeHiring />
              </EmployeeLayout>
              // </ProtectedRoute>
            }
          />


          <Route
            path="/employee/employee-info"
            element={
              // <ProtectedRoute>
              <EmployeeLayout>
                <EmployeeInfoPage />
              </EmployeeLayout>
              // </ProtectedRoute>
            }
          />

          <Route
            path="/employee/health"
            element={
              // <ProtectedRoute>
              <EmployeeLayout>
                <HealthPage />
              </EmployeeLayout>
              // </ProtectedRoute>
            }
          />

          <Route
            path="/employee/job-hub"
            element={
              // <ProtectedRoute>
              <EmployeeLayout>
                <JobHubPage />
              </EmployeeLayout>
              // </ProtectedRoute>
            }
          />

          <Route
            path="/employee/learning"
            element={
              // <ProtectedRoute>
              <EmployeeLayout>
                <EmployeeLearningPage/>
              </EmployeeLayout>
              // </ProtectedRoute>
            }
          />

          <Route
            path="/employee/leaves"
            element={
              // <ProtectedRoute>
              <EmployeeLayout>
                <EmployeeLeavesPage/>
              </EmployeeLayout>
              // </ProtectedRoute>
            }
          />

          <Route
            path="/employee/organisation"
            element={
              // <ProtectedRoute>
              <EmployeeLayout>
                <OrganizationPage />
              </EmployeeLayout>
              // </ProtectedRoute>
            }
          />

          <Route
            path="/employee/payroll"
            element={
              // <ProtectedRoute>
              <EmployeeLayout>
                <PayrollPage />
              </EmployeeLayout>
              // </ProtectedRoute>
            }
          />


           <Route
            path="/employee/payslip"
            element={
              // <ProtectedRoute>
              <EmployeeLayout>
                <EmployeePayslipsPage/>
              </EmployeeLayout>
              // </ProtectedRoute>
            }
          />


          {/* <Route
            path="/employee/performance"
            element={
              // <ProtectedRoute>
              <EmployeeLayout>
                <PerformancePage />
              </EmployeeLayout>
              // </ProtectedRoute>
            }
          /> */}

          <Route
            path="/employee/projects"
            element={
              // <ProtectedRoute>
              <EmployeeLayout>
                <EmployeeProjectsPage/>
              </EmployeeLayout>
              // </ProtectedRoute>
            }
          />



          <Route
            path="/employee/reimbursement"
            element={
              // <ProtectedRoute>
              <EmployeeLayout>
                <EmployeeReimbursementPage/>
              </EmployeeLayout>
              // </ProtectedRoute>
            }
          />



          <Route
            path="/employee/reports"
            element={
              // <ProtectedRoute>
              <EmployeeLayout>
                <Reports />
              </EmployeeLayout>
              // </ProtectedRoute>
            }
          />



          <Route
            path="/employee/settings"
            element={
              // <ProtectedRoute>
              <EmployeeLayout>
                <Settings />
              </EmployeeLayout>
              // </ProtectedRoute>
            }
          />




          {/* employee */}



          {/* admin */}

          {/* Protected Admin Routes */}
          <Route
            path="/admin/*"
            element={
              // <ProtectedRoute>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
              // </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              // <ProtectedRoute>
              <AdminLayout>
                <Users />
              </AdminLayout>
              // </ProtectedRoute>
            }
          />



          <Route
            path="/admin/employee-hiring"
            element={
              // <ProtectedRoute>
              <AdminLayout>
                <EmployeeHiring />
              </AdminLayout>
              // </ProtectedRoute>
            }
          />


          <Route
            path="/admin/employee-info"
            element={
              // <ProtectedRoute>
              <AdminLayout>
                <EmployeeInfoPage />
              </AdminLayout>
              // </ProtectedRoute>
            }
          />

          <Route
            path="/admin/health"
            element={
              // <ProtectedRoute>
              <AdminLayout>
                <HealthPage />
              </AdminLayout>
              // </ProtectedRoute>
            }
          />

          <Route
            path="/admin/job-hub"
            element={
              // <ProtectedRoute>
              <AdminLayout>
                <JobHubPage />
              </AdminLayout>
              // </ProtectedRoute>
            }
          />

          <Route
            path="/admin/learning"
            element={
              // <ProtectedRoute>
              <AdminLayout>
                <LearningPage />
              </AdminLayout>
              // </ProtectedRoute>
            }
          />

          <Route
            path="/admin/leaves"
            element={
              // <ProtectedRoute>
              <AdminLayout>
                <LeavesPage />
              </AdminLayout>
              // </ProtectedRoute>
            }
          />

          <Route
            path="/admin/organisation"
            element={
              // <ProtectedRoute>
              <AdminLayout>
                <OrganizationPage />
              </AdminLayout>
              // </ProtectedRoute>
            }
          />

          <Route
            path="/admin/payroll"
            element={
              // <ProtectedRoute>
              <AdminLayout>
                <PayrollPage />
              </AdminLayout>
              // </ProtectedRoute>
            }
          />


          <Route
            path="/admin/performance"
            element={
              // <ProtectedRoute>
              <AdminLayout>
                <PerformancePage />
              </AdminLayout>
              // </ProtectedRoute>
            }
          />

          <Route
            path="/admin/projects"
            element={
              // <ProtectedRoute>
              <AdminLayout>
                <ProjectsPage />
              </AdminLayout>
              // </ProtectedRoute>
            }
          />



          <Route
            path="/admin/reimbursement"
            element={
              // <ProtectedRoute>
              <AdminLayout>
                <ReimbursementPage />
              </AdminLayout>
              // </ProtectedRoute>
            }
          />



          <Route
            path="/admin/reports"
            element={
              // <ProtectedRoute>
              <AdminLayout>
                <Reports />
              </AdminLayout>
              // </ProtectedRoute>
            }
          />



          <Route
            path="/admin/settings"
            element={
              // <ProtectedRoute>
              <AdminLayout>
                <Settings />
              </AdminLayout>
              // </ProtectedRoute>
            }
          />



          <Route
            path="/admin/cms"
            element={
              // <ProtectedRoute>
              <AdminLayout>
                <CMS />
              </AdminLayout>
              // </ProtectedRoute>
            }
          />


          {/* admin */}



          {/* client */}


          {/* Protected Client Routes */}
          <Route
            path="/client/*"
            element={
              <ProtectedRoute>
                {/* <ClientLayout> */}
                <Home />
                {/* </ClientLayout> */}
              </ProtectedRoute>
            }
          />
          <Route
            path="/client/profile"
            element={
              <ProtectedRoute>
                <ClientLayout>
                  <Profile />
                </ClientLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/client/products"
            element={
              <ProtectedRoute>
                <ClientLayout>
                  <ProductPage />
                </ClientLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/client/cart"
            element={
              <ProtectedRoute>
                <ClientLayout>
                  <CartPage />
                </ClientLayout>
              </ProtectedRoute>
            }
          />


          {/* client */}



          {/* Redirect Root Path */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRouter;
