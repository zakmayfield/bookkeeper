import { Controller } from '@nestjs/common';
import { BooksService } from './books.service';
import { Get, Param, Post, Body } from '@nestjs/common';
import { Prisma, Book as BookModel } from '@prisma/client';

/*
  Controllers are responsible for handling incoming requests and returning responses to the client. A controller's purpose is to receive specific requests for the application.
*/

@Controller('books')
export class BooksController {
  // dependency injection of BooksService
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async getAllBooks(): Promise<BookModel[]> {
    const params = {};
    return this.booksService.books(params);
  }

  @Get('/:id')
  async getBookById(@Param('id') id: number): Promise<BookModel> {
    return this.booksService.book({ id: Number(id) });
  }

  @Post()
  async createBook(
    @Body() bookData: Prisma.BookCreateInput,
  ): Promise<BookModel> {
    return this.booksService.createBook(bookData);
  }
}
