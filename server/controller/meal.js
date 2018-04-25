import Meals from './../models/meal';

export default class MealControllers {
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
  static modifyMeal(req, res) {
    const { title, description, price, menuId } = req.body;
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

  static deleteMeal(req, res) {
    for (let i = 0; i < Meals.length; i += 1) {
      if (Meals[i].id === parseInt(req.params.mealId, 10)) {
        Meals.splice(i, 1);
        res.status(200);
        res.json({
          status: 'Success',
          message: 'Successfully deleted meal',
          Meals
        });
      }
    }
  }
  /**
   * 
   * 
   * @static showAllMealMea display all available or  read error mesage
   * @param {any} req 
   * @param {any} res 
   * @returns 
   * @memberof MealControllers
   */
  static showAllMealMeal(req, res) {
    if (Meals.length !== 0) {
      return res.status(200)
        .json(Meals);
    }
    return res.status(400).json({ message: 'No events available' });
  }
}