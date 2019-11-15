import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from '@app/database';
import { UsersResolver } from './users/users.resolver';
import { UsersModule } from '@app/users';

@Module({
  imports: [DatabaseModule, UsersModule, GraphQLModule.forRoot({
    autoSchemaFile: 'schema.gql',
  })],
  controllers: [],
  providers: [UsersResolver],
})
export class AppModule {}
