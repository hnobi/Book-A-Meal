import mealData from './../models/meal';
/**
 * Class  for /api/vi/meal routes
 * @export
 * @class MealControllers
 */
export default class MealControllers {
  /**
  * @static Add meal
   * @param {obj} req
   * @param {obj} res
   * @returns {obj} insertion error messages or success messages
   * @memberof MealControllers
   */
  static addMeal(req, res) {
    const newId = mealData[mealData.length - 1].id + 1;
    const {
      title,
      description,
      price,
      menuId
    } = req.body;
    mealData.push({
      id: newId,
      title,
      description,
      price,
      menuId,
    });
    return res.status(200)
      .json({
        status: 'Success',
        message: 'Successfully added new mealData',
        mealData
      });
  }
  /**
  * @static Modify meal
   * @param {obj} req
   * @param {obj} res
   * @returns {obj} insertion error messages or success messages
   * @memberof MealControllers
   */
  static modifyMeal(req, res) {
    const {
      title, description, price, menuId
    } = req.body;
    for (let i = 0; i < mealData.length; i += 1) {
      if (mealData[i].id === parseInt(req.params.mealId, 10)) {
        mealData[i].title = (title) || mealData[i].title;
        mealData[i].description = (description) || mealData[i].description;
        mealData[i].menuId = (menuId) || mealData[i].menuId;
        mealData[i].price = (price) || mealData[i].price;
        return res.status(200)
          .json({
            status: 'Success',
            message: 'Successfully updated  a Meal',
            mealData,
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
  * @static Delete meal
   * @param{obj} req
   * @param {obj} res
   * @returns{obj} insertion error messages or success messages
   * @memberof MealControllers
   */
  static deleteMeal(req, res) {
    for (let i = 0; i < mealData.length; i += 1) {
      if (mealData[i].id === parseInt(req.params.mealId, 10)) {
        mealData.splice(i, 1);
        return res.status(200)
          .json({
            status: 'Success',
            message: 'Successfully deleted meal',
            mealData
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
    if (mealData.length !== 0) {
      return res.status(200)
        .json({
          status: 'Success',
          message: 'Successfully retrived all available mealData',
          mealData
        });
    }
    return res.status(400).json({ message: 'No available' });
  }
}
