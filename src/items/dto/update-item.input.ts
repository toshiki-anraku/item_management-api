import { CreateItemInput } from './create-item.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateItemInput extends PartialType(CreateItemInput) {
  @Field(() => ID, { description: `アイテムID`, nullable: false })
  id: number;
  userId?: number;
  genreId?: number;
  name?: string;
  imgPath?: string;
  priority?: number;
  memo?: string;
}
