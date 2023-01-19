const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").Server(app);
const port = process.env.PORT || 2000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./views/user");
const apartment = require("./views/apartment");

// mongo connection
mongoose.set("strictQuery", true);
const url =
  "mongodb+srv://netpes:netpes@cluster0.cnxmrap.mongodb.net/?retryWrites=true&w=majority";
mongoose?.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose?.connection.on("connected", () => {
  console.log("connected");
});
app.set("views", __dirname + "/views");
app.engine("html", require("ejs").renderFile);
// Put these statements before you define any routes.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: " http://localhost:3000" }));
app.use("/", users);
app.use("/", apartment);

http.listen(port, () => {
  console.log(` running at http://localhost:${port}/`);
});
