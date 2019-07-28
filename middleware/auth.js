import { ErrorHandler } from 'express-error-bouncer';
import { decodeToken } from '../helpers/auth';
import models from '../database/models';

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers.authorization || null;

    if (!token) {
      throw new ErrorHandler(403, 'You must login to perform the operation');
    } else {
      const { __uuid } = (await decodeToken(token)) || { __uuid: null };
      const user = __uuid && (await models.User.findOne({ where: { id: __uuid } }));
      if (!user) {
        throw new ErrorHandler(403, 'You must login to perform the operation');
      }
      req.user = user;
      next();
    }
  } catch (error) {
    next(error);
  }
};

export default isAuthenticated;
