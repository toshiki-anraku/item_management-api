import { CreateUserInput } from './create-user.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => ID, { description: `ユーザーID`, nullable: false })
  id: number;
  name?: string;
  email?: string;
  image?: string;
}
