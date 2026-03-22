import { Injectable } from '@nestjs/common';
import { CustomerInput } from '../../presentation/graphql/inputs/customer.input';
import { CustomerRepository } from '../../infrastructure/repositories/customer.respsitory';
import { Customer } from '../../domain/customer/customer';
@Injectable()
export class CustomerService {
  constructor(private customerRepository: CustomerRepository) {}
  async read(input: CustomerInput): Promise<Customer | null> {
    try {
      const customer = await this.customerRepository.findById(input.id);
      return customer;
    } catch (error) {
      throw error;
    }
  }
  async create(input: CustomerInput): Promise<Customer> {
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
