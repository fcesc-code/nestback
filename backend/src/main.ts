import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.group('Environment Variables');
  console.log(process.env);
  console.groupEnd();
  const app = await NestFactory.create(AppModule);

  await app.listen(9000);
}

bootstrap();
