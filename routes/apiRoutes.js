// Load Data
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const { log } = require("console");
const { response } = require("express");

// Routing
module.exports = function (app) {
  // GET
  app.get("/api/notes", function (req, res) {
    return res.sendFile(path.join(__dirname, "../db/db.json"));
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
      req.body.id = uuidv4();
      updatedData.push(req.body);              
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

  // Delete
  
  app.delete("/api/notes/:id", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return res.json({
          error: true,
          data: null,
          message: "Unable to get note.",
        });
      }
      const datainfo = JSON.parse(data)
      updatedData = datainfo.filter(function (data) {
        return data.id != req.params.id;
      });
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
