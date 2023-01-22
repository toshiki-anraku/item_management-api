import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GenresService } from './genres.service';
import { Genre } from './entities/genre.entity';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';

@Resolver(() => Genre)
export class GenresResolver {
  constructor(private readonly genresService: GenresService) {}

  /**
   * ジャンル作成関数の呼び出し
   * @param createGenreInput
   * @returns
   */
  @Mutation(() => Genre)
  createGenre(@Args('createGenreInput') createGenreInput: CreateGenreInput) {
    return this.genresService.create(createGenreInput);
  }

  /**
   * ジャンル一覧取得関数の呼び出し
   * @returns
   */
  @Query(() => [Genre], { name: 'genres' })
  findAll() {
    return this.genresService.findAll();
  }

  /**
   * 指定したIDのジャンル取得関数の呼び出し
   * @param id
   * @returns
   */
  @Query(() => Genre, { name: 'genre' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.genresService.findOne(id);
  }

  /**
   * 指定したIDのジャンル更新関数の呼び出し
   * @param updateGenreInput
   * @returns
   */
  @Mutation(() => Genre)
  updateGenre(@Args('updateGenreInput') updateGenreInput: UpdateGenreInput) {
    return this.genresService.update(updateGenreInput.id, updateGenreInput);
  }

  /**
   * 指定したIDのジャンル削除関数の呼び出し
   * @param id
   * @returns
   */
  @Mutation(() => Genre)
  removeGenre(@Args('id', { type: () => Int }) id: number) {
    return this.genresService.remove(id);
  }
}
