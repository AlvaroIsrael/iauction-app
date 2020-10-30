import Bidder from '../models/Bidder';

interface CreateBitterDto {
  name: string;
  age: number;
}

interface UpdateBitterDto {
  id: string;
  name: string;
  age: number;
}

class BiddersRepository {
  private readonly bidders: Bidder[];

  /* Just a mocked array to simulate a persistence and avoid unecessary
   complexity from a real database. */
  constructor() {
    this.bidders = [
      {
        id: '4dd67905-4c33-49be-b08c-0cdff8bfb842',
        name: 'Sara Mills',
        age: 20,
      },
      {
        id: '6d3f724c-b811-4062-8da9-824a4f6cf7c3',
        name: 'Frank Elliott',
        age: 22,
      },
      {
        id: 'e4869f55-7a70-4b40-8dbd-21a99759ce91',
        name: 'Faye Walsh',
        age: 24,
      },
      {
        id: '634275a5-bb76-4a0c-ad5c-c810afdaa882',
        name: 'Ellie Simmons',
        age: 19,
      },
      {
        id: 'd473cf83-9445-4f32-b14b-4195af645138',
        name: 'Joshua Harris',
        age: 35,
      },
    ];
  }

  /* Return a list of all bidders. */
  public async all(): Promise<Bidder[]> {
    return this.bidders;
  }

  /* Adds a new bidder to the database. */
  public async create({ name, age }: CreateBitterDto): Promise<Bidder> {
    const car = new Bidder({ name, age });
    this.bidders.push(car);
    return car;
  }

  /* Update a bidder from the database. */
  public async update({ id, name, age }: UpdateBitterDto): Promise<void> {
    const newDriver = new Bidder({ name, age });
    const driverToBeUpdated = this.bidders.findIndex(d => d.id === id);
    if (driverToBeUpdated > -1) {
      this.bidders[driverToBeUpdated] = newDriver;
    }
  }

  /* Removes a bidder from the database. */
  public async remove(id: string): Promise<void> {
    const vdriverToBeRemoved = this.bidders.findIndex(d => d.id === id);
    if (vdriverToBeRemoved > -1) {
      this.bidders.splice(vdriverToBeRemoved, 1);
    }
  }

  /* Find one bidder from the database. */
  public async findByName(name: string): Promise<Bidder | null> {
    const foundBidder = this.bidders.find(b => b.name === name);
    return foundBidder || null;
  }

  /* Find one bidder by its id from the database. */
  public async findBidderById(id: string): Promise<string | null> {
    const foundBidder = this.bidders.find(b => b.id === id);
    if (foundBidder === undefined) {
      return null;
    }
    return foundBidder.name || null;
  }
}

export default BiddersRepository;
