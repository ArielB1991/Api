const db = require("../model/index.model");

async function createPago(req, res) {
    const dataPagos = req.body;

    try {
        const crearPago = await db.Pago.create(
            {
                monto: dataPagos.monto,
                fecha pago: dataPagos.fecha_pago,
                detalle pago: dataPagos.detalle_pago
            });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Carrito Pago",
            mensaje: crearPago,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getPago(req, res) {
    try {
        const pagos = await db.Pago.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: pagos,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getPagoById(req, res) {
    const id = req.params.id;

    try {
        const carrito = await db.Pago.findOne({
            where: { id_pago: id },
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: pago,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}


async function updatePago(req, res) {
    const id = req.params.id;
    const dataPagos = req.body;

    try {
        const actualizaPago = await db.Pago.update(
            {
                monto: dataPagos.monto,
                fecha pago: dataPagos.fecha_pago,
                detalle pago: dataPagos.detalle_pago
    
            },
        );

        res.status(200).json({
            ok: true,
            status: 200,
            body: actualizaPago,
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function deletePago(req, res) {
    const id = req.params.id;

    try {
        const eliminaPago= await db.Pago.destroy({
            where: { id_pago: id },
        });

        res.status(204).json({
            ok: true,
            status: 204,
            body: eliminaPago,
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
    createPago,
    getPago,
    getPagoById,
    updatePago,
    deletePago,
};