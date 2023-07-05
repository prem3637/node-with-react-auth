const Note = require("../models/note");
const notesControllers = {
  createNotes: async (req, res) => {
    const { title, body } = req.body;
    const note = await Note.create({
      title,
      body,
    });

    res.json({ note });
  },
  getNotes: async (req, res) => {
    const notes = await Note.find();
    res.json({ notes });
  },
  getSingleNote: async (req, res) => {
    const noteId = req.params.id;
    const notes = await Note.findById(noteId);
    res.json({ notes });
  },
  updateNotes: async (req, res) => {
    const noteId = req.params.id;
    const { title, body } = req.body;
    await Note.findByIdAndUpdate(noteId, {
      title,
      body,
    });
    const notes = await Note.findById(noteId);
    res.json({ notes });
  },
  deleteNotes: async (req, res) => {
    const noteId = req.params.id;
    await Note.deleteOne({ _id: noteId });
    res.json({ sucess: "record is deleted" });
  },
};

module.exports = notesControllers;
