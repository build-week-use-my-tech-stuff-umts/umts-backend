import { body } from 'express-validator';

export default () => [
  body('quantity')
    .not()
    .isEmpty()
    .withMessage('Quantity of the item is required')
    .isInt({ gt: 0 })
    .withMessage('Quantity must be greater than 0'),

  body('startDate')
    .not()
    .isEmpty()
    .withMessage('The booking start date is required'),
  body('endDate')
    .not()
    .isEmpty()
    .withMessage('The booking end date is required'),
  body('pickupTime')
    .not()
    .isEmpty()
    .withMessage('Specify the pickup time'),
  body('pickupLocation')
    .not()
    .isEmpty()
    .withMessage('Specify the pickup location'),
];
