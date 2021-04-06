import {Field, ObjectType} from '@nestjs/graphql';

import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    JoinColumn,
    ManyToOne,
  } from 'typeorm';
  import User from './user.entity';
  
  @ObjectType()
  @Entity({name: 'registered_time'})
  export default class Registered_time {
  
    @Field()
    @PrimaryGeneratedColumn()
    id: number;
  
    @Field()
    @Column({name: 'user_id'})
    user_id: number;
  
    @Field()
    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;
  
    @Field()
    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
  
    // Associations
  
    @ManyToOne(() => User, user => user.registered_timeConnection, {primary:
        true})
    @JoinColumn({name: 'user_id'})
    authorConnection: Promise<User>;
    userConnection: any;
  }
  
  