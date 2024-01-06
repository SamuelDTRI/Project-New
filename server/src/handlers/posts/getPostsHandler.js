// This module is responsible for calling the Post creation function and responding accordingly or throwing errors :)
const getAllPosts = require("../../controllers/posts/getAllPosts"); // Import the function to retrieve all posts
// Create the handler function for requests and responses (req, res) :)
const getAllPostsHandler = async (req, res) => {
  try {
    const response = await getAllPosts(); // Call the function that retrieves all posts
    res.status(200).json(response); // Respond with the posts
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getAllPostsHandler;
