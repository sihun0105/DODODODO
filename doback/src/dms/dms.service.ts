import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DMS } from 'src/entities/DMS';
import { EventsGateway } from 'src/events/events.gateway';
import { onlineMap } from 'src/events/onlineMap';
import { Repository } from 'typeorm';

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

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

  async createChats(id: number, myid: number, content: string) {
    const dm = new DMS();
    dm.SenderId = myid;
    dm.ReceiverId = id;
    dm.content = content;
    const saveDM = await this.dmsRepository.save(dm);
    const dmWithSender = await this.dmsRepository.findOne({
      where: { id: saveDM.id },
    });
    const receiverSocketId = getKeyByValue(onlineMap['/chat'], Number(id));
    this.eventGateway.server.to(receiverSocketId).emit('dm', dmWithSender);
  }
}
