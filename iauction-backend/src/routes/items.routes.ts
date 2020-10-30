import { Router } from 'express';
import AuctionItemsRepository from '../repositories/AuctionItemsRepository';

const itemsRouter = Router();
const auctionItemsRepository = new AuctionItemsRepository();

/* Creates a new auction's item. */
itemsRouter.post('/', async (request, response) => {
  const { name, value } = request.body;

  const auctionItem = await auctionItemsRepository.create({ name, value });

  return response.status(200).json(auctionItem);
});

/* Updates an auction's item. */
itemsRouter.put('/', async (request, response) => {
  const { id, name, value } = request.body;

  await auctionItemsRepository.update({ id, name, value });

  return response.status(204).json();
});

/* Removes an auction's item. */
itemsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  await auctionItemsRepository.remove(id);

  return response.status(204).json();
});

/* List all auction's items. */
itemsRouter.get('/', async (request, response) => {
  const auctionItems = await auctionItemsRepository.all();

  return response.status(200).json(auctionItems);
});

export default itemsRouter;
