export class Customer {
  private id: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  constructor(id: string, firstName: string, lastName: string, email: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  updateCustomer(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
