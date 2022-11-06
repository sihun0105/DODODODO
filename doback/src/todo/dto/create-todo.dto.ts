import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({
    example: 'TODO-List-Title',
    description: '컨텐츠제목',
  })
  public title: string;

  @ApiProperty({
    example: 'TODO-List-Content',
    description: '컨텐츠내용',
  })
  public content: string;

  @ApiProperty({
    example: '2022-11-06',
    description: '컨텐츠시작일',
  })
  public startDate: string;

  @ApiProperty({
    example: '2022-11-07',
    description: '컨텐츠종료일',
  })
  public endDate: string;
}
