import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserInput } from '@app/users/input-types/create-user-input.type';
import { UsersService } from '@app/users';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

}
