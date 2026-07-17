import type { Notification } from "../../types";

export const notifications: Notification[] = [
  {
    id: "notif-1",
    userId: "user-1",
    type: "deadline",
    message: "Quiz: Network Fundamentals is due in 2 days",
    isRead: false,
    createdAt: "2026-07-15",
  },
  {
    id: "notif-2",
    userId: "user-1",
    type: "deadline",
    message: "Assignment: Policy Brief is overdue",
    isRead: false,
    createdAt: "2026-07-10",
  },
];