import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import configuration from 'config/configuration';
import { CustomerModule } from './website/customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Customer } from './website/customer/entities/customer.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (config: ConfigService) => {
        return {
          type: 'postgres',
          host: config.get<string>('database.host'),
          port: config.get<number>('database.port'),
          username: config.get<string>('database.username'),
          password: config.get<string>('database.password'),
          database: config.get<string>('database.databaseName'),
          entities: [Customer],
          synchronize: true,
        };
      },
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    SnakeNamingStrategy,
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
