const { DataTypes } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const Detalle_Carrito = sequelize.define("detalle_carrito", {
    id_detalleCarrito: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ppu: {
      type: DataTypes.FLOAT,
      allownull: true,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allownull: true,
    },
  });

  return Detalle_Carrito;
};
