// This module is responsible for creating helper functions to be reused in different parts of the application.
// These are multi-purpose functions that can help improve code readability.

const cleanrArrayPost = (arr) => {
    if (!arr) {
      console.log("it is not an array");
      return null;
    }
  
    if (Array.isArray(arr)) {
      return arr.map((a) => {
        return {
          userId: a.userId,
          id: a.id,
          title: a.title,
          body: a.body,
          created: false,
        };
      });
    } else {
      return {
        userId: arr.userId,
        id: arr.id,
        title: arr.title,
        body: arr.body,
        created: false,
      };
    }
  };
  
  module.exports = cleanrArrayPost;