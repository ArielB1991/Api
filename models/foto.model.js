const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Foto = sequelize.define("foto", {
    id_foto: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Foto;
};
