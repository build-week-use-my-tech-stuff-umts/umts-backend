import { body } from 'express-validator';

export default () => [
  body('comment')
    .not()
    .isEmpty()
    .withMessage('The review comment cannot be empty'),
  body('rating')
    .not()
    .isEmpty()
    .withMessage('The rating is required')
    .isIn(['1', '2', '3', '4', '5'])
    .withMessage("A valid rating is either of ('1', '2', '3', '4', '5')"),
];
