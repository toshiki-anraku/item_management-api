import { Module } from '@nestjs/common';
import { GenresService } from './genres.service';
import { GenresResolver } from './genres.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [GenresResolver, GenresService, PrismaService],
})
export class GenresModule {}
