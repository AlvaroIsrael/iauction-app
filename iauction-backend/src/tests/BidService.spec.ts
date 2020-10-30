import AppError from '../errors/AppError';
import AuctionsRepository from '../repositories/AuctionsRepository';
import BidService from '../services/BidService';

describe('Bet on an item', () => {
  it('Should be able to bet on an auction item.', async () => {
    const auctionsRepository = new AuctionsRepository();
    const bidService = new BidService(auctionsRepository);

    const bet = await bidService.execute({
      bid: 2000,
      bidderId: '4dd67905-4c33-49be-b08c-0cdff8bfb842',
      auctionItemId: '289f03b6-e68d-410a-bd72-398c5fc8db83',
    });

    expect(bet).toHaveProperty('id');
    expect(bet.bid).toBe(2000);
    expect(bet.bidderId).toBe('4dd67905-4c33-49be-b08c-0cdff8bfb842');
    expect(bet.auctionItemId).toBe('289f03b6-e68d-410a-bd72-398c5fc8db83');
  });

  it('Should not be able to bet on an item with a value bellow the highest bidder.', async () => {
    const auctionsRepository = new AuctionsRepository();
    const bidService = new BidService(auctionsRepository);

    try {
      const bet = await bidService.execute({
        bid: 500,
        bidderId: '4dd67905-4c33-49be-b08c-0cdff8bfb842',
        auctionItemId: '289f03b6-e68d-410a-bd72-398c5fc8db83',
      });
    } catch (error) {
      expect(error).toBeInstanceOf(AppError);
    }
  });
});
