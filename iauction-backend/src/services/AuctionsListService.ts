import AuctionItemsRepository from '../repositories/AuctionItemsRepository';
import AuctionsRepository from '../repositories/AuctionsRepository';
import BiddersRepository from '../repositories/BiddersRepository';

interface AuctionReturn {
  auctionItemId: string;
  auctionItemName: string;
  bid: number;
  bidderId: string;
  biddersName: string;
  id: string;
}

class AuctionsListService {
  private auctionItemsRepository: AuctionItemsRepository;

  private auctionsRepository: AuctionsRepository;

  private biddersRepository: BiddersRepository;

  constructor(
    auctionItemsRepository: AuctionItemsRepository,
    auctionsRepository: AuctionsRepository,
    biddersRepository: BiddersRepository,
  ) {
    this.auctionItemsRepository = auctionItemsRepository;
    this.auctionsRepository = auctionsRepository;
    this.biddersRepository = biddersRepository;
  }

  public async execute(biddersName: string): Promise<AuctionReturn[]> {
    const auctions = await this.auctionsRepository.all();
    let auctionReturn: Promise<AuctionReturn>[] = [];

    /* If no name was provided, then return all the entrances. */
    if (biddersName !== undefined) {
      const bidder = await this.biddersRepository.findByName(biddersName);
      const filteredAuctions = auctions.filter(a => a.bidderId === bidder?.id);
      auctionReturn = filteredAuctions.map(async obj => {
        let auctionItemName = await this.auctionItemsRepository.findItemNameById(obj.auctionItemId);

        if (!auctionItemName) {
          auctionItemName = '';
        }

        let name = '';

        if (bidder?.name) {
          name = bidder?.name;
        }

        return { ...obj, auctionItemName, biddersName: name } as AuctionReturn;
      });
    } else {
      auctionReturn = auctions.map(async obj2 => {
        const bidder = await this.biddersRepository.findBidderById(obj2.bidderId);
        let auctionItemName = await this.auctionItemsRepository.findItemNameById(obj2.auctionItemId);

        if (!auctionItemName) {
          auctionItemName = '';
        }

        let name = '';

        if (bidder) {
          name = bidder;
        }

        return { ...obj2, auctionItemName, biddersName: name } as AuctionReturn;
      });
    }

    return Promise.all(auctionReturn);
  }
}

export default AuctionsListService;
