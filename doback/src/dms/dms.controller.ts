import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('dms')
@Controller('dms')
export class DmsController {
  @ApiParam({
    name: 'id',
    required: true,
    description: '사용자 아이디',
  })
  @Get(':id/chats')
  getChat(@Param('id') id) {
    console.log(id);
  }
}
