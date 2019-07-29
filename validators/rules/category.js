import { body } from 'express-validator';

export default () => [
  body('name')
    .not()
    .isEmpty()
    .withMessage('The category name is required'),
];
