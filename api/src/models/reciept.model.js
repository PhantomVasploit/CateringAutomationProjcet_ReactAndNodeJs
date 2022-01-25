const mongoose = require("mongoose");

// Reciept Schema
const Schema = mongoose.Schema;
const recieptSchema = new Schema({
  order: {
    type: Schema.Types.ObjectId,
    ref: 'order',
    required: [true, "Order Number field is required"]
  }
})

const Reciept = mongoose.model('reciept', recieptSchema);
module.exports = Reciept;
