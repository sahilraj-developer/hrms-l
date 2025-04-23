import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "../auth/AuthProvider";
import ProtectedRoute from "../auth/ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";
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

const AppRouter = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

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
                  <EmployeeHiring/>
                </AdminLayout>
              // </ProtectedRoute>
            }
          />


           <Route
            path="/admin/employee-info"
            element={
              // <ProtectedRoute>
                <AdminLayout>
                  <EmployeeInfoPage/>
                </AdminLayout>
              // </ProtectedRoute>
            }
          />

<Route
            path="/admin/health"
            element={
              // <ProtectedRoute>
                <AdminLayout>
                  <HealthPage/>
                </AdminLayout>
              // </ProtectedRoute>
            }
          />

<Route
            path="/admin/job-hub"
            element={
              // <ProtectedRoute>
                <AdminLayout>
                  <JobHubPage/>
                </AdminLayout>
              // </ProtectedRoute>
            }
          />

<Route
            path="/admin/learning"
            element={
              // <ProtectedRoute>
                <AdminLayout>
                  <LearningPage/>
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


          {/* Protected Client Routes */}
          <Route
            path="/client/*"
            element={
              <ProtectedRoute>
                <ClientLayout>
                  <Home />
                </ClientLayout>
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



          {/* Redirect Root Path */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRouter;
