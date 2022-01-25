const mongoose = require("mongoose");
const Cashier = require("../../models/users/employees/cashier.model");
const {createToken} = require("../../utils/token");

module.exports.cashierRegister = (req, res)=>{
  try {
    Cashier.create(JSON.parse(req.body.body))
    .then((cashier)=>{
      console.log(`Account creation successful: ${cashier}`);
      const token = createToken(cashier._id);
      res.status(201).json({"Message":"Account creation successful", token, cashier});
    })
    .catch((e)=>{
      console.log(`Employee number is already registered ${e.message}`);
      res.status(401).json({"Message":`Employee Number is already registered ${e.message}`});
    })
  } catch (e) {
    console.log(`Error at the cashier register handler: ${e.message}`);
  }
}

module.exports.cashierLogin = async(req, res)=>{
  try {
    const data = JSON.parse(req.body.body);
    const cashier = await Cashier.login(data.employeeNumber, data.password);
    if(cashier)
    {
      const token = createToken(cashier._id);
      console.log("Login successful");
      res.status(200).json({"Message":"Login Successful", token, cashier});
    }else {
      console.log("Invalid Login Credentials");
      res.status(401).json({"Message":"Invalid Login Credentials"});
    }
  } catch (e) {
    console.log(`Error at the cashier login handler: ${e.message}`);
  }
}


module.exports.cashierUpdate = (req, res)=>{
  try {
    const toId = mongoose.Types.ObjectId;
    const cashierId =toId(req.params.cashierId);
    const data = req.body;
    // const data = JSON.parse(req.body.body);
      Cashier.findOneAndUpdate({_id: cashierId}, {
        username: data.username,
        email: data.email,
        password: data.password,
        employeeNumber: data.employeeNumber,
        nationalId: data.nationalId
      })
      .then(()=>{
        Cashier.findOne({_id: cashierId})
        .then((cashier)=>{
          res.status(200).json({"Message": "Update Successful", cashier});
        })
      })
  } catch (e) {
    console.log(`Error at the cashier update handler: ${e.message}`);
  }
}

module.exports.cashierDelete = (req, res)=>{
  try {
    const toId = mongoose.Types.ObjectId;
    const cashierId =toId(req.params.cashierId);
    Cashier.findOneAndRemove({_id: cashierId})
    .then(()=>{
      res.status(200).json({"Message": "Cashier Account Terminated"});
    })
  } catch (e) {
    console.log(`Error at the cashier delete handler: ${e.message}`);
  }
}

module.exports.getCashierAccounts = async(req, res)=>{
  try {
    const cashierAccounts = await Cashier.find({});
    if(cashierAccounts){
        res.status(200).json({"Message":"All Accounts Fetched", cashierAccounts})
    }else {
      res.status(400).json({"Message": "Fetch failed"});
    }

  } catch (e) {
      console.log(`Error at the getCashierAccounts handler: ${e.message}`);
  }
}


module.exports.cashierAccount = (req, res)=>{
  try {
    const toId = mongoose.Types.ObjectId;
    const cashierId = toId(req.params.cashierId);
    Cashier.findOne({_id: cashierId})
    .then((cashier)=>{
      res.status(200).json({"Message":"Fetch successful", cashier})
    })
  } catch (e) {
    console.log(`Error at the get cashier handler: ${e.message}`);
  }
}
