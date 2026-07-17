import { useCourses } from "../../lib/queries/useCourses";
import { useEnrollments } from "../../lib/queries/useEnrollments";
import { CourseCard } from "../../components/shared/CourseCard";

const CURRENT_USER_ID = "user-1";

export function CourseBrowsePage() {
  const { data: courses, isLoading: coursesLoading } = useCourses();
  const { data: enrollments, isLoading: enrollmentsLoading } = useEnrollments(CURRENT_USER_ID);

  if (coursesLoading || enrollmentsLoading) {
    return <div className="text-sm text-surface-muted">Loading courses…</div>;
  }

  const enrolledCourseIds = new Set(enrollments?.map((e) => e.courseId));

  function handleEnroll(courseId: string) {
    // Mocked — not persisted yet. Once the backend exists, this becomes a
    // useMutation call to POST /enrollments, then invalidates the
    // ["enrollments", userId] query so the dashboard picks it up.
    alert(`Enrolled in course ${courseId} (mocked — not saved yet)`);
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      {courses?.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          isEnrolled={enrolledCourseIds.has(course.id)}
          onEnroll={handleEnroll}
        />
      ))}
    </div>
  );
}