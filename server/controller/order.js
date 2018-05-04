import orderData from './../models/order';
/**
 * @export
 * @class OrderControllers
 */
export default class OrderControllers {
  /**
  * Add order to the existing ones
  * @param {obj} req
  * @param {obj} res
  * @memberof MenusController
  * @return {obj} insertion error messages or success messages
 */
  static addOrder(req, res) {
    const newId = orderData[orderData.length - 1].id + 1;
    const {
      price, quantity, totalPrice, userId, mealId
    } = req.body;
    orderData.push({
      id: newId,
      price,
      quantity,
      totalPrice,
      userId,
      mealId
    });
    res.status(200)
      .json({
        status: 'Success',
        message: 'Successfully added new Orders',
        orderData
      });
  }

  /**
   * Modify an order
   * @param {object} req request   the server
   * @param {object} res    response by  the server
   * @returns {object} order modified error messages object or success message
   * success messages object with order modified data
   * @memberof OrderControllers
   */
  static modifyOrder(req, res) {
    const {
      price, quantity, totalPrice, mealId
    } = req.body;
    for (let i = 0; i < orderData.length; i += 1) {
      if (orderData[i].id === parseInt(req.params.orderId, 10)) {
        orderData[i].price = (price) || orderData[i].price;
        orderData[i].quantity = (quantity) || orderData[i].quantity;
        orderData[i].price = (totalPrice) || orderData[i].totalPrice;
        orderData[i].mealId = (mealId) || orderData[i].mealId;
        return res.status(200)
          .json({
            status: 'Success',
            message: 'Successfully updated  an Order',
            orderData
          });
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
   * @param {any} req
   * @param {object} res return all orders object or error message
   * @returns {object} order modified error messages object or
   * @memberof OrderControllers
   */
  static showAllOrders(req, res) {
    if (orderData.length !== 0) {
      for (let i = 0; i < orderData.length; i += 1) {
        orderData.Total = orderData[i].price * orderData.quantity;
        return res.status(200)
          .json({
            status: 'Success',
            message: 'Successfully retrived all available orders',
            orderData
          });
      }
    }
    return res.status(400).json({ message: 'No Order available' });
  }
}
