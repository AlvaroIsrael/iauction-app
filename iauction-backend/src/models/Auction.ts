import { v4 } from 'uuid';

/* Just an entity representing an auction. */
class Auction {
  id: string;

  bid: number;

  bidderId: string;

  auctionItemId: string;

  constructor({ bidderId, bid, auctionItemId }: Omit<Auction, 'id'>) {
    this.id = v4();
    this.bidderId = bidderId;
    this.bid = bid;
    this.auctionItemId = auctionItemId;
  }
}

export default Auction;
