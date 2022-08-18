const express = require("express");
const fs = require("fs");
const path = require("path");

const { notes } = require("./data/notes.json");

const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require("./routes/apiRoutes/noteRoutes");
const htmlRoutes = require("./routes/htmlRoutes/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
