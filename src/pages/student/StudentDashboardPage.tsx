import { useCourses } from "../../lib/queries/useCourses";
import { useEnrollments } from "../../lib/queries/useEnrollments";
import { useNotifications } from "../../lib/queries/useNotifications";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { ProgressBar } from "../../components/ui/ProgressBar";
import type { BadgeStatus } from "../../components/ui/Badge";

const CURRENT_USER_ID = "user-1";

function badgeForNotification(message: string): BadgeStatus {
  return message.toLowerCase().includes("overdue") ? "overdue" : "pending";
}

export function StudentDashboardPage() {
  const { data: courses, isLoading: coursesLoading } = useCourses();
  const { data: enrollments, isLoading: enrollmentsLoading } = useEnrollments(CURRENT_USER_ID);
  const { data: notifications, isLoading: notificationsLoading } = useNotifications(CURRENT_USER_ID);

  if (coursesLoading || enrollmentsLoading || notificationsLoading) {
    return <div className="text-sm text-surface-muted">Loading dashboard…</div>;
  }

  const enrolledCount = enrollments?.length ?? 0;
  const completedCount = enrollments?.filter((e) => e.completionPct === 100).length ?? 0;
  const inProgress = enrollments?.filter((e) => e.completionPct < 100) ?? [];
  const courseTitle = (courseId: string) => courses?.find((c) => c.id === courseId)?.title ?? "Untitled course";

  return (
    <div>
      <div className="mb-6 grid grid-cols-4 gap-3">
        <Card>
          <div className="text-xs text-surface-muted">Enrolled courses</div>
          <div className="text-2xl font-medium text-navy-900">{enrolledCount}</div>
        </Card>
        <Card>
          <div className="text-xs text-surface-muted">Completed</div>
          <div className="text-2xl font-medium text-navy-900">{completedCount}</div>
        </Card>
        <Card>
          <div className="text-xs text-surface-muted">In progress</div>
          <div className="text-2xl font-medium text-navy-900">{inProgress.length}</div>
        </Card>
        <Card>
          <div className="text-xs text-surface-muted">Notifications</div>
          <div className="text-2xl font-medium text-navy-900">{notifications?.length ?? 0}</div>
        </Card>
      </div>

      <div className="mb-3 text-sm font-medium text-navy-700">Continue learning</div>
      <div className="mb-6 grid grid-cols-2 gap-3">
        {inProgress.map((enrollment) => (
          <Card key={enrollment.id}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-navy-900">{courseTitle(enrollment.courseId)}</span>
              <Badge status="inProgress" />
            </div>
            <ProgressBar percent={enrollment.completionPct} label={`${enrollment.completionPct}% complete`} />
          </Card>
        ))}
      </div>

      <div className="mb-3 text-sm font-medium text-navy-700">Notifications</div>
      <div className="divide-y divide-surface-divider rounded-xl border border-navy-200 bg-surface-card">
        {notifications?.map((notification) => (
          <div key={notification.id} className="flex items-center justify-between px-4 py-3">
            <span className="text-sm text-navy-900">{notification.message}</span>
            <Badge status={badgeForNotification(notification.message)} />
          </div>
        ))}
      </div>
    </div>
  );
}