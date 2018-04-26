import validator from 'validator';

import isEmpty from 'lodash/isEmpty';
/**
 *validate all order
 * @export
 * @class ValidateOrders
 */
export default class ValidateOrders {
  /** @param {any} req
   * @param {any} res
   * @param {any} next
   * @returns error message or call the next middleware function
   * @static
   * @memberof ValidateOrders
   */
  static addOrderValidator(req, res, next) {
    const {
      price,
      quantity, totalPrice, mealId, menuId
    } = req.body;

    const errors = {};
    if (price === undefined || quantity === undefined || totalPrice === undefined || mealId === undefined || menuId === undefined) {
      res.status(400);
      res.json({
        message: 'All or some of the field is/are undefined',
      });
    } else {
      if (!validator.isEmpty(price)) {
        if (!validator.isNumeric(price)) {
          errors.price = 'price of ordered meal must be a number';
        }
      } else {
        errors.price = 'price of order is required';
      }
      if (!validator.isEmpty(quantity)) {
        if (!validator.isNumeric(quantity)) {
          errors.quantity = 'quantity of order must be a number';
        }
      } else {
        errors.quantity = 'quatity of order is required';
      }
      if (!validator.isEmpty(totalPrice)) {
        if (!validator.isNumeric(totalPrice)) {
          errors.totalPrice = 'totalPrice of ordered meal must be a number';
        }
      } else {
        errors.totalPrice = 'totalPrice of order is required';
      }
      if (!validator.isEmpty(mealId)) {
        if (!validator.isNumeric(mealId)) {
          errors.mealId = 'mealId of ordered meal must be a number';
        }
      } else {
        errors.mealId = 'mealId of order is required';
      }
      if (!validator.isEmpty(menuId)) {
        if (!validator.isNumeric(menuId)) {
          errors.menuId = 'menuId of ordered meal must be a number';
        }
      } else {
        errors.menuId = 'menuId of order is required';
      }
      if (!isEmpty(errors)) {
        return res.status(400)
          .json(errors);
      }
      next();
    }
  }
}
