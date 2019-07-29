import { body } from 'express-validator';

export default () => [
  body('name')
    .not()
    .isEmpty()
    .withMessage('The item name is required'),
  body('description')
    .not()
    .isEmpty()
    .withMessage('The item description is required'),
  body('price')
    .not()
    .isEmpty()
    .withMessage('The item rent price is required'),
  body('address')
    .not()
    .isEmpty()
    .withMessage('The address of the item is required'),
  body('catId')
    .not()
    .isEmpty()
    .withMessage('The category ID of the item is required'),
  body('imageUrl')
    .not()
    .isEmpty()
    .withMessage('The item image Url is required')
    .isURL()
    .withMessage('Invalid image Url'),
];
