interface NavbarProps {
  title: string;
  subtitle?: string;
  userInitials: string;
}

export function Navbar({ title, subtitle, userInitials }: NavbarProps) {
  return (
    <div className="flex items-center justify-between border-b border-surface-divider bg-surface-card px-6 py-4">
      <div>
        <div className="text-lg font-medium text-navy-900">{title}</div>
        {subtitle && <div className="text-sm text-surface-muted">{subtitle}</div>}
      </div>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-lemon-50 text-sm font-medium text-lemon-900">
        {userInitials}
      </div>
    </div>
  );
}