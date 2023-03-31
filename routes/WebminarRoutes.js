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
WEBMINAR_ROUTER.post("/webminar",getWebminarbyId);
WEBMINAR_ROUTER.get("/:id",createWebminar)
WEBMINAR_ROUTER.put("/:id",deleteWebminar);
WEBMINAR_ROUTER.delete("/:id",updateWebminar);

module.exports = WEBMINAR_ROUTER;
