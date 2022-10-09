import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import morgan from 'morgan';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`listen on port ${port}`);
}
bootstrap();
