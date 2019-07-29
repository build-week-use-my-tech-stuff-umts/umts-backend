import { Router } from 'express';
import authRoutes from './auth';
import rentItemRoutes from './rentItem';

const router = Router();

router.get('/', (req, res) => res.status(200).json('Welcome'));
router.get('/error', (req, res, next) => {
  try {
    throw new Error('Internal server error');
  } catch (error) {
    next(error);
  }
});
router.use('/auth', authRoutes);
router.use(rentItemRoutes);

export default router;
