import { Controller, Get, Res, Render } from '@nestjs/common';
import { MainController } from '../main.controller';

@Controller()
export class AppController extends MainController {
  @Get()
  getHello(@Res() res) {
    this.json.message = this.appService.getHello();
    this.json.payload.name = this.appService.getHelloWithName('Shun');
    return res.status(200).send(this.json);
  }

  @Get('/temp')
  @Render('index.hbs')
  root() {
    return {
      message: this.appService.getHello(),
      message_with_name: this.appService.getHelloWithName('Shun'),
    };
  }

  @Get('/redirect')
  index(@Res() res) {
    res.status(302).redirect('/');
  }
}
