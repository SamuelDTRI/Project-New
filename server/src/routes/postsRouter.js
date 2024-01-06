// This module is responsible for receiving requests and redirecting them to their specific handler.
const { Router } = require("express");
const postsRouter = Router();
const getAllPostsHandler = require("../handlers/posts/getPostsHandler");
const createPostsHandler = require("../handlers/posts/createPostsHandler");
const validatePost = require("../middlewares/posts/postsMiddlewares");

// In this part, we route the request depending on its type (ej, GET or POST).
postsRouter.get("/", getAllPostsHandler);
postsRouter.post("/", validatePost, createPostsHandler);

module.exports = postsRouter;
