import express from 'express';
import MenuController from './../controller/menu';
import MealController from './../controller/meal';
import ValidateMenu from './../middleware/menuValidator'

const router = express.Router();

router.route('/menu')
  .post(ValidateMenu.addMenuValidator, MenuController.addMenu)
  .get(MenuController.showAllMenu);
// meal route
router.route('/meal')
  .post(MealController.addMeal)












export default router;
