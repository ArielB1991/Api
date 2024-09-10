const db = require("../model/index.model");

async function createFoto(req, res) {
    const dataFoto = req.body;

    try {
        const crearFoto = await db.Foto.create(
            {
                nombre: dataFoto.nombre
          
            });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Foto creada",
            mensaje: crearFoto,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getFoto(req, res) {
    try {
        const fotos = await db.Foto.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: fotos,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getFotoById(req, res) {
    const id = req.params.id;

    try {
        const foto = await db.Foto.findOne({
            where: { id_foto: id },
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: foto,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}


async function updateFoto(req, res) {
    const id = req.params.id;
    const dataFotos = req.body;

    try {
        const actualizaFoto = await db.Foto.update(
            {
                nombre: dataFoto.nombre,
            }
        );

        res.status(200).json({
            ok: true,
            status: 200,
            body: actualizaFoto,
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function deleteFoto(req, res) {
    const id = req.params.id;

    try {
        const eliminaFoto = await db.Foto.destroy({
            where: { id_foto : id },
        });

        res.status(204).json({
            ok: true,
            status: 204,
            body: eliminaFoto,
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
    createFoto,
    getFoto,
    getFotoById,
    updateFoto,
    deleteFoto,
};