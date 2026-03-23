import { Injectable } from '@nestjs/common';
import { CustomerEntity } from '../entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../../domain/customer/customer';
import { CustomerMapper } from '../mapper/customer.mapper';
import { CustomerNotFoundException } from '../../domain/exceptions/customer-not-found.exception';
@Injectable()
export class CustomerRepository {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly customerRepository: Repository<CustomerEntity>,
  ) {}

  async findById(id: string): Promise<Customer | null> {
    const customer = await this.customerRepository.findOneByOrFail({
      id: id,
    });
    // Convert Customer DB Entity to Domain
    return CustomerMapper.toDomain(customer);
  }

  async save(customer: Customer): Promise<Customer> {
    // Convert Customer Domain to DB Entity
    const customerEntity = CustomerMapper.toPersistence(customer);
    const newCustomer = await this.customerRepository.save(customerEntity);
    return CustomerMapper.toDomain(newCustomer);
  }
}
