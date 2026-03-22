import { Mutation, Query } from '@nestjs/graphql';
import { Args, Resolver } from '@nestjs/graphql';
import { CustomerInput } from '../inputs/customer-get.input';
import { CustomerCreateInput } from '../inputs/customer-create.input';
import { CustomerType } from '../dto/customer.type';
import { CustomerService } from '../../../application/services/customer.service';
import { CustomerViewMapper } from '../mapper/customer-view.mapper';
@Resolver()
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Query(() => CustomerType)
  async getCustomer(@Args('input') input: CustomerInput): Promise<CustomerType> {
    try {
      let customer = await this.customerService.read(input);
      if (!customer) throw new Error('404 Not Found');
      return CustomerViewMapper.toGraphQL(customer);
    } catch (error) {
      throw error;
    }
  }

  @Mutation(() => CustomerType)
  async createCustomer(@Args('input') input: CustomerCreateInput): Promise<CustomerType> {
    try {
      let customer = await this.customerService.create(input);
      return CustomerViewMapper.toGraphQL(customer);
    } catch (error) {
      throw error;
    }
  }
}
