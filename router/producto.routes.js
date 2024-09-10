const express = require("express");
const productoController = require("../controllers/producto.controller");
const router = express.Router();

router.get("/pagos", productoController.getProducto);
router.post("/pagos", productoController.createProducto);
router.get("/pagos/:id", productoController.getProductoById);
router.put("/pagos/:id", productoController.updateProducto);
router.delete("/pagos/id:", productoController.deleteProducto);

module.exports = router;
