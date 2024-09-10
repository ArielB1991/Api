const { DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  const Producto_Categoria = sequelize.define("productoxCategoria", {
    id_ProductoxCategoria: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });

  return Producto_Categoria;
};
