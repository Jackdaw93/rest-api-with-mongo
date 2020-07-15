const db = require("./database");
const { PORT, MONGODB_URI_LOCAL, MONGODB_URI_ATLAS } = require("./environment");

module.exports = {
  db,
  PORT,
  MONGODB_URI_LOCAL,
  MONGODB_URI_ATLAS,
};
