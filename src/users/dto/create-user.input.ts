import { InputType, ID, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => ID, { description: `ユーザーID`, nullable: false })
  id: number;
  name?: string;
  email?: string;
  image?: string;
}
