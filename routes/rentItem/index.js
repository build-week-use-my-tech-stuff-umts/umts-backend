import { Router } from 'express';
import validate from '../../validators';
import validationRules from '../../validators/rules/rentItem';
import {
  addNewItem,
  getAllItems,
  getRentItemById,
  updateRentItem,
} from '../../controllers/rentItem';
import isAuthenticated from '../../middleware/auth';
import validateItemId from '../../middleware/rentItem';

const router = Router();

router.post('/rentItems', isAuthenticated, validationRules(), validate, addNewItem);
router.get('/rentItems', getAllItems);
router.get('/rentItems/:itemId', validateItemId, getRentItemById);
router.put(
  '/rentItems/:itemId',
  isAuthenticated,
  validationRules(),
  validate,
  validateItemId,
  updateRentItem,
);
export default router;
