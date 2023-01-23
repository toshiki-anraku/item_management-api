import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsResolver } from './items.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ItemsResolver, ItemsService, PrismaService],
})
export class ItemsModule {}
