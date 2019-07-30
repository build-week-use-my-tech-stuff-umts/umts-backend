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
    if (item) {
      return response(res, { item }, 201);
    }
    throw new ErrorHandler(500, 'Internal server error');
  } catch (error) {
    return next(error);
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
      order: [['createdAt', 'DESC']],
    });
    return response(res, { rentItems: items, message: 'success' }, 200);
  } catch (error) {
    return next(error);
  }
};

export const getRentItemById = async (req, res, next) => {
  try {
    response(res, { item: req.rentItem, message: 'success' }, 200);
  } catch (error) {
    return next(error);
  }
};

export const updateRentItem = async (req, res, next) => {
  try {
    const { rentItem, user, body } = req;
    if (rentItem.owner.id !== user.id) {
      throw new ErrorHandler(400, 'You can only update your own item');
    }
    const updatedItem = await rentItem.update(body);
    if (updatedItem) {
      response(res, { item: updatedItem }, 200);
    }
    throw new ErrorHandler(500, 'An Unknown error occurred while trying to update the item');
  } catch (error) {
    next(error);
  }
};

export const deleteRentItem = async (req, res, next) => {
  try {
    const { rentItem, user } = req;
    if (rentItem.owner.id !== user.id) {
      throw new ErrorHandler(400, 'You can only delete your own item');
    }
    const deleted = await rentItem.destroy();
    if (deleted) {
      response(res, { message: 'success' }, 200);
    }
    throw new ErrorHandler(500, 'An Unknown error occurred while trying to  the item');
  } catch (error) {
    next(error);
  }
};
