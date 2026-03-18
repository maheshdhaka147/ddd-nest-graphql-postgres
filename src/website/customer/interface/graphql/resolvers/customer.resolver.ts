import { Mutation, Query } from '@nestjs/graphql';
import { Args, ObjectType, Resolver } from '@nestjs/graphql';
import { CustomerInput } from '../inputs/customer.input';
import { Customer } from '../../../infrastructure/models/customer.entity';
import { CustomerService } from '../../../application/services/customer.service';
@Resolver()
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Query(() => Customer)
  async getCustomer(@Args('input') input: CustomerInput): Promise<Customer> {
    try {
      return await this.customerService.read(input);
    } catch (error) {
      throw error;
    }
  }

  @Mutation(() => Customer)
  async createCustomer(@Args('input') input: CustomerInput): Promise<Customer> {
    return await this.customerService.create(input);
  }
}
