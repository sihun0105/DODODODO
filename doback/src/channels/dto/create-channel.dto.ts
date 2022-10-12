import { ApiProperty } from '@nestjs/swagger';

export class CreateChannelDto {
  @ApiProperty({
    example: '채팅방',
    description: '채빙방이름',
  })
  public name: string;
}
