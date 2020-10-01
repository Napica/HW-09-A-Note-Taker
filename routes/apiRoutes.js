// Load Data
var notesData = require("../data/notesData");
const fs = require("fs");

// // Routing
// module.exports = function (app) {
//   // GET
//   app.get("/api/notes", function (req, res) {
//     res.sendFile(path.json(__dirname, "./public/assets/notes.html"));
//   });

  // POST
  // app.post("/api/notes", (req, res) => {
  //   // console.log(notesData);
  //   var notes = req.body
  //   // notesData = JSON.parse(notesData);
  //   notesData.push(notes)
  //   // console.log(notes)
  //   res.json(notesData);
  //   // console.log(notesData)
  //   fs.writeFile("./db/db.json", notesData, "utf8", (err) => {
  //     if (err) throw err;
  //   }) 
  //   res.json(notesData)
  // });

// };
