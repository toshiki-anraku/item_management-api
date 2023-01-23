import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Genre {
  @Field(() => ID, { description: `ユーザーID`, nullable: false })
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
