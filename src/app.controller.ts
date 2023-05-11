import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  async greetings(): Promise<string> {
    return `Server Running`;
  }
}
