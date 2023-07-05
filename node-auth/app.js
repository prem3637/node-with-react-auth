const express = require("express");
const cookieParser = require("cookie-parser");
const requireAuth = require("./middleware/requireAuth");
const notesControllers = require("./controllers/notesControllers");
const usersController = require("./controllers/usersController");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello Prem");
});

//notes routes
app.post("/notes",requireAuth, notesControllers.createNotes);
app.get("/get-notes",requireAuth, notesControllers.getNotes);
app.get("/get-notes/:id",requireAuth, notesControllers.getSingleNote);
app.put("/update-notes/:id",requireAuth, notesControllers.updateNotes);
app.delete("/delete-notes/:id",requireAuth, notesControllers.deleteNotes);

// users routes
app.post("/signup", usersController.signup);
app.post("/login", usersController.login);
app.get("/logout", usersController.logout);
app.get("/check-auth", requireAuth, usersController.checkAuth);
module.exports = app;
