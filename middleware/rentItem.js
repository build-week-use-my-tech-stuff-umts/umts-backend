import { ErrorHandler } from 'express-error-bouncer';
import models from '../database/models';

export default async (req, res, next) => {
  try {
    const { itemId } = req.params;
    const item = await models.RentItem.findOne({
      where: { id: itemId },
      include: [
        {
          model: models.User,
          as: 'owner',
          attributes: ['id', 'firstName', 'lastName'],
        },
        {
          model: models.Review,
          as: 'reviews',
          attributes: ['id', 'comment', 'rating'],
          include: [
            {
              model: models.User,
              as: 'reviewer',
              attributes: ['id', 'firstName', 'lastName'],
            },
          ],
        },
      ],
    });
    if (!item) {
      throw new ErrorHandler(404, 'Item with the specified Id does not exist');
    }
    req.rentItem = item;
    next();
  } catch (error) {
    return next(error);
  }
};
