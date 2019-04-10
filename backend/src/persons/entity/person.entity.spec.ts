import { Person.Entity } from './person.entity';

describe('Person.Entity', () => {
  it('should be defined', () => {
    expect(new Person.Entity()).toBeDefined();
  });
});
