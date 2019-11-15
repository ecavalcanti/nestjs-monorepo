import { ApiModelProperty } from '@nestjs/swagger';
import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateUserInput {
  @ApiModelProperty()
  @Field()
  readonly name: string;

  @ApiModelProperty()
  @Field()
  readonly email: string;
}
