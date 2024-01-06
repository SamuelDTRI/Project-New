// This module is responsible for creating helper functions to be reused in different parts of the application.
// These are multi-purpose functions that can help improve code readability.

// This function receives arrays and accordingly cleans or returns a cleaner array.
const cleanArray = (arr) => {
    // Here, it ensures that it receives an array; otherwise, it returns null.
    if (!arr) {
      return null;
    }
    // Here, we map the received array to return only the data we need.
    if (Array.isArray(arr)) {
      return arr.map((elem) => {
        return {
          id: elem.id,
          name: elem.name,
          email: elem.email,
          phone: elem.phone,
          created: false,
        };
      });
  
      // Otherwise, it means we received an object, and here we perform the same procedure.
    } else {
      // If it's not an array, it would return a clean object.
      return {
        id: arr.id,
        name: arr.name,
        email: arr.email,
        phone: arr.phone,
        created: false,
      };
    }
  };
  
  module.exports = cleanArray;
   