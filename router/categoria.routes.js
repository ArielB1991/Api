const express = require("express");
const categoriaoController = require("../controllers/categoria.controller");
const router = express.Router();

router.get("/categoria", categoriaController.getCategoria);
router.post("/categoria", categoriaController.createCategoria);
router.get("/categoria/:id", categoriaController.getCategoriaById);
router.put("/categoria/:id", categoriaController.updateCategoria);
router.delete("/categoria/id:", categoriaController.deleteCategoria);

module.exports = router;
