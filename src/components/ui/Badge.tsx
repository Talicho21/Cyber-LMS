export type BadgeStatus =
  | "enrolled"
  | "inProgress"
  | "completed"
  | "certified"
  | "new"
  | "pending"
  | "overdue";

const badgeStyles: Record<BadgeStatus, { bg: string; text: string; label: string }> = {
  enrolled: { bg: "#A8D400", text: "#1B2340", label: "Enrolled" },
  inProgress: { bg: "#F4FBCC", text: "#7A9C00", label: "In progress" },
  completed: { bg: "#1B2340", text: "#A8D400", label: "Completed" },
  certified: { bg: "#2A3560", text: "#EEF0F7", label: "Certified" },
  new: { bg: "#FFFFFF", text: "#1976D2", label: "New" },
  pending: { bg: "#FFFFFF", text: "#FFC107", label: "Pending" },
  overdue: { bg: "#FFFFFF", text: "#E53935", label: "Overdue" },
};

interface BadgeProps {
  status: BadgeStatus;
}

export function Badge({ status }: BadgeProps) {
  const { bg, text, label } = badgeStyles[status];
  return (
    <span
      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium"
      style={{ backgroundColor: bg, color: text }}
    >
      {label}
    </span>
  );
}