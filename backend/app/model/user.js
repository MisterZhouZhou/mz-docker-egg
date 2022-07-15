/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    mobile: {
      type: DataTypes.STRING(11),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  }, {
    tableName: 'user',
  });

  Model.associate = function() {

  };

  return Model;
};
