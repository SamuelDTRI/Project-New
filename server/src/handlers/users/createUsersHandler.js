// This module is responsible for calling the function that creates a user and sending that information or, in case of errors, sending error responses.
const createUser = require("../../controllers/users/createUserController");

const createUsersHandler = async (req, res) => {
  // Destructure the information received in the request body to create a user based on it :)
  const { name, email, phone } = req.body;
  // Call the user creation function, passing the destructured information as parameters :)
  if (!name || !email || !phone)
    throw Error("You need to complete the information to create a user");
  try {
    const newUser = await createUser(name, email, phone);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createUsersHandler;
