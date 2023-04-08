const EXPRESS = require("express");
const {
    getWebminarUAM,
    getWebminarbyId,
    createWebminar,
    deleteWebminar,
    updateWebminar
} = require("../controllers/WebminarController")
const WEBMINAR_ROUTER = EXPRESS.Router()

WEBMINAR_ROUTER.get("/",getWebminarUAM);
WEBMINAR_ROUTER.post("/webminar",createWebminar);
WEBMINAR_ROUTER.get("/:id",getWebminarbyId)
WEBMINAR_ROUTER.put("/:id",updateWebminar);
WEBMINAR_ROUTER.delete("/:id",deleteWebminar);

module.exports = WEBMINAR_ROUTER;
