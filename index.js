const EXPRESS = require("express")
const MONGOOSE = require("mongoose");
const APP = EXPRESS();
require("dotenv").config();
APP.use(EXPRESS.json());

APP.listen(process.env.CONNECTION_PORT,() => {
    console.log(`Listening port ${process.env.CONNECTION_PORT}`)
});

MONGOOSE.set("strictQuery", false);

MONGOOSE.connect(process.env.DATABASE_CONNECTION_STRING)
  .then(() => console.log("successful conection"))
  .catch((err) => console.log(err));
