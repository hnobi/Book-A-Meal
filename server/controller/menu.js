import Menus from './../models/menu';

export default class MenusControllers {
  /**
  * add menu to the existing events
                       * @param {obj} req
                       * @param {obj} res
                       * @memberof MenusController
                       * @return {obj} insertion error messages or success messages
 * @class MenusControllers
 */
  static addMenu(req, res) {
    const newId = Menus[Menus.length - 1].id + 1;
    const {
      title,
      id,
      meals,
      date
    } = req.body;
    Menus.push({
      id: newId,
      meals,
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