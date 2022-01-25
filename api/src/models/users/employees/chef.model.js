const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


// setting up the manager model
const Schema = mongoose.Schema;
const chefSchema = new Schema({
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
  employeeNumber: {
    type: String,
    required:[true, "National Id field is required"],
    trim: true,
    unique:true
  },
  nationalId: {
    type: String,
    required:[true, "National Id field is required"],
    trim: true,
    unique:true
  }
});

// hashinh the Password before storing the user
chefSchema.pre("save", async function(next){
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
})

// loggin in the chef
chefSchema.statics.login = async function(employeeNumber, password){
  const chef = await this.findOne({employeeNumber});
  if(chef){
    const auth =  bcrypt.compare(password, chef.password);
    if(auth){
      return chef;
    }
    throw Error("Incorrect password...\n");
  }
  throw Error("Unregistered password...\n");
}

const Chef = mongoose.model('chef', chefSchema);
module.exports = Chef;
