import validator from 'validator';

export default class ValidateMeals {
  static addMealValidator(req, res, next) {
    const {
      title,
      description,
      price
    } = req.body;

    const errors = {};
    if (title === undefined || description === undefined || price === undefined) {
      res.status(400)
        .json({
          message: 'All or some of the field is/are undefined',
        });
    } else {
      if (!validator.isEmpty(title)) {
        if (!validator.isLength(title, { min: 3, max: 20 })) {
          errors.title = 'Title of meal must be 3 characters but less than 20';
        }
      } else {
        errors.title = 'Title of meal is required';
      }
      if (!validator.isEmpty(description)) {
        if (!validator.isLength(description, { min: 20, max: undefined })) {
          errors.description = 'description must not be less than 20 characters';
        }
      } else {
        errors.description = ' description is required';
      }
      if (!validator.isEmpty(price)) {
        if (!validator.isNumeric(price)) {
          errors.price = 'price of a meal must be a number';
        }
      } else {
        errors.price = 'price is required';
      }
      if (Object.keys(errors).length !== 0) {
        return res.status(400)
          .json(errors);
      }
      next();
    }
  }
  static modifyMealValidator(req, res, next) {
    const { title, description, price } = req.body;
    const errors = {};
    //validating meal title
    if (title) {
      if (!validator.isLength(title, { min: 3, max: 20 })) {
        errors.title = 'Title of meal must be more than 2 characters but less than 20';
      }
    }
    //validating meal description
    if (description) {
      if (!validator.isLength(description, { min: 25, max: undefined })) {
        errors.description = 'meal description must not be less than 25 characters';
      }
    }
    //validating price
    if (price) {
      if (!validator.isNumeric(price)) {
        errors.price = 'price of a meal must be a number';
      }
    }
    if (Object.keys(errors).length !== 0) {
      return res.status(400)
        .json(errors);
    }
    next();
  }
}