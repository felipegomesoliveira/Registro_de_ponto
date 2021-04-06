import { Field, InputType } from '@nestjs/graphql';
import UserInput from './user.input';

// @InputType()
// class TimeRegisteredUserConnectInput {
//   @Field()
//   readonly id: number;
// }

// @InputType()
// class TimeRegistederedUSerInput {
//   @Field({nullable: true})
//   readonly connect: TimeRegisteredUserConnectInput;

//   @Field({nullable: true})
//   readonly create: UserInput;
// }

@InputType()
export default class TimeRegistederedInput {
  @Field()
  readonly user_id: number;
}

