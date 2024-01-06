// This module is responsible for calling the Post creation function
const createPosts = require("../../controllers/posts/createPostController");

const createPostsHandler = async (req, res) => {
  const { title, body, userId } = req.body; // Destructure the necessary data from the request to use them :)
  try {
    const newPost = await createPosts(title, body, userId);  // Pass these data to the creation function to use them :)
    res.status(201).json(newPost);  // Respond with the created post
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createPostsHandler;
