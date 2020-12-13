import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res): string {
    return res.status(200).send({
      message: this.appService.getHello(),
    });
  }

  @Get('/redirect')
  index(@Res() res) {
    res.status(302).redirect('/');
  }
}
