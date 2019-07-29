import { ErrorHandler } from 'express-error-bouncer';
import models from '../database/models';
import response from '../helpers';
import { async } from '../../../../Library/Caches/typescript/3.5/node_modules/rxjs/internal/scheduler/async';

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
    if (!updatedItem) {
      throw new ErrorHandler(500, 'An Unknown error occurred while trying to update the item');
    }
    response(res, { item: updatedItem }, 200);
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
    if (!deleted) {
      throw new ErrorHandler(500, 'An Unknown error occurred while trying to  the item');
    }
    response(res, { message: 'success' }, 200);
  } catch (error) {
    next(error);
  }
};

export const getCategoryItems = async (req, res, next) => {
  try {
    const { catId } = req.params;
    const category = await models.Category.findOne({
      where: { id: catId },
      include: [
        {
          model: models.RentItem,
          as: 'rentItems',
        },
      ],
    });
    if (!category) {
      throw new ErrorHandler(404, 'Category with the specified ID does not exist');
    }
    response(res, { category, message: 'success' }, 200);
  } catch (error) {
    next(error);
  }
};

export const getAllCategories = async (req, res, next) => {
  try {
    const categories = await models.Category.findAll();
    response(res, { categories }, 200);
  } catch (error) {
    next(error);
  }
};
