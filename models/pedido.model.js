const { DataTypes } = require("sequelize");

module.exports = ( sequelize) => {
  const Pedido = sequelize.define("pedido", {
    id_pedido: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fecha_pedido: {
      type: DataTypes.STRING,
      allownull: true,
    },
    estado_de_pedido: {
      type: DataTypes.STRING,
      allownull: true,
    },
    modo_pago: {
      type: DataTypes.STRING,
      allownull: true,
    },
    monto_total: {
      type: DataTypes.INTEGER,
      allownullL: true,
    },
  });

  return Pedido;
};
