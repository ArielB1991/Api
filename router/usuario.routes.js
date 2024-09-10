const express = require("express");
const usuarioController = require("../controllers/usuario.controller");
const router = express.Router();

router.get("/pagos", usuarioController.getUsuario);
router.post("/pagos", usuarioController.createUsuario);
router.get("/pagos/:id", usuarioController.getUsuarioById);
router.put("/pagos/:id", usuarioController.updateUsuario);
router.delete("/pagos/id:", usuarioController.deleteUsuario);

module.exports = router;
