import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Person } from '../../persons/entity/person.entity';

@Entity()
export class Todo {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ length: 25 })
    name: string;

    @Column({ length: 200 })
    description: string;

    @Column('date')
    startDate: Date;

    @ManyToOne(() => Person, (assignee: Person) => assignee.todos)
    public assignee: Person;

}