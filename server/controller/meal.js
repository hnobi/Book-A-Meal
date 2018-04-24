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



}