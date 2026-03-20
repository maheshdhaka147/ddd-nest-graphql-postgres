import { Customer } from '../../domain/customer/customer';
import { CustomerEntity } from '../entities/customer.entity';

export class CustomerMapper {
  static toDomain(entity: CustomerEntity): Customer {
    return new Customer(entity.id, entity.firstName, entity.lastName, entity.email);
  }
  static toPersistence(domain: Customer): CustomerEntity {
    const entity = new CustomerEntity();
    ((entity.id = domain.getCustomer().id),
      (entity.firstName = domain.getCustomer().firstName),
      (entity.lastName = domain.getCustomer().lastName),
      (entity.email = domain.getCustomer().email));
    return entity;
  }
}
