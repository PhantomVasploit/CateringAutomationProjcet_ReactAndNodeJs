const mongoose = require("mongoose");

// foodItem Schema
const Schema = mongoose.Schema;
const foodItemSchema = new Schema({
  itemName: {
    type: String,
    trim: true,
    required: [true, "Item Name field is required"]
  },
  codeNumber: {
    type: String,
    trim: true,
    required: [true, "Code Number field is required"],
    unique: true
  },
  staffCafeteriaPrice: {
    type: Number,
    required: [true, "Staff Cafeteria Price is required"]
  },
  studentCafeteriaPrice: {
    type: Number,
    required: [true, "Staff Cafeteria Price is required"]
  }
});

const FoodItem = mongoose.model("foodItem", foodItemSchema);
module.exports = FoodItem;
