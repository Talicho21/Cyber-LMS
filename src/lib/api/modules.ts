import { mockDelay } from "./client";
import { modules } from "../mockData/modules";
import type { Module } from "../../types";

export async function fetchModules(courseId: string): Promise<Module[]> {
  return mockDelay(modules.filter((m) => m.courseId === courseId).sort((a, b) => a.position - b.position));
}