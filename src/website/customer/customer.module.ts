import { Module } from '@nestjs/common';
import { CustomerResolver } from './interface/graphql/resolvers/customer.resolver';
import { CustomerService } from './application/services/customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './infrastructure/models/customer.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  providers: [CustomerResolver, CustomerService],
})
export class CustomerModule {}
