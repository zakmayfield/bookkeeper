import { Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';

import { AppController } from './app.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';

import { BooksModule } from './books/books.module';
import { BooksService } from './books/books.service';
import { BooksController } from './books/books.controller';

@Module({
  imports: [UsersModule, BooksModule],
  controllers: [AppController, UsersController, BooksController],
  providers: [PrismaService, UsersService, BooksService],
})
export class AppModule {}
