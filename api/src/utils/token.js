const jwt = require("jsonwebtoken")

// create a jwt
const maxAge = 3 * 24 * 60 * 60;
module.exports.createToken = (id)=>{
  return jwt.sign({id}, "Ph@ntomVasploit99", {
    expiresIn: maxAge
  });
}
