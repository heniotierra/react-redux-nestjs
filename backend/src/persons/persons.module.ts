import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonsController } from './controller/persons.controller';
import { PersonsService } from './service/persons.service';
import { Person } from './entity/person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  controllers: [PersonsController],
  providers: [PersonsService],
})
export class PersonsModule {}
