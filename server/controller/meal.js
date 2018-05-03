import Meals from './../models/meal';
/**
 * Class  for /api/vi/meal routes
 * @export
 * @class MealControllers
 */
export default class MealControllers {
  /**
  * @static Add meal to the existing events
   * @param {obj} req
   * @param {obj} res
   * @returns {obj} insertion error messages or success messages
   * @memberof MealControllers
   */
  static addMeal(req, res) {
    const newId = Meals[Meals.length - 1].id + 1;
    const {
      title,
      description,
      price,
      menuId
    } = req.body;
    Meals.push({
      id: newId,
      title,
      description,
      price,
      menuId
    });
    res.status(200)
      .json({
        status: 'Success',
        message: 'Successfully added new meals',
        Meals
      });
  }
  /**
  * @static Modify meal to the existing events
   * @param {obj} req
   * @param {obj} res
   * @returns {obj} insertion error messages or success messages
   * @memberof MealControllers
   */
  static modifyMeal(req, res) {
    const {
      title, description, price, menuId
    } = req.body;
    for (let i = 0; i < Meals.length; i += 1) {
      if (Meals[i].id === parseInt(req.params.mealId, 10)) {
        Meals[i].title = (title) || Meals[i].title;
        Meals[i].description = (description) || Meals[i].description;
        Meals[i].menuId = (menuId) || Meals[i].menuId;
        Meals[i].price = (price) || Meals[i].price;
        return res.status(200)
          .json({
            status: 'Success',
            message: 'Successfully updated  a Meal',
            Meals,
          });
      }
    }
    res.status(400);
    res.json({
      status: 'Failed',
      message: 'Meal id does not exist',
    });
  }
  /**
  * @static Delete meal to the existing events
   * @param{obj} req
   * @param {obj} res
   * @returns{obj} insertion error messages or success messages
   * @memberof MealControllers
   */
  static deleteMeal(req, res) {
    for (let i = 0; i < Meals.length; i += 1) {
      if (Meals[i].id === parseInt(req.params.mealId, 10)) {
        Meals.splice(i, 1);
        return res.status(200)
          .json({
            status: 'Success',
            message: 'Successfully deleted meal',
            Meals
          });
      }
    }
    return res.status(400)
      .json({
        status: 'Failed',
        message: 'Meal id does not exist',
      });
  }
  /**
   *
   *
   * @static showAllMeal all available o  read error message
   * @param {any} req
   * @param {any} res
   * @returns
   * @memberof MealControllers
   */
  static showAllMeals(req, res) {
    if (Meals.length !== 0) {
      return res.status(200)
        .json({
          status: 'Success',
          message: 'Successfully retrived all available meals',
          Meals
        });
    }
    return res.status(400).json({ message: 'No events available' });
  }
}
