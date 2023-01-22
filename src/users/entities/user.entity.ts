import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID, { description: `ユーザーID`, nullable: false })
  id: number;
  name: string;
  email: string;
  emailVerified: Date;
  image: string;
  created_at: Date;
  updated_at: Date;
}
