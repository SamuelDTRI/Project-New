// This module is responsible for defining the Post model and the data types it will contain.
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Post", {
    id: {
      type: DataTypes.INTEGER, // Data of integer or number type
      primaryKey: true, // Primary key
      autoIncrement: true, // Auto-incremental to avoid manually creating IDs
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
