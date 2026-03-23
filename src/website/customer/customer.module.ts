import { Module } from '@nestjs/common';
import { CustomerResolver } from './presentation/graphql/resolvers/customer.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './infrastructure/entities/customer.entity';
import { CustomerRepository } from './infrastructure/repositories/customer.respsitory';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateCustomerHandler } from './application/commands/handlers/create-customer.handler';
import { GetCustomerHandler } from './application/queries/handlers/get-customer.handler';
@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([CustomerEntity])],
  providers: [
    CustomerResolver,
    CustomerRepository,
    GetCustomerHandler,
    CreateCustomerHandler,
    {
      provide: 'ICustomerRepository',
      useClass: CustomerRepository,
    },
  ],
})
export class CustomerModule {}
