const { DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  const Pago = sequelize.define("pago", {
    id_pago: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    monto: {
      type: DataTypes.INTEGER,
      allownull: true,
    },
    fecha_pago: {
      type: DataTypes.DATE,
      allownull: true,
    },
   detalle_pago: {
      type: DataTypes.TEXT,
      allownull: true,
    },
  });

  return Pago;
};
