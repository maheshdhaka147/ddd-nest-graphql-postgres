import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CustomerInput {
  @Field()
  id: string;
}
