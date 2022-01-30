import { COURSES } from '../mockdata/mockcourses';
import { Course } from '../../shared/course';
import { USERS } from '../mockdata/mockusers';
import { User } from '../../shared/user';
import { LESSONS } from '../mockdata/mocklessons';
import { Lesson } from '../../shared/lesson';

export function findAllUsers(): User[] {
  return [...USERS];
}

export function findAllCourses(): Course[] {
  return [...COURSES];
}

export function findAllLessons(): Lesson[] {
  return [...LESSONS];
}

export function findCourseById(courseId: string): Course {
  return [...COURSES].find((course) => course._id === courseId);
}

export function findLessonsForCourse(courseId: string): Lesson[] {
  return [...LESSONS].filter((lesson) => lesson.courseId == Number(courseId));
}

export function authenticate(
  email: string,
  password: string,
): User | undefined {
  const user: any = [...USERS].find((user) => user.email === email);

  if (user && user.password == password) {
    return user;
  }

  return undefined;
}
