import { Controller, Get, Res } from '@nestjs/common';
import { MainController } from './main.controller';

@Controller()
export class AppController extends MainController {
  @Get()
  getHello(@Res() res) {
    this.json.message = this.appService.getHello();
    this.json.payload.name = this.appService.getHelloWithName('Shun');
    return res.status(200).send(this.json);
  }

  @Get('/redirect')
  index(@Res() res) {
    res.status(302).redirect('/');
  }
}
