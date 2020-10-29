import { Router } from 'express';
import auctionsRouter from './auctions.routes';
import itemsRouter from './items.routes';
import biddersRouter from './bidders.routes';

const routes = Router();

routes.use('/auctions', auctionsRouter);
routes.use('/items', itemsRouter);
routes.use('/bidders', biddersRouter);

export default routes;
