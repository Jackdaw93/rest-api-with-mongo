const express = require("express");
const app = express();

const { PORT, db } = require("./config");

app.use(express.json()); // body-parser
app.use(express.urlencoded({ extended: false }));

// Membaca file .ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/home");
});
app.use("/", require("./routes/products"));

if (db) {
  console.log(`Connected to database`);
  app.listen(PORT, () => {
    console.log(`Server runs on port ${PORT}`);
  });
}
