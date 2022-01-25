const mongoose = require("mongoose");


// e_menu Schema
const Schema = mongoose.Schema;

const e_menuSchema = new Schema({
  date:{
    type: Date,
    default: new Date().toLocaleDateString(),
    required: [true, "Date field is required"]
  },
  amountPrepared:{
    type: Number,
    required: [true, "Amount Prepared field is required"]
  },
  foodItem:{
    type: Schema.Types.ObjectId,
    ref: 'foodItem',
    required: [true, "Food Item field is required"]
  },
  chef:{
    type: Schema.Types.ObjectId,
    ref: 'chef',
    required: [true, "Chef field is required"]
  }
});

const E_Menu = mongoose.model('e_menu', e_menuSchema);
module.exports = E_Menu;
