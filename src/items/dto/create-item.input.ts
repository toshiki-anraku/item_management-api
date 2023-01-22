import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateItemInput {
  userId: number;
  genreId: number;
  name: string;
  imgPath?: string;
  priority: number;
  memo: string;
}
