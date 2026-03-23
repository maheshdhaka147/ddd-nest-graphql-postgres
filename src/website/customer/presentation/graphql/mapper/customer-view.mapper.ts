import { Customer } from 'src/website/customer/domain/customer/customer';
import { CustomerType } from '../dto/customer.type';
export class CustomerViewMapper {
  static toGraphQL(customer: any): CustomerType {
    const customerType = new CustomerType();
    customerType.id = customer.getId();
    customerType.firstName = customer.getFirstName();
    customerType.lastName = customer.getLastName();
    customerType.email = customer.getEmail().getValue();
    customerType.isActive = customer.getActivationStatus();
    return customerType;
  }
}
