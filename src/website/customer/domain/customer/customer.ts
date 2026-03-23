import { v4 as uuidv4 } from 'uuid';
import { Email } from '../value-objects/email.vo';
export class Customer {
  private constructor(
    private readonly id: string,
    private firstName: string,
    private lastName: string,
    private email: Email,
    private isActive: boolean,
  ) {}

  public static create(props: { firstName: string; lastName: string; email: string }): Customer {
    const emailVO = Email.create(props.email);
    return new Customer(uuidv4(), props.firstName, props.lastName, emailVO, false);
  }

  public static reconstitute(props: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    isActive: boolean;
  }) {
    const emailVO = Email.create(props.email);
    return new Customer(props.id, props.firstName, props.lastName, emailVO, props.isActive);
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

  public getEmail(): Email {
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
