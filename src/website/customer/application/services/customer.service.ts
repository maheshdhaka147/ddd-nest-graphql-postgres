import { Inject, Injectable } from '@nestjs/common';
import { CustomerInput } from '../../presentation/graphql/inputs/customer-get.input';
import { CustomerCreateInput } from '../../presentation/graphql/inputs/customer-create.input';
import { Customer } from '../../domain/customer/customer';
import type { ICustomerRepository } from '../../domain/repositories/customer.respsitory.interface';
@Injectable()
export class CustomerService {
  constructor(
    @Inject('ICustomerRepository')
    private readonly customerRepository: ICustomerRepository,
  ) {}
  async read(input: CustomerInput): Promise<Customer | null> {
    try {
      const customer = await this.customerRepository.findById(input.id);
      return customer;
    } catch (error) {
      throw error;
    }
  }
  async create(input: CustomerCreateInput): Promise<Customer> {
    try {
      const newCustomer = Customer.create({
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
      });
      const outcome = await this.customerRepository.save(newCustomer);
      return outcome;
    } catch (error) {
      throw error;
    }
  }
}
