import Orders from './../models/order';

export default class OrderControllers {
  static addOrder(req, res) {
    const newId = Orders[Orders.length - 1].id + 1;
    const { price, quantity, totalPrice, userId, mealId, menuId } = req.body;
    Orders.push({
      id: newId,
      price,
      quantity,
      totalPrice,
      userId,
      mealId,
      menuId
    });
    res.status(200)
      .json({
        status: 'Success',
        message: 'Successfully added new Orders',
        Orders
      });
  }

  /**
   * Modify an order
   * @static
   * @param {object} req request   the server
   * @param {object} res    response by  the server
   * @returns {object} order modified error messages object or
   * success messages object with order modified data
   * @memberof OrderControllers
   */
  static modifyOrder(req, res) {
    const { price, quantity, totalPrice, userId, mealId, menuId } = req.body;
    for (let i = 0; i < Orders.length; i += 1) {
      if (Orders[i].id === parseInt(req.params.orderId, 10)) {
        Orders[i].price = (price) || Orders[i].price;
        Orders[i].quantity = (quantity) || Orders[i].quantity;
        Orders[i].price = (totalPrice) || Orders[i].totalPrice;
        Orders[i].mealId = (mealId) || Orders[i].mealId;
        Orders[i].mealId = (menuId) || Orders[i].menuId;
        return res.status(200)
          .json({
            status: 'Success',
            message: 'Successfully updated  an Order',
            Orders
          });
        console.log('hi')
      }
    }
    res.status(400);
    res.json({
      status: 'Failed',
      message: 'Order id does not exist',
    });
  }
  /**
   * Get all the orders
   * @static
   * @param {any} req 
   * @param {object} res return all orders object or error message
   * @memberof OrderControllers
   */
  static showAllOrders(req, res) {
    if (Orders.length !== 0) {
      return res.status(200)
        .json(Orders)
    }
    return res.status(400).json({ message: 'No Order available' });
  }
}
