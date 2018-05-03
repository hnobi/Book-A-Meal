import express from 'express';
import MenuController from './../controller/menu';
import MealController from './../controller/meal';
import OrderController from './../controller/order';
import ValidateMenu from './../middleware/menuValidator';
import ValidateMeal from './../middleware/mealValidator';
import ValidateOrder from './../middleware/orderValidator';

const router = express.Router();
// menus
router.route('/menu')
  .post(ValidateMenu.addMenuValidator, MenuController.addMenu)
  .get(MenuController.showMenu);
// meal routes
router.route('/meal')
  .post(ValidateMeal.addMealValidator, MealController.addMeal)
  .get(MealController.showAllMeals);


router.route('/meal/:mealId')
  .put(ValidateMeal.modifyMealValidator, MealController.modifyMeal)
  .delete(MealController.deleteMeal);

// order routes
router.route('/order')
  .get(OrderController.showAllOrders)
  .post(ValidateOrder.addOrderValidator, OrderController.addOrder);
router.route('/order/:orderId')
  .put(ValidateOrder.modifyOrderValidator, OrderController.modifyOrder);
export default router;
