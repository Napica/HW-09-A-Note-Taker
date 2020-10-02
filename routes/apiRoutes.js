// Load Data
const notesData = require("../data/notesData");
const fs = require("fs");
const path = require("path");
const { log } = require("console");

// Routing
module.exports = function (app) {
  // GET
  app.get("/api/notes", function (req, res) {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return res.json({
          error: true,
          data: null,
          message: "Unable to get note.",
        });
      }
      res.json({
        error: false,
        data: JSON.parse(data),
        message: "Successfully added new note",
      });
    });
  });

  // POST
  app.post("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return res.json({
          error: true,
          data: null,
          message: "Unable to get note.",
        });
      }
      const updatedData = JSON.parse(data);
      updatedData.push(req.body);
      console.log(updatedData);
      fs.writeFile("./db/db.json", JSON.stringify(updatedData), (err) => {
        if (err) {
          console.log(err);
          return res.json({
            error: true,
            data: null,
            message: "Unable to save note.",
          });
        }
        res.json({
          error: false,
          data: updatedData,
          message: "Successfully added new note",
        });
      });
    });
  });
};
