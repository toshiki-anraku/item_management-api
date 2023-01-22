import { Injectable } from '@nestjs/common';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GenresService {
  constructor(private prisma: PrismaService) {}

  /**
   * ジャンル作成
   * @param createGenreInput
   * @returns
   */
  create(createGenreInput: CreateGenreInput) {
    return this.prisma.genre.create({
      data: createGenreInput,
    });
  }

  /**
   * ジャンルを全件取得
   * @returns
   */
  findAll() {
    return this.prisma.genre.findMany();
  }

  /**
   * 指定したIDのジャンルを取得
   * @param id
   * @returns
   */
  findOne(id: number) {
    return this.prisma.genre.findUnique({
      where: {
        id: id,
      },
    });
  }

  /**
   * 指定したIDのジャンルを更新
   * @param id
   * @param updateGenreInput
   * @returns
   * @todo idを関数で無理やり変換中。他に方法がないか模索
   * @todo deleteでjsonのidを削除する処理ももっと綺麗な書き方があれば修正したい
   */
  update(id: number, updateGenreInput: UpdateGenreInput) {
    delete updateGenreInput.id;
    return this.prisma.genre.update({
      where: {
        id: Number(id),
      },
      data: updateGenreInput,
    });
  }

  /**
   * 指定したIDのジャンルを削除
   * @param id
   * @returns
   * @todo 外部キー制約で削除時にエラー発生中。紐づくデータを全て削除する形で修正が必要
   */
  remove(id: number) {
    return this.prisma.genre.delete({
      where: {
        id: id,
      },
    });
  }
}
