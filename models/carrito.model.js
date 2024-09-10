const { DataTypes } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const Carrito = sequelize.define("carrito",
        {
            id_carrito: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            precio_total: {
                type: DataTypes.FLOAT,
                allowNull: true
            },
        });

    return Carrito

}