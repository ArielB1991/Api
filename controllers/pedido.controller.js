const db = require("../model/index.model");

async function createPedido(req, res) {
    const dataPedidos = req.body;

    try {
        const crearPedido = await db.Pedido.create(
            {
                fecha pedido: dataPedidos.fecha_pedido,
                estado: dataPedidos.estado_de_pedido,
                modo pago: dataPedidos.modo_pago,
                monto total: dataPedidos.monto_total
          
            });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Pedido Creado",
            mensaje: crearPedido,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getPedido(req, res) {
    try {
        const pedidos = await db.Pedido.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: pedidos,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getPedidoById(req, res) {
    const id = req.params.id;

    try {
        const pedido = await db.Pedido.findOne({
            where: { id_pedido: id },
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: pedido,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}


async function updatePedido(req, res) {
    const id = req.params.id;
    const dataPedidos = req.body;

    try {
        const actualizaPedido = await db.Pedido.update(
            {
                fecha pedido: dataPedidos.fecha_pedido,
                estado: dataPedidos.estado_de_pedido,
                modo pago: dataPedidos.modo_pago,
                monto total: dataPedidos.monto_total
    
            },
        );

        res.status(200).json({ 
            ok: true,
            status: 200,
            body: actualizaPedido,
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function deletePedido(req, res) {
    const id = req.params.id;

    try {
        const eliminaPedido = await db.Pedido.destroy({
            where: { id_pedido: id },
        });

        res.status(204).json({
            ok: true,
            status: 204,
            body: eliminaPedido,
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
    createPedido,
    getPedido,
    getPedidoById,
    updatePedido,
    deletePedido,
};