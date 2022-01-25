const mongoose = require("mongoose");
const Customer = require("../../models/users/customer.model");
const E_Menu = require("../../models/e_menu.model");
const { createToken } = require("../../utils/token");

module.exports.customerRegister = (req, res)=>{
  try{
    const data = JSON.parse(req.body.body);
    // const data = req.body;
    Customer.create(data)
    .then((customer)=>{
      console.log("Account created successfully");
      const token = createToken(customer._id);
      res.status(201).json({"Message": "Account created successfully", token, customer});
    })
    .catch((e)=>{
      console.log(`Employee ID is already registered: ${e.message}`);
      res.status(401).json({"Message": "Employee ID is already registered"});
    })
  } catch(e){
    console.log(`Error on the customer registration handler: ${e.message}`);
  }
}


module.exports.customerLogin = async (req, res)=>{
  try {
    const data = JSON.parse(req.body.body);
    // const data = req.body;
    const customer = await Customer.login(data.registrationNumber, data.password);
    if(customer)
    {
      console.log(`Login successful`);
      const token = createToken(customer._id);
      res.status(200).json({"Message": "Login successful", token, customer});
    }else {
      console.log("Invalid Login Credentials");
      res.status(401).json({"Message":"Invalid Login Credentials"})
    }
  } catch (e) {
    console.log(`Error at the customer login handler: ${e.message}`);
  }
}



module.exports.customerUpdate = (req, res)=>{
  try {
    const toId = mongoose.Types.ObjectId;
    const customerId = toId(req.params.customerId);
    // const data = JSON.parse(req.body.body);
    const data = req.body;
      Customer.findOneAndUpdate({_id: customerId}, {
        username: data.username,
        email: data.email,
        password: data.password,
        registrationNumber: data.registrationNumber
      })
      .then(()=>{
        Customer.findOne({_id: customerId})
        .then((customer)=>{
          res.status(200).json({"Message": "Update Successful", customer});
        })
      })
  } catch (e) {
    console.log(`Error at the customer update handler: ${e.message}`);
  }
}

module.exports.customerDelete = (req, res)=>{
  try {
    const toId = mongoose.Types.ObjectId;
    const customerId = toId(req.params.customerId);
    Customer.findOneAndRemove({_id: customerId})
    .then(()=>{
      res.status(200).json({"Message": "Customer Account Terminated"});
    })
  } catch (e) {
    console.log(`Error at the customer delete handler: ${e.message}`);
  }
}

module.exports.getCustomerAccounts = async(req, res)=>{
  try {
    const customerAccounts = await Customer.find({});
    if(customerAccounts){
        res.status(200).json({"Message":"All Accounts Fetched", customerAccounts})
    }else {
      res.status(400).json({"Message": "Fetch Failed"});
    }

  } catch (e) {
      console.log(`Error at the getCustomerAccounts handler: ${e.message}`);
  }
}


const updateAmountPrepared = (data)=>{
  E_Menu.findOneAndUpdate({_id: data.itemOrdered}, {$inc:{amountPrepared: parseInt(-data.orderAmount)}})
  .then(()=>{
    console.log(`Amount Prepared Updated`);
  })
}

module.exports.addOrders = (req, res)=>{
  try {
    const data = req.body.body;
    console.log(`Data is: ${JSON.stringify(data)}`);
    const toId = mongoose.Types.ObjectId;
    const customerId = toId(req.params.customerId);
    Customer.findOne({_id: customerId})
    .then((customer)=>{
      customer.orders.push({e_menu: data.itemOrdered, orderAmount: data.orderAmount, orderCost: data.orderCost});
      customer.save();
      updateAmountPrepared(data);
    })
    .then((customer)=>{
      res.status(201).json({"Message": "Order saved successfully", customer});
    })
  } catch (e) {
    console.log(`Error at customer add order handler: ${e.message}`);
  }
}


module.exports.getCustomer = (req, res)=>{
  try {
    const toId = mongoose.Types.ObjectId;
    const customerId = toId(req.params.customerId);
    Customer.findOne({_id: customerId})
    .then((customer)=>{
      res.status(200).json({"Message": "Fetch Successful", customer});
    })
  } catch (e) {
      console.log(`Error at the Get Customer handler: ${e.message}`);
  }
}


module.exports.getCustomerOrders = async(req, res)=>{
  try {
    const toId = mongoose.Types.ObjectId;
    const customerId = toId(req.params.customerId);
    const customer = await Customer.findOne({_id: customerId}).populate({path:"orders.e_menu", populate: {path: "foodItem", model: "foodItem"}});
    res.status(200).json({customer});
  } catch (e) {
    console.log(`Error at get customer orders handler: ${e.message}`);
  }
}
