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
}
