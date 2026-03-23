import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DomainExceptoionFilter } from './website/customer/infrastructure/filters/domain-exception.filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new DomainExceptoionFilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
