// This module is responsible for retrieving a user by ID
const { User, Post } = require("../../db");
const axios = require("axios");
const cleanArray = require("../../helpers/user/userHelpers");

// Receive the ID and the predefined source address in the handler, this way we know whether to search in the database or in the API :)
const getUserById = async (id, source) => {
  let user; // Define the variable 'user' with let for later use...
  if (source === "api") {
    user = (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data;
  } else {
    user = await User.findByPk(id, {
      include: { model: Post, attributes: ["title", "body"] },
    });
  }

  const cleanedInfo = cleanArray(user); // Clean the information in case of obtaining a lot of information or noise :)

  return cleanedInfo;
};

module.exports = getUserById;
