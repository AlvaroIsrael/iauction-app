import { Router } from 'express';
import BiddersRepository from '../repositories/BiddersRepository';

const biddersRouter = Router();
const biddersRepository = new BiddersRepository();

/* Creates a new bidder. */
biddersRouter.post('/', async (request, response) => {
  const { name, age } = request.body;

  const bidder = await biddersRepository.create({ name, age });

  return response.status(200).json(bidder);
});

/* Updates a bidder. */
biddersRouter.put('/', async (request, response) => {
  const { id, name, age } = request.body;

  await biddersRepository.update({ id, name, age });

  return response.status(204).json();
});

/* Removes a bidder. */
biddersRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  await biddersRepository.remove(id);

  return response.status(204).json();
});

/* List all bidders. */
biddersRouter.get('/', async (request, response) => {
  const bidders = await biddersRepository.all();

  return response.status(200).json(bidders);
});

export default biddersRouter;
