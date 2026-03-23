import { Mutation, Query } from '@nestjs/graphql';
import { Args, Resolver } from '@nestjs/graphql';
import { CustomerInput } from '../inputs/customer-get.input';
import { CustomerCreateInput } from '../inputs/customer-create.input';
import { CustomerType } from '../dto/customer.type';
import { CustomerViewMapper } from '../mapper/customer-view.mapper';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetCustomerQuery } from 'src/website/customer/application/queries/get-customer.query';
import { CreateCustomerCommand } from 'src/website/customer/application/commands/create-customer.command';
@Resolver()
export class CustomerResolver {
  constructor(
    private queryBus: QueryBus,
    private commandBus: CommandBus,
  ) {}

  @Query(() => CustomerType)
  async getCustomer(@Args('input') input: CustomerInput): Promise<CustomerType> {
    try {
      const query = new GetCustomerQuery(input.id);
      const customer = await this.queryBus.execute(query);
      return CustomerViewMapper.toGraphQL(customer);
    } catch (error) {
      throw error;
    }
  }

  @Mutation(() => CustomerType)
  async createCustomer(@Args('input') input: CustomerCreateInput): Promise<CustomerType> {
    try {
      const command = new CreateCustomerCommand(input.firstName, input.lastName, input.email);
      const customer = await this.commandBus.execute(command);
      return CustomerViewMapper.toGraphQL(customer);
    } catch (error) {
      throw error;
    }
  }
}
