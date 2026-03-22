import { Customer } from '../customer/customer';
export interface ICustomerRepository {
  findById(id: string): Promise<Customer>;
  save(customer: Customer): Promise<Customer>;
}
