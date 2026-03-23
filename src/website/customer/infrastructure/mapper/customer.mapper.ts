import { Customer } from '../../domain/customer/customer';
import { CustomerEntity } from '../entities/customer.entity';

export class CustomerMapper {
  static toDomain(entity: CustomerEntity): Customer {
    return Customer.reconstitute({
      id: entity.id,
      firstName: entity.firstName,
      lastName: entity.lastName,
      email: entity.email,
      isActive: entity.isActive,
    });
  }
  static toPersistence(domain: Customer): CustomerEntity {
    const entity = new CustomerEntity();
    entity.id = domain.getId();
    entity.firstName = domain.getFirstName();
    entity.lastName = domain.getLastName();
    entity.email = domain.getEmail().getValue();
    entity.isActive = domain.getActivationStatus();
    return entity;
  }
}
