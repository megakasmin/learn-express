const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { PORT, connect } = require("./config");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", require("./routes"));
app.use("/todo", require("./routes/todos"));
app.use("/users", require("./routes/users"));
app.use("/validate", require("./routes/validate"));

connect(() => {
  app.listen(PORT, () => {
    console.log(`This app listening on Port: ${PORT || 3000}`);
  });
});
