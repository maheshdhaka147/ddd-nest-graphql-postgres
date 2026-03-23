import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { DomainException } from '../../domain/exceptions/domain.exception';
import { GqlArgumentsHost } from '@nestjs/graphql';
import { GraphQLError } from 'graphql/error';

@Catch(DomainException)
export class DomainExceptoionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    return new GraphQLError(exception.message, {
      extensions: {
        code: 'BAD_USER_INPUT',
        domain: exception.name,
        stacktrace: null,
      },
    });
  }
}
