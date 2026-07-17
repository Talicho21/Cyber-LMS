import { mockDelay } from "./client";
import { courses } from "../mockData/courses";
import type { Course } from "../../types";

export async function fetchCourses(): Promise<Course[]> {
  return mockDelay(courses);
}

export async function createCourse(input: Omit<Course, "id">): Promise<Course> {
  const newCourse: Course = { ...input, id: `course-${courses.length + 1}` };
  courses.push(newCourse);
  return mockDelay(newCourse);
}