const express = require("express");
const pedidoController = require("../controllers/pedido.controller");
const router = express.Router();

router.get("/pagos", pedidoController.getPedido);
router.post("/pagos", pedidoController.createPedido);
router.get("/pagos/:id", pedidoController.getPedidoById);
router.put("/pagos/:id", pedidoController.updatePedido);
router.delete("/pagos/id:", pedidoController.deletePedido);

module.exports = router;
