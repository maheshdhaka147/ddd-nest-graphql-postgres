import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCustomerQuery } from '../get-customer.query';
import type { ICustomerRepository } from 'src/website/customer/domain/repositories/customer.repository.interface';
import { Inject } from '@nestjs/common';

@QueryHandler(GetCustomerQuery)
export class GetCustomerHandler implements IQueryHandler<GetCustomerQuery> {
  constructor(
    @Inject('ICustomerRepository')
    private readonly customerRepository: ICustomerRepository,
  ) {}
  async execute(query: GetCustomerQuery): Promise<any> {
    return await this.customerRepository.findById(query.id);
  }
}
