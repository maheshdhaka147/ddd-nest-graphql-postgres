import { v4 as uuidv4 } from 'uuid';
export class Customer {
  private constructor(
    private readonly id: string,
    private firstName: string,
    private lastName: string,
    private email: string,
    private isActive: boolean,
  ) {}

  public static create(props: { firstName: string; lastName: string; email: string }): Customer {
    return new Customer(uuidv4(), props.firstName, props.lastName, props.email, false);
  }

  public static reconstitute(props: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    isActive: boolean;
  }) {
    return new Customer(props.id, props.firstName, props.lastName, props.email, props.isActive);
  }

  public getId(): string {
    return this.id;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public getEmail(): string {
    return this.email;
  }

  public getActivationStatus(): boolean {
    return this.isActive;
  }

  public updateCustomer(firstName: string, lastName: string): void {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public activate(): void {
    this.isActive = true;
  }

  public deActivate(): void {
    this.isActive = false;
  }
}
