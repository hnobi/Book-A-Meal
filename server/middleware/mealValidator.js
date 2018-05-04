import validator from 'validator';
import isNumber from 'is-number';

export default class ValidateMeals {
  /**
  * Validates addMeal before allowing access to controller class
   * @param {any} req
   * @param {any} res
   * @param {any} next
   * @returns validation error messages object or contents of request.body object
   * @memberof ValidateMeals
   */
  static addMealValidator(req, res, next) {
    const {
      title,
      description,
      price
    } = req.body;

    const messages = [];
    if (title === undefined || description === undefined || price === undefined) {
      res.status(400)
        .json({
          message: 'All or some of the field is/are undefined',
        });
    } else {
      if (!validator.isEmpty(title)) {
        if (!validator.isLength(title, { min: 3, max: 20 })) {
          messages.push('Title of meal must be 3 characters but less than 20');
        }
      } else {
        messages.push('Title of meal is required');
      }
      if (!validator.isEmpty(description)) {
        if (!validator.isLength(description, { min: 20, max: undefined })) {
          messages.push('description must not be less than 20 characters');
        }
      } else {
        messages.push(' description is required');
      }
      if (price !== '') {
        if (!(isNumber(price))) {
          messages.push('price of meal must be a number');
        }
      } else { errors.price = 'price of meal is required'; }
      if (messages.length !== 0) {
        return res.status(400)
          .json({ messages });
      }
      next();
    }
  }
  /**
   * @static * Validates updateMeal before allowing access to controller class
   * @param {any} req
   * @param {any} res
   * @param {any} next
   * @returns validation error messages object or contents of request.body object
   * @memberof ValidateMeals
   * */
  static modifyMealValidator(req, res, next) {
    const { title, description, price } = req.body;
    const messages = [];
    // validating meal title length
    if (title) {
      if (!validator.isLength(title, { min: 3, max: 20 })) {
        messages.push('Title of meal must be more than 2 characters but less than 20');
      }
    }
    // validating meal description length
    if (description) {
      if (!validator.isLength(description, { min: 25, max: undefined })) {
        messages.push('meal description must not be less than 25 characters');
      }
    }
    // validating price length
    if (price) {
      if (!(isNumber(price))) {
        messages.push('price of meal must be a number');
      }
    }
    if (messages.length !== 0) {
      return res.status(400)
        .json({ messages });
    }
    next();
  }
}
