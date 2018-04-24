import Menus from './../models/menu';

export default class MenusControllers {
  static addMenu(req, res) {
    const newId = Menus[Menus.length - 1].id + 1;
    const {
      id,
      Meals,
      date
    } = req.body;
    Menus.push({
      id: newId,
      Meals,
      date
    });
    res.status(200)
      .json({
        status: 'Success',
        message: 'Successfully added new menus',
        Menus
      });

  }










}