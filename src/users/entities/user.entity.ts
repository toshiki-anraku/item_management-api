import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
  // @Field({ description: `ユーザーID` })
  // id: number;

  // @Field({ description: `氏名` })
  // name: string;

  // @Field({ description: `パスワード` })
  // password: string;

  // @Field({ description: `メールアドレス` })
  // mail: string;

  // @Field({ description: `パスワードリセット`, nullable: true })
  // reset_url?: string;

  // @Field({ description: `作成日` })
  // created_at: Date;

  // @Field({ description: `更新日` })
  // updated_at: Date;
}
