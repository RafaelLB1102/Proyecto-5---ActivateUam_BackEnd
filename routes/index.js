const EXPRESS = require("express");
const EVENT_ROUTES = require("./EventUAMRouter")

const ROUTE_APP = (APP) => {
    const ROUTES = EXPRESS.Router();
    APP.use("api/v1",ROUTES);
    ROUTES.use("/events",EVENT_ROUTES);
}
module.exports = ROUTE_APP;
