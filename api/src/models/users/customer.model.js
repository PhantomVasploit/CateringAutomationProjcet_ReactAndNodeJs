const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {orderSchema} = require("../order.model");


// setting up the manager model
const Schema = mongoose.Schema;
const customerSchema = new Schema({
  username:{
    type: String,
    required: [true, "Username field is required"],
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    required: [true, "Email field is required"],
    trim: true,
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: [true, "Password field is required"],
    minlength: [8, "Password has to have at least 8 characters"]
  },
  registrationNumber: {
    type: String,
    required:[true, "National Id field is required"],
    trim: true,
    unique:true
  },
  balance: {
    type: Number,
    min: 0,
    default: 0
  },
  orders: [orderSchema],
});

// hashing the Password before storing the user
customerSchema.pre("save", async function(next){
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
})

// loging in the customer
customerSchema.statics.login = async function(registrationNumber, password){
  const customer = await this.findOne({registrationNumber});
  if(customer){
    const auth =  bcrypt.compare(password, customer.password);
    if(auth){
      return customer;
    }
    throw Error("Incorrect password...\n");
  }
  throw Error("Unregistered password...\n");
}

const Customer = mongoose.model('customer', customerSchema);
module.exports = Customer;
