import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { CreateUserInput } from '@app/users/input-types/create-user-input.type';
import { UsersService } from '@app/users';
import { User } from '@app/users/entities/user.entity';

@Resolver('Users')
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('user') user: CreateUserInput) {
    return this.usersService.create(user);
  }

  @Query(() => [User])
  users() {
    return this.usersService.findAll();
  }
}
