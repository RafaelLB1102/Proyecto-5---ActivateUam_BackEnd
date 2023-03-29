const EXPRESS = require("express")
const MONGOOSE = require("mongoose");
const APP = EXPRESS();
const ROUTES_APP = require("./routes");

require("dotenv").config();


APP.listen(process.env.CONNECTION_PORT,() => {
    console.log(`Listening port ${process.env.CONNECTION_PORT}`)
});

APP.get("/messages", (req, res) => {
  res.send("Hello");
});

MONGOOSE.set("strictQuery", false);

MONGOOSE.connect(process.env.DATABASE_CONNECTION_STRING)
  .then(() => console.log("successful conection"))
  .catch((err) => console.log(err));
 
APP.use(EXPRESS.json());
ROUTES_APP(APP);
