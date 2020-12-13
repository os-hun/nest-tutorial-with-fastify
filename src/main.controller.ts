import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

type IJson = {
  message?: string;
  payload: any;
  errors?: string[];
};

@Controller()
export class MainController {
  constructor(public readonly appService: AppService) {}
  public json: IJson = {
    message: '',
    payload: {},
    errors: [],
  };
}
