// This module is responsible for calling the function to retrieve a user by ID and sending its information or, in case of an error, sending an error response.
const getUserById = require("../../controllers/users/getUserByIdController");

const getUsersByIdHandler = async (req, res) => {
  // Destructure the "id" from the params object of the request.
  const { id } = req.params;
  // Define a variable and add a conditional that determines whether it is a UUID or a numerical ID.
  const source = isNaN(id) ? "bdd" : "api"; 

  try {
    // Call the function to retrieve the user by ID
    const userById = await getUserById(id, source); // pass the id and the variable to determine where to look
    res.status(200).json(userById); 
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = getUsersByIdHandler;