import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      select: ['id', 'email', 'nickname', 'password'],
    });
    console.log(email, password, user);
    if (!user) {
      return null;
    }
    const result = await bcrypt.compare(password, user.password);
    if (result) {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
    return null;
  }
}
