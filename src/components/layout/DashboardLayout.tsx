import type { ReactNode } from "react";
import { useAuthStore } from "../../store/authStore";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";

interface DashboardLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function DashboardLayout({ title, subtitle, children }: DashboardLayoutProps) {
  const { role, fullName } = useAuthStore();
  const initials = fullName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex h-screen bg-surface-canvas">
      <Sidebar role={role} />
      <div className="flex flex-1 flex-col overflow-y-auto">
        <Navbar title={title} subtitle={subtitle} userInitials={initials} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}