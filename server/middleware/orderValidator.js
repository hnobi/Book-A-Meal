import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default class ValidateOrders {
  static addOrderValidator(req, res, next) {
    const {
      price, quantity, totalPrice, userId, mealId, menuId
    } = req.body;

    const errors = {};
    if (price === undefined || quantity === undefined || totalPrice === undefined || mealId === undefined || menuId === undefined) {
      res.status(400)
        .json({
          message: 'All or some of the field is/are undefined',
        });
    } else if (!validator.isNumeric(price)) {
      errors.price = 'price of ordered meal must be a number';
    }
    else if (!validator.isNumeric(quantity)) {
      errors.quantity = 'quantity of ordered meal must be a number';
    }
    else if (!validator.isNumeric(totalPrice)) {
      errors.totalPrice = 'totalPrice of ordered meal must be a number';
    }
    if (!isEmpty(errors)) {
      return res.status(400)
        .json(errors);
    }
    next()
  }
}
