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

  router.get("/notes/:id", (req, res) => {
    res.json(notes[req.params.id]);
  });

  router.delete("/notes/:id", (req, res) => {
    notes.splice(req.params.id, 1);
    updateData();
    console.log("Deleted note with id " + req.params.id);
  });

  function updateData() {
    fs.writeFile("data/notes.json", JSON.stringify(notes, "\t"), (err) => {
      if (err) throw err;
      return true;
    });
  }
});

module.exports = router;
