// This module is responsible for directing the request to the router (Router "mainRouter").
const { Router } = require("express");
const getAllUsersHandler = require("../handlers/users/getAllUsersHandler");
const getUsersByIdHandler = require("../handlers/users/getUsersByIdHandler");
const createUsersHandler = require("../handlers/users/createUsersHandler");
const validateUsers = require("../middlewares/users/usersMiddleware");

const usersRouter = Router(); // We instantiate Router within a variable to use it according to our routes.

usersRouter.get("/", getAllUsersHandler);
usersRouter.get("/:id", getUsersByIdHandler);
usersRouter.post("/", validateUsers, createUsersHandler);

module.exports = usersRouter;
