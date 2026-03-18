import { Injectable } from '@nestjs/common';
import { Customer } from '../../infrastructure/models/customer.entity';
import { CustomerInput } from '../../interface/graphql/inputs/customer.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}
  async read(input: CustomerInput): Promise<Customer> {
    try {
      const customer = await this.customerRepository.find({
        where: {
          id: input.id,
        },
      });
      if (customer.length === 0) throw Error('404 Not Found');
      return customer[0];
    } catch (error) {
      throw error;
    }
  }
  async create(input: CustomerInput): Promise<Customer> {
    const custoemr = await this.customerRepository.create(input);
    const result = await this.customerRepository.save(custoemr);
    return result;
  }
}
