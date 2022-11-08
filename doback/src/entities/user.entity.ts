import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { DMS } from './DMS';
import { TODO } from './TODO';

@Index('email', ['email'], { unique: true })
@Entity({ schema: 'DODODODO', name: 'users' })
export class Users {
  @ApiProperty({
    example: '1',
    description: '사용자 아이디',
  })
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsEmail()
  @ApiProperty({
    example: 'tlgns14@nate.com',
    description: '사용자 이메일',
  })
  @Column('varchar', { name: 'email', unique: true, length: 30 })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '김시후니후니',
    description: '사용자 닉네임',
  })
  @Column('varchar', { name: 'nickname', length: 30 })
  nickname: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '1q2w3e4r',
    description: '사용자 비밀번호',
  })
  @Column('varchar', { name: 'password', length: 100, select: true })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @OneToMany(() => DMS, (dms) => dms.Sender)
  DMs: DMS[];

  @OneToMany(() => DMS, (dms) => dms.Receiver)
  DMs2: DMS[];

  @OneToMany(() => TODO, (todo) => todo.Creater)
  TODO: TODO[];
}
