const router = require("express").Router();
const controller = require("../controller/city.controller");

/* aqui se crean todas las rutas y se llaman las funciones a realizar del controlador */
router.get("/search", controller.getCitys);


module.exports = router;