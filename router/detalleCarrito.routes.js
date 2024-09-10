const express = require("express");
const detalleCarritoController = require("../controllers/detalleCarrito.controller");
const router = express.Router();

router.get("/detalles", detalleCarritoController.getDetalle_Carrito);
router.post("/detalles", detalleCarritoControllerr.createDetalle_Carrito);
router.get("/detalles/:id", detalleCarritoController.getDetalle_CarritoById);
router.put("/detalles/:id", detalleCarritoController.updateDetalle_Carrito);
router.delete("/detalles/id:", detalleCarritoController.deleteDetalle_Carrito);

module.exports = router;
