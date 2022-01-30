import { Controller, Get } from '@nestjs/common';
import { Course } from '../../../../shared/course';
import { findAllCourses } from '../../../mockdata/db-data';

@Controller('api/courses')
export class CoursesController {
  @Get('hello-world')
  async getHome(): Promise<string> {
    return 'Hello world!';
  }

  @Get('')
  async findAllCourses(): Promise<Course[]> {
    return findAllCourses();
  }
}
