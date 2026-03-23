import { DomainException } from './domain.exception';

export class CustomerNotFoundException extends DomainException {
  constructor(id: string) {
    super(`Customer with id ${id} was not found`);
  }
}
