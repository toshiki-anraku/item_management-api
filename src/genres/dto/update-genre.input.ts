import { CreateGenreInput } from './create-genre.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGenreInput extends PartialType(CreateGenreInput) {
  @Field(() => ID, { description: `ジャンルID`, nullable: false })
  id: number;
  name?: string;
}
