const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");

// database initialization
require("./config/db.config");
// import routes
const routes = require("./routes/routes");
// express app configuration
const app = express();

// port
const port = process.env.port || 5000;
// middleware configuration
app.use(cors()); //use to permit for cross origin resource sharing
app.use(helmet());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// routes middleware
app.use("/api", routes);
app.listen(port, ()=>{
  console.log("Api Server initiated...\n");
})
