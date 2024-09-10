const { DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  const Producto = sequelize.define("producto", {
    id_producto: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allownull: true,
    },
    descripcion: {
      type: DataTypes.STRING,
      allownull: true,
    },
    precio: {
      type: DataTypes.FLOAT,
      allownull: true,
    },
    foto: {
      type: DataTypes.STRING,
      allownullL: true,
    },
  });

  return Producto;
};
