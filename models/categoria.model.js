const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Categoria = sequelize.define("categoria", {
    id_categoria: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    descripcion_categoria: {
      type: DataTypes.STRING,
      allownull: true,
    },
    nombre_categoria: {
      type: DataTypes.STRING,
      allownull: true,
    },
  });

  return Categoria;
};
