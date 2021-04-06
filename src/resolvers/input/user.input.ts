import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class UserInput {
  @Field()
  readonly name: string;
  @Field()
  readonly email: string;
  @Field()
  readonly password: string;
  @Field()
  readonly role: string;
}