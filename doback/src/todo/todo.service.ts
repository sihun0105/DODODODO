import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TODO } from 'src/entities/TODO';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  @InjectRepository(TODO)
  private TODORepository: Repository<TODO>;

  create(
    title: string,
    content: string,
    startDate: string,
    endDate: string,
    myId: number,
  ) {
    const todo = new TODO();
    todo.title = title;
    todo.content = content;
    todo.startDate = startDate;
    todo.endDate = endDate;
    todo.id = myId;
    return 'This action adds a new todo';
  }

  findAll() {
    return `This action returns all todo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
