// This module is responsible for creating the connection to the database and associating the User and Post models.
require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_CONNECTION } = process.env; // Credentials for our database for security.
const UserModel = require("./models/User");
const PostModel = require("./models/Post");

console.log("DB_CONNECTION:", process.env.DB_CONNECTION);
console.log("Db succesfulyy");

const sequelize = new Sequelize(DB_CONNECTION, {
  dialect: "postgres",
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // self-signed certificates. :)
    },
  },
  logging: false, // Here we are disabling the printing of log messages (in the console).
  native: false, // Here we are choosing not to use the native driver (we have the JavaScript one).
});

// Here we define the models themselves.

UserModel(sequelize); // We define the User model by passing the previously instantiated sequelize object.
PostModel(sequelize); // We define the Post model by passing the previously instantiated sequelize object.

const { User, Post } = sequelize.models; // We extract the User and Post models from the models object of the Sequelize instance.

User.hasMany(Post); // We create the relationship from User to multiple Posts; a user can have multiple posts.
Post.belongsTo(User); // We create the relationship from Post to a single User; a post can have only one user.

module.exports = { sequelize, ...sequelize.models }; // We export the sequelize instance and a copy of the models.
