import { Injectable } from '@nestjs/common';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  /**
   * アイテム作成
   * @param createItemInput
   * @returns
   */
  create(createItemInput: CreateItemInput) {
    return this.prisma.item.create({
      data: createItemInput,
    });
  }

  /**
   * アイテムを全件取得
   * @returns
   */
  findAll() {
    return this.prisma.item.findMany({
      include: {
        user: true,
        genre: true,
      },
    });
  }

  /**
   * 指定したIDのアイテムを取得
   * @param id
   * @returns
   */
  findOne(id: number) {
    return this.prisma.item.findUnique({
      include: {
        user: true,
        genre: true,
      },
      where: {
        id: id,
      },
    });
  }

  /**
   * 指定したIDのアイテムを更新
   * @param id
   * @param updateGenreInput
   * @returns
   * @todo idを関数で無理やり変換中。他に方法がないか模索
   * @todo deleteでjsonのidを削除する処理ももっと綺麗な書き方があれば修正したい
   */
  update(id: number, updateItemInput: UpdateItemInput) {
    delete updateItemInput.id;
    return this.prisma.item.update({
      where: {
        id: Number(id),
      },
      data: updateItemInput,
    });
  }

  /**
   * 指定したIDのアイテムを削除
   * @param id
   * @returns
   * @todo 外部キー制約で削除時にエラー発生中。紐づくデータを全て削除する形で修正が必要
   */
  remove(id: number) {
    return this.prisma.item.delete({
      where: {
        id: id,
      },
    });
  }
}
