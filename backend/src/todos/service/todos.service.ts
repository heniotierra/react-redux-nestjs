import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Todo } from '../entity/todo.entity';

@Injectable()
export class TodosService {

    constructor(@InjectRepository(Todo) private todosRepository: Repository<Todo>) { }

    async find(): Promise<Todo[]> {
        return await this.todosRepository.find();
    }

    async findOne(id: number): Promise<Todo> {
        return await this.todosRepository.findOne({
            select: ["name", "description", "startDate"],
            where: [{ "id": id }]
        });
    }

    async findByAssigneeId(assigneeId: number): Promise<Todo[]> {
        return await this.todosRepository.find({
            select: ["name", "description", "startDate"],
            where: [{ "assignee": { id: assigneeId } }]
        });
    }
    
    async create(todo: Todo): Promise<Todo> {
        return await this.todosRepository.save(todo);
    }

    async update(todo: Todo) {
        this.todosRepository.save(todo)
    }

    async delete(todo: Todo) {
        this.todosRepository.delete(todo);
    }

}
