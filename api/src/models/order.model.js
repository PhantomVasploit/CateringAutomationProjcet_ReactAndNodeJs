const mongoose = require("mongoose");

// model for the orders
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  e_menu: {
    type: Schema.Types.ObjectId,
    ref: 'e_menu',
    required: [true, "Item Ordered field is required"]
  },
  orderDateAndTime:{
    type: Date,
    default: Date.now,
    required: [true, "Date and Time field of order required"]
  },
  dateToday: {
    type: Date,
    default: new Date().toLocaleDateString(),
    required:[true, "Date field is required"]
  },
  orderAmount:{
    type: Number,
    required: [true, "Order Amount is required"]
  },
  orderCost: {
    type: Number,
    required: [true, "Cost Order is  required"]
  },
  cashier:{
    type: Schema.Types.ObjectId,
    ref: 'cashier'
  }
});

const Order = mongoose.model('order', orderSchema);
module.exports = {Order, orderSchema};
