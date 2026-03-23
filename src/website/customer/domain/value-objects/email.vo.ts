import { InvalidEmailException } from '../exceptions/invalid-email.exception';

export class Email {
  private readonly value: string;
  constructor(email: string) {
    if (!email.includes('@')) {
      throw new InvalidEmailException(email);
    }
    this.value = email;
  }
  public static create(email: string): Email {
    return new Email(email);
  }

  public getValue(): string {
    return this.value;
  }
}
