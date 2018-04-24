import validator from 'validator';

export default class ValidateMenus {
  static addMenuValidator(req, res, next) {
    const {
      title,
      meals,
      date
    } = req.body;

    const errors = {};
    if (title === undefined || meals === undefined || date === undefined) {
      res.status(400)
        .json({
          message: 'All or some of the field is/are undefined',
        });
    } else {
      if (!validator.isEmpty(title)) {
        if (!validator.isLength(title, { min: 5, max: 20 })) {
          errors.title = 'Title of menu must be more than 5 characters but less than 20';
        }
      } else {
        errors.title = 'Title of menu is required';
      }
      if (!validator.isEmpty(meals)) {
        if (!validator.isLength(meals, { min: 20, max: undefined })) {
          errors.meals = 'meals must not be less than 20 characters';
        }
      } else {
        errors.meals = ' meals is required';
      }

      if (validator.isEmpty(date)) {
        errors.date = 'date is required';

      }



      if (Object.keys(errors).length !== 0) {
        return res.status(400)
          .json(errors);
      }
      next();
    }
  }




}