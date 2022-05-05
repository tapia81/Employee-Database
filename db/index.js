const mongoose = require("mongoose");
mongoose
  .connect(`Your Atlas Address`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((e) => {
    console.error("Connection Error", e.message);
  });

const db = mongoose.connection;
module.exports = db;
