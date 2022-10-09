import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MorganModule } from 'nest-morgan';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MorganModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
