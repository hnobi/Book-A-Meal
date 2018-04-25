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

    }
    next()
  }
}
