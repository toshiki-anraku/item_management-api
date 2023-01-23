import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  /**
   * ユーザーデータ作成
   * @param createUserInput
   * @returns
   * @tode NextAuthでユーザーデータ作成の確認が出来れば不要なため削除
   */
  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  /**
   * ユーザーデータを全件取得
   * @returns
   */
  findAll() {
    return this.prisma.user.findMany();
  }

  /**
   * 指定したIDのユーザーデータを取得
   * @param id
   * @returns
   */
  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  /**
   * ユーザーデータの更新
   * @param id
   * @param updateUserInput
   * @returns
   * @todo idを関数で無理やり変換中。他に方法がないか模索
   * @todo deleteでjsonのidを削除する処理ももっと綺麗な書き方があれば修正したい
   */
  update(id: number, updateUserInput: UpdateUserInput) {
    delete updateUserInput.id;
    return this.prisma.user.update({
      where: {
        id: Number(id),
      },
      data: updateUserInput,
    });
  }

  /**
   * ユーザーデータの削除
   * @param id
   * @returns
   * @todo 外部キー制約で削除時にエラー発生中。紐づくデータを全て削除する形で修正が必要。
   */
  remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
