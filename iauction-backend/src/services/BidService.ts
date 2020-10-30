import Auction from '../models/Auction';
import AuctionsRepository from '../repositories/AuctionsRepository';
import AppError from '../errors/AppError';

interface RequestParameters {
  bid: number;
  bidderId: string;
  auctionItemId: string;
}

/* This service contains the main business logic of an bid made by a bidder. */
class BidService {
  private auctionsRepository: AuctionsRepository;

  constructor(vehiclesUsagesRepository: AuctionsRepository) {
    this.auctionsRepository = vehiclesUsagesRepository;
  }

  public async execute({ bid, bidderId, auctionItemId }: RequestParameters): Promise<Auction> {
    const highestBid = await this.auctionsRepository.findHighestBid(auctionItemId);

    /* New bids must always be hiegher than the current one. */
    if (!(bid > highestBid)) {
      throw new AppError('You cannot bid on an item with a lower price.');
    }

    /* Here an avaliable vehicle is borrowed. */
    return this.auctionsRepository.create({
      bid,
      bidderId,
      auctionItemId,
    });
  }
}

export default BidService;
