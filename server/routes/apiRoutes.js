import express from 'express';
import MenuController from './../controller/menu';
import MealController from './../controller/meal';
import ValidateMenu from './../middleware/menuValidator'
import ValidateMeal from './../middleware/mealValidator'
const router = express.Router();
// menus
router.route('/menu')
  .post(ValidateMenu.addMenuValidator, MenuController.addMenu)
  .get(MenuController.showAllMenu);
// meal route
router.route('/meal')
  .post(ValidateMeal.addMealValidator, MealController.addMeal)
router.route('/meal/:mealId')
  .put(ValidateMeal.modifyMealValidator, MealController.modifyMeal)
  .delete(MealController.deleteMeal)













export default router;
