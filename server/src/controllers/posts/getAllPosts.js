// This module is responsible for retrieving all posts from both the database and the external API (JsonPlaceHolder)
const { Post } = require("../../db");
const axios = require("axios"); // Require axios to make the request to the external API :)
const cleanrArrayPost = require("../../helpers/posts/postHelpers");
// Create the function that interacts with the information or Controller; it should be asynchronous since it interacts with promises :)
const getAllPosts = async () => {
  const postDb = await Post.findAll(); // Retrieve all posts from the database using Sequelize methods (e.g., FindAll)
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const apiPosts = response.data; // Access the data value that axios responds with (an object) where the data to be displayed is located
  // console.log(apiPosts, postDb);  // Debuggin ;)
  const cleanPost = cleanrArrayPost(apiPosts); //Here we clean the array so that it returns only the information we require
  return [...postDb, ...cleanPost]; // Return a copy of the data from both the database and the API :)
};

module.exports = getAllPosts;
