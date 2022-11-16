import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DMS } from 'src/entities/DMS';
import { EventsGateway } from 'src/events/events.gateway';
import { Repository } from 'typeorm';

@Injectable()
export class DmsService {
  constructor(
    @InjectRepository(DMS) private dmsRepository: Repository<DMS>,
    private readonly eventGateway: EventsGateway,
  ) {}

  async getDMChats(id: number, myid: number) {
    //return console.log(id, myid);
    return this.dmsRepository
      .createQueryBuilder('DMS')
      .where({ SenderId: myid, ReceiverId: id })
      .getMany();
  }
}
