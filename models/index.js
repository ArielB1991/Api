const Sequelize = require('sequelize')

const config= require('../config/index.config');

const sequelize = new Sequelize(
    config.db.schema,
    config.db.user,
    config.db.password,
    {
        host: config.db.host,
        dialect: config.db.dialect,
        port: config.db.port
    }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize


db.carrito = require('./carrito.model') (sequelize, Sequelize)
db.detalleCarrito = require('./detalleCarrito.model')(sequelize, Sequelize)
db.categoria = require('./categoria.model') (sequelize, Sequelize)
db.foto = require('./foto.model')(sequelize, Sequelize)
db.pago = require ('./pago.model')(sequelize, Sequelize)
db.pedido = require ('./pedido.model') (sequelize, Sequelize)
db.producto = require('./producto.model')(sequelize, Sequelize)
db.productoxCategoria = require('./productoxCategoria.model')(sequelize, Sequelize)
db.usuario = require ('./usuario.model')(sequelize, Sequelize)

db.carrito.hasMany(db.producto)
db.producto.belongsTo(db.carrito)

db.producto.hasMany(db.usuario)
db.usuario.belongsTo(db.carrito)

db.producto.hasMany(db.foto)
db.foto.belongsTo(db.producto)

db.carrito.hasMany(db.pedido)
db.pedido.belongsTo(db.carrito)

db.carrito.belongsTo(db.detalleCarrito)
db.carrito.hasMany(db.pedido) //duda

db.pedido.belongsTo(db.pago)
db.pago.belongsTo(db.pedido)

db.usuario.hasMany(db.producto)

db.categoria.hasMany(db.producto)
db.producto.belongsTo(db.categoria)

db.productoxCategoria.hasMany(db.producto)
db.productoxCategoria.belongsTo(db.categoria)


module.exports = db