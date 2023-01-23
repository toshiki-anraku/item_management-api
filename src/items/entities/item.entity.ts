import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Genre } from 'src/genres/entities/genre.entity';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class Item {
  @Field(() => ID, { description: `ジャンルID`, nullable: false })
  id: number;
  userId: number;
  user: User;
  genreId: number;
  genre: Genre;
  name: string;
  imgPath: string;
  priority: number;
  memo: string;
  createdAt: Date;
  updatedAt: Date;
}
