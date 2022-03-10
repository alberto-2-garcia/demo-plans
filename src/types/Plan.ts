import { Semester } from "./Semester";

export type Plan = {
  title: string;
  id: string;
  semesters: Semester[];
}
