import { v4 } from 'uuid';

/* Just an entity representing an auction's bidder. */
class Bidder {
  id: string;

  name: string;

  age: number;

  constructor({ name, age }: Omit<Bidder, 'id'>) {
    this.id = v4();
    this.name = name;
    this.age = age;
  }
}

export default Bidder;
