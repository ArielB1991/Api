const db = require("../model/index.model");

async function createDetalle_Carrito(req, res) {
    const dataDetalleCarrito = req.body;

    try {
        const crearDetalle_Carrito = await db.Detalle_Carrito.create(
            {
                cantidad: dataDetalleCarrito.cantidad,
                PPU: dataDetalleCarrito.PPU

            });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Detalle Creado Exitosamente",
            mensaje: crearDetalle,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getDetalle_Carrito(req, res) {
    try {
        const detallexcarrito = await db.DetalleCarrito.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: detalle,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getDetalle_CarritoById(req, res) {
    const id = req.params.id;

    try {
        const detallexCarrito = await db.Detalle_Carrito.findOne({
            where: { id_detalleCarrito: id },
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: detalle,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}


async function updateDetalle_Carrito(req, res) {
    const id = req.params.id;
    const dataDetalleCarrito = req.body;

    try {
        const actualizaDetallexCarrito = await db.Detalle_Carrito.update(
            {
                cantidad: dataDetalleCarrito.cantidad,
                PPU: dataDetalleCarrito.PPU
    
            },
        );

        res.status(200).json({
            ok: true,
            status: 200,
            body: actualizaDetalle,
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function deleteDetalle_Carrito(req, res) {
    const id = req.params.id;

    try {
        const eliminaDetallexCarrito = await db.Detalle_Carrito.destroy({
            where: { id_detalleCarrito: id },
        });

        res.status(204).json({
            ok: true,
            status: 204,
            body: eliminaDetalle,
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
    createDetalle_Carrito,
    getDetalle_Carrito,
    getDetalle_Carrito,
    updateDetalle_Carrito,
    deleteDetalle_Carrito,
};