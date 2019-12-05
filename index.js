const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { PORT, connect, JWT_SECRET_KEY } = require("./config");
const jwt = require("express-jwt");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  jwt({ secret: JWT_SECRET_KEY }).unless({
    path: [
      {
        url: "/",
        methods: ["GET"]
      },
      {
        url: "/user/login",
        methods: ["POST", "GET"]
      },
      {
        url: /^\/validate\/[\w]{1,}[\w\-]{1,}/i,
        methods: ["POST"]
      }
    ]
  })
);

app.use((err, req, res, next) => {
  if (err.name === "Unauthorized") {
    return res.status(401).json({
      message: " You are not allow to entry this endpoint"
    });
  }
  return next();
});

app.use("/", require("./routes"));
app.use("/todo", require("./routes/todos"));
app.use("/users", require("./routes/users"));
app.use("/validate", require("./routes/validate"));

connect(() => {
  app.listen(PORT, () => {
    console.log(`This app listening on Port: ${PORT || 3000}`);
  });
});
