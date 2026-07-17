import type { Enrollment } from "../../types";

export const enrollments: Enrollment[] = [
  { id: "enr-1", userId: "user-1", courseId: "course-1", enrolledAt: "2026-05-01", completionPct: 64 },
  { id: "enr-2", userId: "user-1", courseId: "course-2", enrolledAt: "2026-05-10", completionPct: 30 },
  { id: "enr-3", userId: "user-1", courseId: "course-3", enrolledAt: "2026-04-01", completionPct: 100 },
];