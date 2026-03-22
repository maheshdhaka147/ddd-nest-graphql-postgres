import { Module } from '@nestjs/common';
import { CustomerResolver } from './presentation/graphql/resolvers/customer.resolver';
import { CustomerService } from './application/services/customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './infrastructure/entities/customer.entity';
import { CustomerRepository } from './infrastructure/repositories/customer.respsitory';
import { ICustomerRepository } from './domain/repositories/customer.repository.interface';
@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity])],
  providers: [
    CustomerResolver,
    CustomerService,
    CustomerRepository,
    {
      provide: 'ICustomerRepository',
      useClass: CustomerRepository,
    },
  ],
})
export class CustomerModule {}
