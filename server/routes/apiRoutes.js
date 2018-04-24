import express from 'express';
import MenuController from './../controller/menu';

const router = express.Router();

router.route('/menu')
  .post(MenuController.addMenu)















export default router;
