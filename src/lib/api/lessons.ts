import { mockDelay } from "./client";
import { lessons } from "../mockData/lessons";
import type { Lesson } from "../../types";

export async function fetchLessons(moduleId: string): Promise<Lesson[]> {
  return mockDelay(lessons.filter((l) => l.moduleId === moduleId));
}

export async function fetchLesson(lessonId: string): Promise<Lesson | undefined> {
  return mockDelay(lessons.find((l) => l.id === lessonId));
}