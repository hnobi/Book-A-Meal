import Menus from './../models/menu';

export default class MenusControllers {
  /**
  * Add menu to existing one 
  * @param {obj} req
  * @param {obj} res
  * @memberof MenusController
  * @return {obj} insertion error messages or success messages
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
    return res.status(201)
      .json({
        status: 'Success',
        message: 'Successfully added new menus',
        Menus
      });
  }
  /**
   * @static
   * @param {any} req 
   * @param {any} res 
   * @returns success message with the list of all available menu or error message
   * @memberof MenusControllers
   */
  static showMenu(req, res) {
    if (Menus.length !== 0) {
      return res.status(200)
        .json({
          status: 'Success',
          message: 'Successfully retrived all available menus', Menus
        });
    }
    return res.status(400).json({ message: 'No Menu available' });
  }


}