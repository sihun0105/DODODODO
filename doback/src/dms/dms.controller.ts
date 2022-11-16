import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
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
}
