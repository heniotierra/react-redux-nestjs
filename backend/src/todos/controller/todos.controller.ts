import { Controller, Get, Post, Put, Delete, Body, Param, Req, Res } from '@nestjs/common';
import { TodosService } from '../service/todos.service';
import { Todo } from '../entity/todo.entity';

@Controller('todos')
export class TodosController {

    constructor(private readonly todosService: TodosService){}
    
    @Get()
    find() {
        return this.todosService.find();
    }
    
    @Get(':id')
    findOne(@Param('id') id) {
        return this.todosService.findOne(id);
    }
   
    @Get('assignee/:id')
    findByAssigneeId(@Param('id') assigneeId) {
        return this.todosService.findByAssigneeId(assigneeId);
    }

    @Post()
    create(@Body() todo: Todo) {
        return this.todosService.create(todo);
    }

    @Put()
    update(@Body() todo: Todo) {
        return this.todosService.update(todo);
    }

    @Delete(':id')
    delete(@Param('id') id) {
        return this.todosService.delete(id);
    }
    
}
