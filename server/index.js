// This module is responsible for starting our server and making it listen on port 3001.
// It also synchronizes the database.

const app = require("./src/app");
const { sequelize } = require("./src/db");

app.listen(3001, () => {
  sequelize
    .sync({ alter: true })
    .then(() => {
      console.log("Database synchronized successfully");
    })
    .catch((error) => {
      console.error("Error synchronizing database:", error);
    });

  console.log("Listening on port 3001");   //All Right! :)))
});
