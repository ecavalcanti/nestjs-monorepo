import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

@Injectable()
export class ConfigService {
  constructor() {
    dotenv.config();
  }

  get(key: string): any {
    const value: any = process.env[key];
    if (!isNaN(value) || (value === 'true' || value === 'false')) {
      return JSON.parse(value);
    }
    return value;
  }

}
