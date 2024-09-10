const express = require("express");
const fotoController = require("../controllers/foto.controller");
const router = express.Router();

router.get("/foto", fotoController.getFoto);
router.post("/foto", fotoController.createFoto);
router.get("/foto/:id", fotoController.getFotoById);
router.put("/foto/:id", fotoController.updateFoto);
router.delete("/foto/id:", fotoController.deleteFoto);

module.exports = router;
