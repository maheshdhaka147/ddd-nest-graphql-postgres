export class Customer {
  private id: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  private isActive: boolean;
  constructor(id: string, firstName: string, lastName: string, email: string, isActive = false) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.isActive = isActive;
  }
  getCustomer() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      isActive: this.isActive,
    };
  }
  updateCustomer(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  changeActivationStatus(isActive: boolean) {
    // Change activation status
    this.isActive = isActive;
  }
}
