const mongoose = require("mongoose");
const Manager = require("../../models/users/employees/manager.model.js");
const {createToken} = require("../../utils/token.js");
// register manager controller
module.exports.register = (req, res)=>{
  try {
    Manager.create(JSON.parse(req.body.body))
    .then(function(manager){
      console.log(`Manager saved successfully to the database: ${manager}`);
      const token = createToken(manager._id);
      res.status(201).json({"Message":"Registration sucessful", token, manager});
      })
    .catch((e)=>{
      res.status(401).json({"Message": "That Email is already registered. Please Login"});
      console.log(e.message);
    })
  } catch (e) {
    console.log(`Error on the register manager handler: ${e.message}`);
  }
}


// login
module.exports.login = async (req, res) =>{
  try {
    const data = JSON.parse(req.body.body);
    const manager = await Manager.login(data.employeeNumber, data.password);
    // create token
    if(manager)
    {
      const token = createToken(manager._id);
      res.status(200).json({"Message":"Login successful", token, manager});
    }else{
      console.log("Invalid Login Credentials");
      res.status(401).json({"Message": "Invalid Login Credentials, Please Double Check"});
    }
  } catch (e) {
      console.log(`Error on the Manager Login Handler: ${e.message}`);
  }
}



module.exports.managerUpdate = (req, res)=>{
  try {
    const toId = mongoose.Types.ObjectId;
    const managerId = toId(req.params.managerId);
    const data = req.body;
    // const data = JSON.parse(req.body.body);
      Manager.findOneAndUpdate({_id: managerId}, {
        username: data.username,
        email: data.email,
        password: data.password,
        employeeNumber: data.employeeNumber,
        nationalId: data.nationalId
      })
      .then(()=>{
        Manager.findOne({_id: managerId})
        .then((manager)=>{
          res.status(200).json({"Message": "Update Successful", manager});
        })
      })
  } catch (e) {
    console.log(`Error at the manager update handler: ${e.message}`);
  }
}

module.exports.managerDelete = (req, res)=>{
  try {
    const toId = mongoose.Types.ObjectId;
    const managerId = toId(req.params.managerId);
    const data = req.body.body;
    Manager.findOneAndRemove({_id: managerId})
    .then(()=>{
      res.status(200).json({"Message": "Manager Account Terminated"});
    })
  } catch (e) {
    console.log(`Error at the manager delete handler: ${e.message}`);
  }
}

module.exports.getManagerAccounts = async(req, res)=>{
  try {
    const managerAccounts = await Manager.find({});
    if(managerAccounts){
        res.status(200).json({"Message":"All Accounts Fetched", managerAccounts})
    }else {
      res.status(400).json({"Message": "Fetch Failed"});
    }

  } catch (e) {
      console.log(`Error at the getManagerAccounts handler: ${e.message}`);
  }
}

module.exports.getManager = (req, res)=>{
  try {
    const toId = mongoose.Types.ObjectId;
    const managerId = toId(req.params.managerId);
    Manager.findOne({_id: managerId})
    .then((manager)=>{
      res.status(200).json({"Message":"Fetch Successful", manager});
    })
  } catch (e) {
    console.log(`Error at the get manager handler: ${e.message}`);
  } finally {

  }
}
