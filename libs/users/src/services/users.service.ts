import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { CreateUserInput } from '../input-types/create-user-input.type';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    return this.userRepository.save({
      ...createUserInput,
    });
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

}
