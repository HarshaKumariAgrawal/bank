import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: number;

  @Column()
  orgId: number;

  @Column()
  password: string;

  @Column()
  branchName: string;

  @Column()
  ifsc: string;

  @Column()
  lastLoginDate: Date;

  @Column()
  defaultLang: string;
}
