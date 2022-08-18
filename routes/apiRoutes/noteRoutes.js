const router = require("express").Router();
const fs = require("fs");
// const { notes } = require("../../data/notes.json");

fs.readFile("./data/notes.json", "utf8", (err, data) => {
  if (err) throw err;

  var notes = JSON.parse(data);

  router.get("/notes", (req, res) => {
    res.json(notes);
  });

  router.post("/notes", (req, res) => {
    let newNote = req.body;
    notes.push(newNote);
    updateData();
    return console.log(newNote.title + "was added!");
  });
});

module.exports = router;
