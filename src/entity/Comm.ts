import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Comm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orgId: number;

  @Column()
  email: string;

  @Column()
  mobile: number;

  @Column()
  formData: string;

  @Column()
  metadata: string;

}