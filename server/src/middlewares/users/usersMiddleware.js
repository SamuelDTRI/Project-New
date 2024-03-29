// This module is responsible for validating input data to create a user
const validateUsers = (req, res, next) => {
    const { name, email, phone } = req.body;
    if (!name) return res.status(400).json({ error: "Missing name" });
    if (!email) return res.status(400).json({ error: "Missing email" });
    if (!phone) return res.status(400).json({ error: "Missing phone" });
  
    next();
  };
  
  module.exports = validateUsers;
  