import { Module } from '@nestjs/common';
import { DmsService } from './dms.service';
import { DmsController } from './dms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DMS } from 'src/entities/DMS';
import { Users } from 'src/entities/user.entity';
import { EventsModule } from 'src/events/events.module';

@Module({
  imports: [TypeOrmModule.forFeature([DMS, Users]), EventsModule],
  providers: [DmsService],
  controllers: [DmsController],
})
export class DmsModule {}
