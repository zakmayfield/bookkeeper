import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { BookService } from './book.service';
import { Prisma, Book as BookModel, User as UserModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly bookService: BookService,
  ) {}

  @Get()
  async greetings(): Promise<string> {
    return `Server Running`;
  }

  @Get('books')
  async getAllBooks(): Promise<BookModel[]> {
    const params = {};
    return this.bookService.books(params);
  }

  @Get('books/:id')
  async getBookById(@Param('id') id: number): Promise<BookModel> {
    return this.bookService.book({ id: Number(id) });
  }

  @Post('books')
  async createBook(
    @Body() bookData: Prisma.BookCreateInput,
  ): Promise<BookModel> {
    return this.bookService.createBook(bookData);
  }

  // User
  @Post('user')
  async createUser(
    @Body() userData: Prisma.UserCreateInput,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
