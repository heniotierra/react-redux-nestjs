import { Todo.Entity } from './todo.entity';

describe('Todo.Entity', () => {
  it('should be defined', () => {
    expect(new Todo.Entity()).toBeDefined();
  });
});
