
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
    const messages = [];
    if (price === undefined || quantity === undefined || totalPrice === undefined || mealId === undefined) {
      res.status(400);
      res.json({
        message: 'All or some of the field is/are undefined',
      });
    } else {
      if (price !== '') {
        if (!(isNumber(price))) {
          messages.push('price of meal must be a number');
        }
      } else {
        messages.push('price of meal is required');
      }
      if (quantity !== '') {
        if (!(isNumber(quantity))) {
          messages.push('quantity of meal must be a number');
        }
      } else {
        messages.push('quantity of meal is required');
      }

      if (totalPrice !== '') {
        if (!(isNumber(totalPrice))) {
          messages.push('totalPrice of meal must be a number');
        }
      } else {
        ('totalPrice of meal is required');
      }
      if (mealId !== '') {
        if (!(isNumber(mealId))) {
          messages.push('mealId of meal must be a number');
        }
      } else {
        messages.push('mealId of meal is required');
      }
      if (messages.length !== 0) {
        return res.status(400)
          .json({ messages });
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
  * @returns error message or call the next middleware function
   * @memberof ValidateOrders
   */
  static modifyOrderValidator(req, res, next) {
    const {
      price,
      quantity, totalPrice, mealId, menuId
    } = req.body;
    const messages = [];
    if (price !== '') {
      if (!(isNumber(price))) {
        messages.push('price of meal must be a number');
      }
    }
    if (quantity) {
      if (!(isNumber(quantity))) {
        messages.push('quantity of meal must be a number');
      }
    }

    if (totalPrice) {
      if (!(isNumber(totalPrice))) {
        messages.push('totalPrice of meal must be a number');
      }
    }
    if (mealId) {
      if (!(isNumber(mealId))) {
        messages.push('mealId of meal must be a number');
      }
    }
    if (messages.length !== 0) {
      return res.status(400)
        .json({ messages });
    }
    next();
  }
}
