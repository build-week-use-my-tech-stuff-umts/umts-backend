import { ErrorHandler } from 'express-error-bouncer';
import bcrypt from 'bcrypt';
import helpers from '../helpers';

import models from '../database/models';

const { formatResponse } = helpers;

async function register(req, res, next) {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hashSync(password, 15);
    const [user, created] = await models.User.findOrCreate({
      where: { email },
      defaults: {
        ...req.body,
        password: hashedPassword,
      },
      attributes: ['id', 'firstName', 'lastName', 'email'],
    });
    if (!created && user) {
      throw new ErrorHandler(409, 'User with the email address already exists');
    }
    const { password: pass, ...userData } = user.get(); // remove password from the returned data
    return formatResponse(res, { message: 'success', user: userData }, 201);
  } catch (error) {
    next(error);
  }
}

export default {
  register,
};
