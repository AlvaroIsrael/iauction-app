import { Router } from 'express';
import AuctionsRepository from '../repositories/AuctionsRepository';
import BidService from '../services/BidService';

const auctionsRouter = Router();
const auctionsRepository = new AuctionsRepository();

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
  const auctions = await auctionsRepository.all();

  return response.status(200).json(auctions);
});

export default auctionsRouter;
