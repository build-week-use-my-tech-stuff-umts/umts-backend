import { Router } from 'express';
import {
  registerValidationRules,
  loginValidationRules,
  profileValidationRules,
} from '../../validators/rules/auth';
import validate from '../../validators';
import { register, login, updateProfile } from '../../controllers/auth';
import isAuth from '../../middleware/auth';

const router = Router();

router.post('/register', registerValidationRules(), validate, register);
router.post('/login', loginValidationRules(), validate, login);
router.put('/profile', isAuth, profileValidationRules(), validate, updateProfile);

export default router;
