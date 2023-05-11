import { Controller } from '@nestjs/common';
import { BooksService } from './books.service';
import { Get, Param, Post, Body } from '@nestjs/common';
import { Prisma, Book as BookModel } from '@prisma/client';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('books')
  async getAllBooks(): Promise<BookModel[]> {
    const params = {};
    return this.booksService.books(params);
  }

  @Get('books/:id')
  async getBookById(@Param('id') id: number): Promise<BookModel> {
    return this.booksService.book({ id: Number(id) });
  }

  @Post('books')
  async createBook(
    @Body() bookData: Prisma.BookCreateInput,
  ): Promise<BookModel> {
    return this.booksService.createBook(bookData);
  }
}
