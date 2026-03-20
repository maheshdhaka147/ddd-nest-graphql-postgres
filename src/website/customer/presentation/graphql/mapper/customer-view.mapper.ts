import { Customer } from 'src/website/customer/domain/customer/customer';
import { CustomerType } from '../dto/customer.type';
export class CustomerViewMapper {
  static toGraphQL(customer: Customer): CustomerType {
    const customerType = new CustomerType();
    customerType.id = customer.getCustomer().id;
    ((customerType.firstName = customer.getCustomer().firstName),
      (customerType.lastName = customer.getCustomer().lastName),
      (customerType.email = customer.getCustomer().email));
    return customerType;
  }
}
