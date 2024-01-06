// This module is responsible for retrieving all users or a user specified by name
const { User } = require("../../db");
const axios = require("axios");
const { Op } = require("sequelize");
const cleanArray = require("../../helpers/user/userHelpers");

// Retrieve all users from the database and an external API (JsonPlaceHolder) :)
const getAllUsers = async () => {
  const dbUsers = await User.findAll();
  const apiUsersRaw = (
    await axios.get("https://jsonplaceholder.typicode.com/users")
  ).data;

  // Clean and combine users from the database and the API using a HELPER function (cleanArray())
  const apiUsers = cleanArray(apiUsersRaw);
  return [...dbUsers, ...apiUsers];
};

// -------------------------------------------------------------------------------

// Search for users by name, combining results from the database and the API
const userByName = async (name) => {
  try {
    // Search for users in the database whose names match (case-insensitive)
    const databaseUsers = await User.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });

    // Get users from the API and filter by matching names
    const apiUsersRaw = (
      await axios.get("https://jsonplaceholder.typicode.com/users")
    ).data;
    const apiUsers = cleanArray(apiUsersRaw);
    const filteredApi = apiUsers.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );

    // Combine the results from the database and the API
    return [...filteredApi, ...databaseUsers];
  } catch (error) {
    throw new Error(`Error searching for users: ${error.message}`);
  }
};

module.exports = { getAllUsers, userByName };
