import type { ReactNode } from "react";

interface PublicLayoutProps {
  children: ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface-canvas px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center text-lg font-medium text-navy-900">Cyber-Zeb LMS</div>
        {children}
      </div>
    </div>
  );
}