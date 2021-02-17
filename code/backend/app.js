const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const path = require("path");
const app = express();
const session = require("express-session");
const cors = require("cors");

const {getHomePage} = require("./routes/index");
const {
  hirePage,
  hire,
  deleteEmployee,
  editDetailsOfemployee,
  editPage,
  staffList,
} = require("./routes/controller");
const {
  validate,
  checkValidationHire,
  checkValidationUpdate,
  checkLoginExist,
} = require("./routes/validation");
const {
  getLoginPage,
  login,
  logout,
  checkAuthenticated,
  checkNotAuthenticated,
} = require("./routes/authentication");
const port = 2000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "hotel",
  insecureAuth: true,
});

db.connect((err) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log("Connected to database");
});
global.db = db;

app.set("port", process.env.port || port); // set express to use this port
app.set("views", __dirname + "/views"); // set express to look in this folder to render our view
app.set("view engine", "ejs"); // configure template engine
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, "/public"))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload
app.use(
  session({
    secret: "Mom is cooking a dinner",
    saveUninitialized: true,
    resave: false,
  })
);
app.use(cors());

app.get("/", checkAuthenticated, getHomePage);

app.get("/hire/:status", checkAuthenticated, hirePage);
app.post("/hire/:status", validate, checkLoginExist, checkValidationHire, hire);
// app.post("/hire/:status", hire);

// app.post("/list/:status", checkAuthenticated, staffList);
app.get("/list/:status", staffList);
// app.post("/edit/:id", checkAuthenticated, editPage);
app.get("/edit/:id", editPage);
app.put("/edit/:id", validate, checkValidationUpdate, editDetailsOfemployee);

// app.get("/delete/:id", checkAuthenticated, deleteEmployee);
app.delete("/delete/:id", deleteEmployee);

// app.get("/login", checkNotAuthenticated, getLoginPage);
app.post("/login", login);
app.get("/logout", logout);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
