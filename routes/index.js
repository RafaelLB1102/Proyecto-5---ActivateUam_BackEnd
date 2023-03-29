const EXPRESS = require("express");
const EVENT_ROUTES = require("./EventUAMRouter")
const ROUTES = EXPRESS.Router();

const ROUTES_APP = (APP) => {
    APP.use("/api/v1",ROUTES);
    ROUTES.use("/events",EVENT_ROUTES);
}
module.exports = ROUTES_APP;
