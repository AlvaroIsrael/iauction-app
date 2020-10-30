import AuctionItem from '../models/AuctionItem';
import Bidder from '../models/Bidder';

interface CreateAuctionItemDto {
  name: string;
  value: number;
}

interface UpdateAuctionItemDto {
  id: string;
  name: string;
  value: number;
}

class AuctionItemsRepository {
  private readonly auctionItems: AuctionItem[];

  /* Just a mocked array to simulate a persistence and avoid unecessary
   complexity from a real database. */
  constructor() {
    this.auctionItems = [
      {
        id: '289f03b6-e68d-410a-bd72-398c5fc8db83',
        name: 'Perfume',
        value: 1000.23,
      },
      {
        id: '2c012170-fddc-4fc9-bd4b-de0d3f2a3993',
        name: 'Television',
        value: 2220.23,
      },
      {
        id: '430cd34c-372c-4fac-832a-68c3071b4766',
        name: 'Plate',
        value: 1500.65,
      },
      {
        id: '5d15dcae-996d-4403-87a3-610bc49c7a02',
        name: 'Table',
        value: 1020,
      },
      {
        id: '3217394f-feb0-4aa2-9eef-ae2813dc0e76',
        name: 'Pencil',
        value: 300.1,
      },
    ];
  }

  /* Return a list of all auction items. */
  public async all(): Promise<AuctionItem[]> {
    return this.auctionItems;
  }

  /* Adds a new auction item to the database. */
  public async create({ name, value }: CreateAuctionItemDto): Promise<AuctionItem> {
    const auctionItem = new AuctionItem({ name, value });
    this.auctionItems.push(auctionItem);
    return auctionItem;
  }

  /* Update a auction item from the database. */
  public async update({ id, name, value }: UpdateAuctionItemDto): Promise<void> {
    const newAuctionItem = new AuctionItem({ name, value });
    const auctionItemToBeUpdated = this.auctionItems.findIndex(d => d.id === id);
    if (auctionItemToBeUpdated > -1) {
      this.auctionItems[auctionItemToBeUpdated] = newAuctionItem;
    }
  }

  /* Removes a auction item from the database. */
  public async remove(id: string): Promise<void> {
    const auctionItemToBeRemoved = this.auctionItems.findIndex(d => d.id === id);
    if (auctionItemToBeRemoved > -1) {
      this.auctionItems.splice(auctionItemToBeRemoved, 1);
    }
  }

  /* Find one auction item from the database. */
  public async findItemNameById(id: string): Promise<string | null> {
    const foundBidder = this.auctionItems.find(b => b.id === id);
    if (foundBidder === undefined) {
      return null;
    }
    return foundBidder.name || null;
  }
}

export default AuctionItemsRepository;
