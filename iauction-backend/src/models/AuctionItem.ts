import { v4 } from 'uuid';

/* Just an entity representing an auction's item. */
class AuctionItem {
  id: string;

  name: string;

  value: number;

  constructor({ name, value }: Omit<AuctionItem, 'id'>) {
    this.id = v4();
    this.name = name;
    this.value = value;
  }
}

export default AuctionItem;
