import validator from 'validator';

export default class ValidateMenus {
  /**
  * Validates addmenu details before allowing access to controller class
   * @static
   * @param {any} req 
   * @param {any} res 
   * @param {any} next 
   * @returns validation error messages object or contents of request.body object
   * @memberof ValidateMenus
   */
  static addMenuValidator(req, res, next) {
    const {
      title,
      meals,
      date
    } = req.body;

    const messages = [];
    if (title === undefined || meals === undefined || date === undefined) {
      res.status(400)
        .json({
          message: 'All or some of the field is/are undefined',
        });
    } else {
      if (!validator.isEmpty(title)) {
        if (!validator.isLength(title, { min: 5, max: 20 })) {
          messages.push('Title of menu must be more than 5 characters but less than 20');
        }
      } else {
        messages.push('Title of menu is required');
      }
      if (!validator.isEmpty(meals)) {
        messages.push(' meals is required');
      }
      if (validator.isEmpty(date)) {
        messages.push('date is required');
      }
      if (messages.length !== 0) {
        return res.status(400)
          .json({ messages });
      }
      next();
    }
  }
}
