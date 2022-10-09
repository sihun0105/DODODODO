import { Module } from '@nestjs/common';
import { MorganModule } from 'nest-morgan';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MorganModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
