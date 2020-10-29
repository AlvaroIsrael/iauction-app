import { Router } from 'express';
import AuctionsRepository from '../repositories/AuctionsRepository';
// import ListDriverService from '../services/ListDriverService';

const auctionsRouter = Router();
const auctionsRepository = new AuctionsRepository();

/* Creates a new auction. */
auctionsRouter.post('/', async (request, response) => {
  const { bid, bidderId, auctionItemId } = request.body;

  const auction = await auctionsRepository.create({ bid, bidderId, auctionItemId });

  return response.status(200).json(auction);
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
