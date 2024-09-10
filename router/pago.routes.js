const express = require("express");
const pagoController = require("../controllers/pago.controller");
const router = express.Router();

router.get("/pagos", pagoController.getPago);
router.post("/pagos", pagoController.createPago);
router.get("/pagos/:id", pagoController.getPagoById);
router.put("/pagos/:id", pagoController.updatePago);
router.delete("/pagos/id:", pagoController.deletePago);

module.exports = router;
