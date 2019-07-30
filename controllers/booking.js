import { ErrorHandler } from 'express-error-bouncer';
import models from '../database/models';
import response from '../helpers';

const bookItem = async (req, res, next) => {
  try {
    const { user, rentItem } = req;
    const booking = await models.Booking.create({
      ...req.body,
      itemId: rentItem.id,
      userId: user.id,
    });
    if (!booking) {
      throw new ErrorHandler(500, 'Unable to create the booking');
    }
    response(res, { message: 'success', booking }, 201);
  } catch (error) {
    next(error);
  }
};

export default bookItem;
