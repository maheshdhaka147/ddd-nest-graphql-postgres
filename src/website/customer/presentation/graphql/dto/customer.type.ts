import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CustomerType {
  @Field()
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  isActive: boolean;
}
