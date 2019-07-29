import { Router } from 'express';
import validate from '../../validators';
import validationRules from '../../validators/rules/rentItem';
import { addNewItem, getAllItems, getRentItemById } from '../../controllers/rentItem';
import isAuthenticated from '../../middleware/auth';

const router = Router();

router.post('/rentItems', isAuthenticated, validationRules(), validate, addNewItem);
router.get('/rentItems', getAllItems);
router.get('/rentItems/:itemId', getRentItemById);
export default router;
