import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Todo } from '../../todos/entity/todo.entity';

@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ length: 25 })
    name: string;

    @OneToMany(() => Todo, (todo: Todo) => todo.assignee)
    public todos: Todo[];

}