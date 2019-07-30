import { ErrorHandler } from 'express-error-bouncer';
import models from '../database/models';
import response from '../helpers';

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
    if (category) {
      response(res, { category, message: 'success' }, 200);
    }
    throw new ErrorHandler(404, 'Category with the specified ID does not exist');
  } catch (error) {
    next(error);
  }
};

export const getAllCategories = async (req, res, next) => {
  try {
    const categories = await models.Category.findAll();
    if (categories) {
      response(res, { categories }, 200);
    }
    throw new ErrorHandler(400, 'No category found');
  } catch (error) {
    next(error);
  }
};

export const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const [category, created] = await models.Category.findOrCreate({
      where: { name },
    });
    if (!created && category) {
      throw new ErrorHandler(409, 'Category already exists');
    }
    response(res, { category }, 201);
  } catch (error) {
    next(error);
  }
};
