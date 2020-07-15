const mongoose = require("mongoose");

const { MONGODB_URI_LOCAL, MONGODB_URI_ATLAS } = require("./environment");

mongoose.connect(MONGODB_URI_LOCAL || MONGODB_URI_ATLAS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

module.exports = db;
