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

  async create(
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
    todo.createId = myId;
    console.log(myId);
    const returned = await this.TODORepository.save(todo);
  }

  findAll() {
    return `This action returns all todo`;
  }

  async findMyTodo(id: number) {
    return this.TODORepository.createQueryBuilder('Todo')
      .where({ createId: id })
      .getMany();
    // return this.TODORepository.find({
    //   where: {
    //     id: id,
    //   },
    // });
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
