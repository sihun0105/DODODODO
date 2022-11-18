import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { User } from 'src/decorators/user.decorator';
import { Users } from 'src/entities/user.entity';
import { DmsService } from './dms.service';

@ApiTags('dms')
@Controller('dms')
export class DmsController {
  constructor(private dmsService: DmsService) {}
  @ApiParam({
    name: 'id',
    required: true,
    description: '사용자 아이디',
  })
  @Get(':id/chats')
  async getChat(@Param('id', ParseIntPipe) id: number, @User() user: Users) {
    return this.dmsService.getDMChats(id, user.id);
  }

  @Post(':id/chats')
  async createChats(
    @Param('id', ParseIntPipe) id: number,
    @Body('content') content,
    @User() user: Users,
  ) {
    return this.dmsService.createChats(id, user.id, content);
  }
}
