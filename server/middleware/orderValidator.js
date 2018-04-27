
import isNumber from 'is-number';
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
      if (price !== '') {
        if (!(isNumber(price))) {
          errors.price = 'price of meal must be a number';
        }
      } else {
        errors.price = 'price of meal is required';
      }
      if (quantity !== '') {
        if (!(isNumber(quantity))) {
          errors.quantity = 'quantity of meal must be a number';
        }
      } else {
        errors.quantity = 'quantity of meal is required';
      }

      if (totalPrice !== '') {
        if (!(isNumber(totalPrice))) {
          errors.totalPrice = 'totalPrice of meal must be a number';
        }
      } else {
        errors.totalPrice = 'totalPrice of meal is required';
      }
      if (mealId !== '') {
        if (!(isNumber(mealId))) {
          errors.mealId = 'mealId of meal must be a number';
        }
      } else {
        errors.mealId = 'mealId of meal is required';
      }
      if (menuId !== '') {
        if (!(isNumber(menuId))) {
          errors.menuId = 'menuId of  must be a number';
        }
      } else {
        errors.menuId = 'menuId  is required';
      }
      if (!isEmpty(errors)) {
        return res.status(400)
          .json(errors);
      }
      next();
    }
  }
  //
  /**
   *
   *
   * @static
   * @param {any} req
   * @param {obj} res
   * @param {any} next
   * @returns
   * @memberof ValidateOrders
   */
  static modifyOrderValidator(req, res, next) {
    const {
      price,
      quantity, totalPrice, mealId, menuId
    } = req.body;
    const errors = {};
    if (price !== '') {
      if (!(isNumber(price))) {
        errors.price = 'price of meal must be a number';
      }
    }
    if (quantity) {
      if (!(isNumber(quantity))) {
        errors.quantity = 'quantity of meal must be a number';
      }
    }

    if (totalPrice) {
      if (!(isNumber(totalPrice))) {
        errors.totalPrice = 'totalPrice of meal must be a number';
      }
    }
    if (mealId) {
      if (!(isNumber(mealId))) {
        errors.mealId = 'mealId of meal must be a number';
      }
    }
    if (menuId) {
      if (!(isNumber(menuId))) {
        errors.menuId = 'menuId of  must be a number';
      }
    }
    if (Object.keys(errors).length !== 0) {
      return res.status(400)
        .json(errors);
    }
    next();
  }
}
