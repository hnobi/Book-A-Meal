import express from 'express';
import MenuController from './../controller/menu';
import ValidateMenu from './../middleware/menuValidator'

const router = express.Router();

router.route('/menu')
  .post(ValidateMenu.addMenuValidator, MenuController.addMenu)
  .get(MenuController.showAllMenu)














export default router;
