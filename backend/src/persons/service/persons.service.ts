import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Person } from '../entity/person.entity';

@Injectable()
export class PersonsService {

    constructor(@InjectRepository(Person) private personsRepository: Repository<Person>) { }

    async find(): Promise<Person[]> {
        return await this.personsRepository.find();
    }

    async findOne(id: number): Promise<Person> {
        return await this.personsRepository.findOne({
            select: ["name"],
            where: [{ "id": id }]
        });
    }

    async create(person: Person): Promise<Person> {
        return await this.personsRepository.save(person);
    }

    async update(person: Person) {
        this.personsRepository.save(person)
    }

    async delete(person: Person) {
        this.personsRepository.delete(person);
    }

}
