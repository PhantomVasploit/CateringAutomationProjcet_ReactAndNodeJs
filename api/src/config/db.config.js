const mongoose = require("mongoose");

// setUp and configuartion
mongoose.connect("mongodb://127.0.0.1:27017/catering_automation_project_database");
// listening if connection is successful or not
mongoose.connection.once('open', ()=>{
  console.log("Database Server initiated...\n");
}).on('error', (error)=>{
  console.log("Error occured on connection to the database..\n", error);
});
