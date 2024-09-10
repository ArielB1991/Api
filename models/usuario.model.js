const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  const Usuario = sequelize.define("usuario", {
    id_usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    correo_electronico: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Usuario;
};
