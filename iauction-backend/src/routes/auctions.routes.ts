import { Router } from 'express';
import AuctionsRepository from '../repositories/AuctionsRepository';
import BidService from '../services/BidService';
import AuctionsListService from '../services/AuctionsListService';
import AuctionItemsRepository from '../repositories/AuctionItemsRepository';
import BiddersRepository from '../repositories/BiddersRepository';

const auctionsRouter = Router();
const auctionItemsRepository = new AuctionItemsRepository();
const auctionsRepository = new AuctionsRepository();
const biddersRepository = new BiddersRepository();
const auctionsListService = new AuctionsListService(auctionItemsRepository, auctionsRepository, biddersRepository);

/* Creates a new auction. */
auctionsRouter.post('/bid', async (request, response) => {
  const { bid, bidderId, auctionItemId } = request.body;

  const bidService = new BidService(auctionsRepository);

  try {
    const auction = await bidService.execute({ bid, bidderId, auctionItemId });
    return response.status(200).json({
      message: 'Bet sucessfully made.',
      auction,
    });
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
});

/* Removes an auction. */
auctionsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  await auctionsRepository.remove(id);

  return response.status(204).json();
});

/* List all auctions. */
auctionsRouter.get('/', async (request, response) => {
  const name = request.query.name as string;

  const auctions = await auctionsListService.execute(name);

  return response.status(200).json(auctions);
});

export default auctionsRouter;
