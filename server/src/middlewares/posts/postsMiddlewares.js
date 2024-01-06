// This module is responsible for validating input data to create a post
const validatePost = (req, res, next) => {
    const { title, body, userId } = req.body;
    if (!title) return res.status(400).json({ error: "Missing Title" });
    if (!body) return res.status(400).json({ error: "Missing Body" });
    if (!userId) return res.status(400).json({ error: "Missing userId" });
    next();
  };
  
  module.exports = validatePost;
  