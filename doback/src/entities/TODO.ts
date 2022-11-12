import { IsDate, IsNumber, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Users } from './user.entity';

@Entity({ schema: 'DODODODO', name: 'TODO' })
export class TODO {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;
  @IsString()
  @Column('text', { name: 'title' })
  title: string;

  @IsString()
  @Column('text', { name: 'content' })
  content: string;

  @IsDate()
  @Column('date', { name: 'startDate' })
  startDate: string;

  @IsDate()
  @Column('date', { name: 'endDate' })
  endDate: string;

  @IsNumber()
  @Column('int', { name: 'CreateId', nullable: true })
  createId: number | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @ManyToOne(() => Users, (users) => users.TODO, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'CreateId', referencedColumnName: 'id' }])
  Creater: Users;
}
