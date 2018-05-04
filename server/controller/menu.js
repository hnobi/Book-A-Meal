import menuData from './../models/menu';

export default class menuDataControllers {
  /**
  * Add menu to existing one 
  * @param {obj} req
  * @param {obj} res
  * @memberof menuDataController
  * @return {obj} insertion error messages or success messages
 */
  static addMenu(req, res) {
    const newId = menuData[menuData.length - 1].id + 1;
    const {
      title,
      meals,
      date
    } = req.body;
    menuData.push({
      title,
      id: newId,
      meals,
      date
    });
    return res.status(201)
      .json({
        status: 'Success',
        message: 'Successfully added new menuData',
        menuData
      });
  }
  /**
   * @static
   * @param {any} req 
   * @param {any} res 
   * @returns success message with the list of all available menu or error message
   * @memberof menuDataControllers
   */
  static showMenu(req, res) {
    for (let i = 0; i < menuData.length; i = i + 1) {
      if (menuData[i].id === parseInt(req.params.menuId, 10)) {
        return res.status(200)
          .json({
            status: 'Success',
            message: 'Successfully  available menu for the day',
            Menu: menuData[i],
          });
      }
    }
    res.status(400)
      .json({
        status: 'failed',
        message: 'menu  id does not exist',
      });
  }


}





