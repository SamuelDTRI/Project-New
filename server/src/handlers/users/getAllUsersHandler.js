// This module is responsible for calling the user retrieval functions and sending them or, in case of errors, sending error responses.
const {
    getAllUsers,
    userByName,
  } = require("../../controllers/users/getAllUsersController");
  
  const getAllUsersHandler = async (req, res) => {
    // Destructure the "name" received from the query or request.
    const { name } = req.query;
    // Call the function that returns the user by name or, if not, the function that retrieves all users.
    try {
      // Use a ternary operator to determine which function to call.
      const results = name ? await userByName(name) : await getAllUsers();
      if (!results) throw new Error("No users found");  // Error in case there are no matches
      res.status(200).json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = getAllUsersHandler;