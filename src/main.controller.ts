import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

type Json = {
  message?: string;
  payload: any;
  errors?: string[];
};

@Controller()
export class MainController {
  constructor(public readonly appService: AppService) {}
  public json: Json = {
    message: '',
    payload: {},
    errors: [],
  };
}
