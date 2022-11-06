import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TODO } from 'src/entities/TODO';

@Module({
  imports: [TypeOrmModule.forFeature([TODO])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
