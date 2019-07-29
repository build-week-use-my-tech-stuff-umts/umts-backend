import { Router } from 'express';
import validate from '../../validators';
import validationRules from '../../validators/rules/rentItem';
import catValidationRules from '../../validators/rules/category';
import {
  addNewItem,
  getAllItems,
  getRentItemById,
  updateRentItem,
  deleteRentItem,
} from '../../controllers/rentItem';
import { getCategoryItems, getAllCategories, createCategory } from '../../controllers/category';
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

router.delete('/rentItems/:itemId', isAuthenticated, validateItemId, deleteRentItem);
router.get('/rentItems/:catId/categories', getCategoryItems);
router.get('/categories', getAllCategories);
router.post('/categories', catValidationRules(), validate, createCategory);
export default router;
