const fs = require("fs");
const path = require("path");
const router = require("express").Router();

router.get("/notes", (req, res) => {
  res.send("hello");
});

router.post("/notes", (req, res) => {
  let newNote = req.body;
  notes.push(newNote);
  //   updateData();
  return console.log(newNote.title + "was added!");
});

module.exports = router;
