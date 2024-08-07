import { Router } from 'express';
import {
  addWaterController,
  getDayWaterController,
  updateWaterController,
  deleteWaterController,
  getMonthWaterForFrontController,
} from '../controllers/water.js';
import {
  checkAllWaterDataMiddleware,
  checkWaterDataMiddleware,
  checkIdMiddleware,
} from '../middlewares/waterMiddleware.js';
import { protect } from '../middlewares/userMiddleware.js';

const waterRouter = Router();

waterRouter.use(protect);
waterRouter.post('/day', checkWaterDataMiddleware, addWaterController);

waterRouter.post('/day/:id', checkWaterDataMiddleware, addWaterController);
waterRouter.use('/day/:id', checkIdMiddleware);
waterRouter
  .route('/day/:id')
  .patch(checkWaterDataMiddleware, updateWaterController)
  .delete(deleteWaterController);

waterRouter.get('/fullDay', checkAllWaterDataMiddleware, getDayWaterController);

waterRouter.get(
  '/fullMonth',
  checkAllWaterDataMiddleware,
  getMonthWaterForFrontController,
);

export default waterRouter;
