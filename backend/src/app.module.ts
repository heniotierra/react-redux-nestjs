import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsController } from './persons/controller/persons.controller';
import { PersonsService } from './persons/service/persons.service';
import { PersonsModule } from './persons/persons.module';
import { TodosController } from './todos/controller/todos.controller';
import { TodosService } from './todos/service/todos.service';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    PersonsModule, 
    TodosModule,
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "localhost",
      "port": 5432,
      "username": "linx",
      "password": "linx",
      "database": "linx_antecipacao",
      "entities": ["src/**/*.entity{.ts,.js}"],
      "synchronize": true
    })
  ],
})

export class AppModule {
  constructor(private readonly connection: Connection) {}
}
