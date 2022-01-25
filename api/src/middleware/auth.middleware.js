const jwt = require("jsonwebtoken");
// verify user token
module.exports.requireAuth = (req, res, next)=>{
  try {
    const bearerHeader = req.headers["authorization"];
    if(!bearerHeader){
      return res.status(401).json({"Message": "Authentication Header Not Set"});
    }else{
      const bearer = bearerHeader.split(' ');
      const token = bearer[1];
      if(!token){
        return res.status(401).json({"Message": "Authentication Token unavailable"});
      }else {
        return  jwt.verify(token, "Ph@ntomVasploit99", (err, decodedToken)=>{
          if(err){
            return res.status(511).json({"Message": `User not authenticated: ${err.message}`});
          }
          if(decodedToken){
            return next();
            // res.status(200).json({"Message": `User authenticated, decodedToken: ${decodedToken}`})
          }
        });
      }
    }
  } catch (e) {
    console.log(`Error on the token  verification middleware: ${e.message}`);
  }
  // const bearerHeader = req.headers["authorization"];
  // if(!bearerHeader){
  //   console.log(`User needs to authenticate first`);
  // }else {
  //   const bearer = bearerHeader.split(' ');
  //   const token = bearer[1];
  //   // check if token is available and verify
  //   if(token){
  //     jwt.verify(token, "Ph@ntomVasploit99", (err, decodedToken)=>{
  //       if(err){
  //
  //         console.log(`Invalid token: ${err.message}`);
  //       }
  //       if(decodedToken){
  //         console.log(`Decode Token: ${decodedToken}`);
  //         next();
  //       }
  //     });
  //   }else {
  //     console.log(`User not authenticated...`);
  //   }
  //   next();
  // }

}
