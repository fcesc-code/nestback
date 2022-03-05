import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['./../enviroments/.development.env'],
    }),
    CoursesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
