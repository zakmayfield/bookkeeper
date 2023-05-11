import { Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [UsersModule, BooksModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
