import { Module } from '@nestjs/common';
import { CustomerResolver } from './resolvers/customer.resolver';
import { CustomerService } from './services/customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  providers: [CustomerResolver, CustomerService],
})
export class CustomerModule {}
