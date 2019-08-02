import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PersonsService } from '../service/persons.service';
import { Person } from '../entity/person.entity';

@Controller('persons')
export class PersonsController {

    constructor(private readonly personsService: PersonsService){}
    
    @Get()
    find() {
        return this.personsService.find();
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return this.personsService.findOne(id);
    }

    @Post()
    create(@Body() person: Person) {
        console.log("person",person);
        return this.personsService.create(person);
    }

    @Put()
    update(@Body() person: Person) {
        return this.personsService.update(person);
    }
    
    @Delete(':id')
    delete(@Param('id') id) {
        return this.personsService.delete(id);
    }
    
}
