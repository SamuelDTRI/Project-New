// This module is responsible for creating a user
const { User } = require("../../db");
// Receive the information to create the user within the function
const createUser = async (name, email, phone) => {
  const newUser = await User.create({ name, email, phone }); // Use the create method of the models
  return newUser;
};

module.exports = createUser;
