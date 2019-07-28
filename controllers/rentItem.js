import { ErrorHandler } from 'express-error-bouncer';
import models from '../database/models';
import response from '../helpers';

/**
 *
 * Creates new rent item
 * @param { object } req
 * @param { object } res
 * @param { func } next
 * @returns
 */
export const addNewItem = async (req, res, next) => {
  try {
    const item = await models.RentItem.create({ ...req.body, userId: req.user.id });
    if (!item) {
      throw new ErrorHandler(500, 'Internal server error');
    }
    return response(res, { item }, 201);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * Retrieves all the rent items in the database
 * @param {object} req
 * @param {object} res
 * @param {func} next
 */
export const getAllItems = async (req, res, next) => {
  try {
    const items = await models.RentItem.findAll({
      include: [
        {
          model: models.User,
          as: 'owner',
        },
        {
          model: models.Review,
          as: 'reviews',
        },
      ],
      order: [
        ['createdAt', 'DESC'],
      ],
    });
    return response(res, { rentItems: items, message: 'success' }, 200);
  } catch (error) {
    next(error);
  }
};
