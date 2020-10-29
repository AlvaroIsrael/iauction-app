import Auction from '../models/Auction';

interface CreateAuctionDto {
  bid: number;
  bidderId: string;
  auctionItemId: string;
}

interface UpdateAuctionDto {
  id: string;
  bid: number;
  bidderId: string;
  auctionItemId: string;
}

class AuctionsRepository {
  private readonly auctions: Auction[];

  /* Just a mocked array to simulate a persistence and avoid unecessary
   complexity from a real database. */
  constructor() {
    this.auctions = [
      {
        id: '5bbd8e9a-1a39-11eb-adc1-0242ac120002',
        bid: 500.0,
        auctionItemId: '289f03b6-e68d-410a-bd72-398c5fc8db83',
        bidderId: '4dd67905-4c33-49be-b08c-0cdff8bfb842',
      },
      {
        id: '60ef45ca-1a39-11eb-adc1-0242ac120002',
        bid: 500.0,
        auctionItemId: '289f03b6-e68d-410a-bd72-398c5fc8db83',
        bidderId: '4dd67905-4c33-49be-b08c-0cdff8bfb842',
      },
      {
        id: '64a9fc6e-1a39-11eb-adc1-0242ac120002',
        bid: 500.0,
        auctionItemId: '430cd34c-372c-4fac-832a-68c3071b4766',
        bidderId: 'd473cf83-9445-4f32-b14b-4195af645138',
      },
      {
        id: '69406a06-1a39-11eb-adc1-0242ac120002',
        bid: 500.0,
        auctionItemId: '430cd34c-372c-4fac-832a-68c3071b4766',
        bidderId: 'd473cf83-9445-4f32-b14b-4195af645138',
      },
      {
        id: '6cec507a-1a39-11eb-adc1-0242ac120002',
        bid: 500.0,
        auctionItemId: '430cd34c-372c-4fac-832a-68c3071b4766',
        bidderId: 'd473cf83-9445-4f32-b14b-4195af645138',
      },
    ];
  }

  /* Return a list of all auctions. */
  public async all(): Promise<Auction[]> {
    return this.auctions;
  }

  /* Adds a new auction to the database. */
  public async create({ bid, auctionItemId, bidderId }: CreateAuctionDto): Promise<Auction> {
    const auction = new Auction({ bid, auctionItemId, bidderId });
    this.auctions.push(auction);
    return auction;
  }

  /* Update an auction from the database. */
  public async update({ id, bid, auctionItemId, bidderId }: UpdateAuctionDto): Promise<void> {
    const newAuction = new Auction({ bid, auctionItemId, bidderId });
    const auctionToBeUpdated = this.auctions.findIndex(d => d.id === id);
    if (auctionToBeUpdated > -1) {
      this.auctions[auctionToBeUpdated] = newAuction;
    }
  }

  /* Removes an auction from the database. */
  public async remove(id: string): Promise<void> {
    const auctionToBeRemoved = this.auctions.findIndex(d => d.id === id);
    if (auctionToBeRemoved > -1) {
      this.auctions.splice(auctionToBeRemoved, 1);
    }
  }
}

export default AuctionsRepository;
