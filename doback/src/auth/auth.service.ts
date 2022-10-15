import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  async validateUser(email: string, password: string) {
    const user = this.userRepository.findOne({
      where: { email },
      select: ['id', 'email', 'nickname', 'password'],
    });
    console.log(email, password, user);
  }
}
