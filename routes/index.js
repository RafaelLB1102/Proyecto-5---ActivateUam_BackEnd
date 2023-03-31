const EXPRESS = require("express");
const EVENT_ROUTES = require("./EventUAMRouter")
const WEBMINAR_ROUTES = require("./WebminarRoutes")
const ROUTES = EXPRESS.Router();

const ROUTES_APP = (APP) => {
    APP.use("/api/v1",ROUTES);
    ROUTES.use("/events",EVENT_ROUTES);
    ROUTES.use("/webminars",WEBMINAR_ROUTES)
}
module.exports = ROUTES_APP;
