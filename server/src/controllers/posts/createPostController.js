// This module is responsible for creating a post
const { Post } = require("../../db"); // Require the model to interact with the database
// Create the function that interacts with the data or Controller; making it asynchronous since it works with promises :)
const createPosts = async (title, body, userId) => {
  // Pass the required data to create a post
  const newPost = await Post.create({ title, body }); // Use the Sequelize method .create that models use to create a post
  await newPost.setUser(userId); // Associate the post with a User using the .setUser(userId) method, passing the user's ID as a parameter
  return newPost; // Return the created post to display it in the request :)
};

module.exports = createPosts;
