const mongoose = require("mongoose");
const Chef = require("../../models/users/employees/chef.model");
const {createToken} = require("../../utils/token")


// chef registration logic
module.exports.chefRegister = (req, res)=>{
  try {
    Chef.create(JSON.parse(req.body.body))
    .then((chef)=>{
      console.log(`Chef account created successfully: ${chef}`);
      // create jwt token
      const token = createToken(chef._id);
      res.status(201).json({"Message": "Account created successfully", chef, token});
    })
    .catch((e)=>{
      console.log(`Error Message: ${e.message}`);
      res.status(401).json({"Error Message":`${e.message}`});
    })
  } catch (e) {
    console.log(`Error on the chef register handler: ${e.message}`);
  }
}

// chef login logic
module.exports.chefLogin = async(req,res)=>{
  try {
    const data = JSON.parse(req.body.body);
    const chef = await Chef.login(data.employeeNumber, data.password);
    if(chef)
    {
      console.log("Login successful");
      const token = createToken(chef._id);
      res.status(200).json({"Message": "Login successful", token, chef:chef});
    }else {
      console.log("Invalid Login Credentials");
      res.status(401).json({"Message": "Invalid Login Credentials"});
    }
  } catch (e) {
    console.log(`Error on the chef's login handler: ${e.message}`);
  }
}

module.exports.chefUpdate = (req, res)=>{
  try {
    const toId = mongoose.Types.ObjectId;
    const chefId = toId(req.params.chefId);
    // const data = req.body;
    const data = JSON.parse(req.body.body);
      Chef.findOneAndUpdate({_id: chefId}, {
        username: data.username,
        email: data.email,
        password: data.password,
        employeeNumber: data.employeeNumber,
        nationalId: data.nationalId
      })
      .then(()=>{
        Chef.findOne({_id: chefId})
        .then((chef)=>{
          res.status(200).json({"Message": "Update Successful", chef});
        })
      })
  } catch (e) {
    console.log(`Error at the chef update handler: ${e.message}`);
  }
}

module.exports.chefDelete = (req, res)=>{
  try {
    const toId = mongoose.Types.ObjectId;
    const chefId = toId(req.params.chefId);
    Chef.findOneAndRemove({_id: chefId})
    .then(()=>{
      res.status(200).json({"Message": "Chef Account Terminated"});
    })
  } catch (e) {
    console.log(`Error at the chef delete handler: ${e.message}`);
  }
}

module.exports.getChefAccounts = async(req, res)=>{
  try {
    const chefAccounts = await Chef.find({});
    if(chefAccounts){
        res.status(200).json({"Message":"All Accounts Fetched", chefAccounts})
    }else {
      res.status(400).json({"Message": "Fetch Failed"});
    }

  } catch (e) {
      console.log(`Error at the getChefAccounts handler: ${e.message}`);
  }
}

module.exports.chefAccount = async(req, res)=>{
  try {
    const toId = mongoose.Types.ObjectId;
    const chefId = toId(req.params.chefId);
    const chef = await Chef.findOne({_id: chefId});
    if(chef){
      res.status(200).json({"Message": "Fetch sucessful", chef});
    }else {
      res.status(401).json({"Message": "Fetch Failed"});
    }
  } catch (e) {
    console.log(`Error at the chefAccount handler: ${e.message}`);
  }
}
