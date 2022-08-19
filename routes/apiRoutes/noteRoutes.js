const router = require("express").Router();
const fs = require("fs");
const path = require("path");
// const { notes } = require("../../data/notes.json");

fs.readFile("./data/notes.json", "utf8", (err, data) => {
  if (err) throw err;

  // var notes = JSON.parse(data);

  const { notes } = require("../../data/notes.json");

  router.get("/notes", (req, res) => {
    res.json(notes);
  });

  router.post("/notes", (req, res) => {
    // let newNote = req.body;
    // notes.push(newNote);
    req.body.id = notes.length.toString();

    const note = updateData(req.body, notes);
    // updateData();
    res.json(note);
    // return console.log(note.title + "was added!");
  });

  router.get("/notes/:id", (req, res) => {
    res.json(notes[req.params.id]);
  });

  router.delete("/notes/:id", (req, res) => {
    const id = req.params.id;
    let note;
    notes.map((element, index) => {
      if (element.id == id) {
        note = element;
        notes.splice(index, 1);
        return res.json(note);
      }
    });
    console.log("Deleted note with id " + req.params.id);
  });

  function updateData(body, notesArray) {
    const newNote = body;
    notesArray.push(newNote);

    // fs.writeFile("data/notes.json", JSON.stringify(notes, "\t"), (err) => {
    //   if (err) throw err;
    //   return newNote;
    // });

    fs.writeFileSync(
      path.join(__dirname, "../../data/notes.json"),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    return newNote;
  }
});

module.exports = router;
