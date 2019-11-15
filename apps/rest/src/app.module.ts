import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/database';
import { UsersController } from './users/users.controller';
import { UsersModule } from '@app/users';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [UsersController],
  providers: [],
})
export class AppModule {}
