const db = require("../model/index.model");

async function createCategoria(req, res) {
    const dataCategorias = req.body;

    try {
        const crearCategoria = await db.Categoria.create(
            {
                descripcion: dataCategorias.descripcion,
          
            });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Categoria creada",
            mensaje: crearCategoria,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getCategoria(req, res) {
    try {
        const carritos = await db.Categoria.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: categoria,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getCategoriaById(req, res) {
    const id = req.params.id;

    try {
        const categoria = await db.Categoria.findOne({
            where: { carrito_id: id },
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: categoria,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}


async function updateCategoria(req, res) {
    const id = req.params.id;
    const dataCarritos = req.body;

    try {
        const actualizaCategoria = await db.Categoria.update(
            {
                descripcion: dataCategorias.descripcion,
            }
        );

        res.status(200).json({
            ok: true,
            status: 200,
            body: actualizaCategoria,
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function deleteCategoria(req, res) {
    const id = req.params.id;

    try {
        const eliminaCategoria = await db.Categoria.destroy({
            where: { id_categoria : id },
        });

        res.status(204).json({
            ok: true,
            status: 204,
            body: eliminaCategoria,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

module.exports = {
    createCategoria,
    getCategoria,
    getCategoriaById,
    updateCategoria,
    deleteCategoria,
};