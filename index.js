import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const app = express();

const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// parse incoming data
app.use(express.json());
// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// configure view  engine ejs
app.set("view engine", "ejs");
console.log(__dirname);
// serve static files
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  // Render the 'home.ejs' file in the 'views' directory
  res.render("home", { message: "Data" });
});
app.listen(PORT, console.log("Running on 3000"));
