// This module is responsible for creating a request router.
const { Router } = require("express");
const usersRouter = require("./usersRouter");
const postsRouter = require("./postsRouter");

const mainRouter = Router(); // We instantiate Router in a variable to use it.

mainRouter.use("/users", usersRouter); // We redirect to a specific /users Router.
mainRouter.use("/posts", postsRouter); // We redirect to a specific /posts Router.

module.exports = mainRouter;
