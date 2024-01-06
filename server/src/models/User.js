// This module is responsible for defining a model within the database and the data types it will contain.
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID, // Unique identifier
        primaryKey: true, // Primary key
        defaultValue: DataTypes.UUIDV4, // Default value
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false, // This field cannot be empty
      },
      email: {
        type: DataTypes.STRING,
        unique: true, // Must be a unique data
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false } // We prevent the creation of creation date columns
  );
};
