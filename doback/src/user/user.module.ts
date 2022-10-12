import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/user.entity';
import { ChannelMembers } from 'src/entities/ChannelMembers';
@Module({
  imports: [TypeOrmModule.forFeature([Users, ChannelMembers])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
