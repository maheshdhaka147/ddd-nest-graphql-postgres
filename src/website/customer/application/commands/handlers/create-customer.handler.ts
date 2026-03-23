import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateCustomerCommand } from '../create-customer.command';
import type { ICustomerRepository } from 'src/website/customer/domain/repositories/customer.repository.interface';
import { Inject } from '@nestjs/common';
import { Customer } from 'src/website/customer/domain/customer/customer';

@CommandHandler(CreateCustomerCommand)
export class CreateCustomerHandler implements ICommandHandler<CreateCustomerCommand> {
  constructor(
    @Inject('ICustomerRepository')
    private readonly customerRepository: ICustomerRepository,
  ) {}
  async execute(command: CreateCustomerCommand): Promise<any> {
    const newCustomer = Customer.create({
      firstName: command.firstName,
      lastName: command.lastName,
      email: command.email,
    });
    return await this.customerRepository.save(newCustomer);
  }
}
