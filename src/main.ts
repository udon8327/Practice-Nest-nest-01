import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    allowedHeaders: ['Authorization', 'content-type'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });
  app.use(helmet());
  await app.listen(3000);
}
bootstrap();
