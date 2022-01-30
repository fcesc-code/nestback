import { Controller, Get } from '@nestjs/common';
import { Course } from '../../../../shared/course';
import { findAllCourses } from '../../../mockdata/db-data';

@Controller('courses')
export class CoursesController {
  @Get('api/hello-world')
  async getHome(): Promise<string> {
    return 'Hello world!';
  }

  @Get('api')
  async findAllCourses(): Promise<Course[]> {
    return findAllCourses();
  }
}
