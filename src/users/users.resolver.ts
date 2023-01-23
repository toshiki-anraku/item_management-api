import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  /**
   * ユーザーデータ作成関数の呼び出し
   * @param createUserInput
   * @returns
   * @todo NextAuthでの実装が出来る場合は削除予定
   */
  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  /**
   * ユーザーデータ全件取得関数の呼び出し
   * @returns
   * @todo 使うとすれば管理画面で使うかも。使わなければ削除。
   */
  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  /**
   * 指定したIDのユーザーデータ取得関数を呼び出し
   * @param id
   * @returns
   * @todo NextAuthで取得まで行える場合は不要な可能性あり。その場合は削除
   */
  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  /**
   * 特定のユーザーデータ更新関数を呼び出し
   * @param updateUserInput
   * @returns
   */
  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  /**
   * 特定のユーザーデータ削除関数を呼び出し
   * @param id
   * @returns
   * @todo NextAuthで退会処理が出来るのか要確認。
   */
  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}
