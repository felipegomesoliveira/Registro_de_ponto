import {Field, ObjectType} from '@nestjs/graphql';

import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import Registered_time from './registered_time.entity';
  @ObjectType()
  @Entity({name: 'users'})
  export default class User {
    
    @Field()
    @PrimaryGeneratedColumn()
    id: number;
    
    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    email: string

    @Field()
    @Column()
    password: string

    @Field()
    @Column()
    role: string
    
    @Field()
    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;
    
    @Field()
    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
  
    // Associations
    @OneToMany(() => Registered_time, registered_time => registered_time.userConnection)
    userConnection: Promise<Registered_time[]>;
      registered_timeConnection: any;
  
  }