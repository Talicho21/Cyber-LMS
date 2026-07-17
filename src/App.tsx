import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { StudentDashboardPage } from "./pages/student/StudentDashboardPage";
import { CourseBrowsePage } from "./pages/student/CourseBrowsePage";
import { InstructorDashboardPage } from "./pages/instructor/InstructorDashboardPage";
import { CourseBuilderPage } from "./pages/instructor/CourseBuilderPage";
import { LoginPage } from "./pages/public/LoginPage";
import { RegisterPage } from "./pages/public/RegisterPage";
import { useAuthStore } from "./store/authStore";
import type { UserRole } from "./types";

const roles: UserRole[] = ["student", "instructor", "institution_admin"];

function RoleSwitcher() {
  const { role, setRole } = useAuthStore();
  return (
    <div className="mb-6 flex gap-2">
      {roles.map((r) => (
        <button
          key={r}
          onClick={() => setRole(r)}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium ${
            role === r ? "bg-navy-900 text-lemon-500" : "bg-surface-card text-surface-muted border border-navy-200"
          }`}
        >
          {r}
        </button>
      ))}
    </div>
  );
}

function RequireAuth({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <DashboardLayout title="Welcome back" subtitle="Here is your learning progress">
              <RoleSwitcher />
              <StudentDashboardPage />
            </DashboardLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/courses"
        element={
          <RequireAuth>
            <DashboardLayout title="Browse courses" subtitle="Find your next course">
              <RoleSwitcher />
              <CourseBrowsePage />
            </DashboardLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/instructor/dashboard"
        element={
          <RequireAuth>
            <DashboardLayout title="Instructor dashboard" subtitle="Manage your courses">
              <RoleSwitcher />
              <InstructorDashboardPage />
            </DashboardLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/instructor/courses/new"
        element={
          <RequireAuth>
            <DashboardLayout title="Course builder" subtitle="Create a new course">
              <RoleSwitcher />
              <CourseBuilderPage />
            </DashboardLayout>
          </RequireAuth>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;