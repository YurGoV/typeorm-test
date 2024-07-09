import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

if (!process.env.NODE_PORT) {
  throw new Error('NODE_PORT is not set in the environment variables.');
}
const PORT = process.env.NODE_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
