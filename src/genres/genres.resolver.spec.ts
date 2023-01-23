import { Test, TestingModule } from '@nestjs/testing';
import { GenresResolver } from './genres.resolver';
import { GenresService } from './genres.service';

describe('GenresResolver', () => {
  let resolver: GenresResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenresResolver, GenresService],
    }).compile();

    resolver = module.get<GenresResolver>(GenresResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
