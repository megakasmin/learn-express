const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")
const PORT = 3005;

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ message: "Learn Express" });
});

app.post("/", (req, res) => {
    res.status(201).json({
      message: "New Item is Added",
      data: {
        name: req.body.name,
        address: req.body.address,
        age: req.body.age,
        role: req.body.role,
        salary: req.body.salary
      }
    });
  });

// app.post("/", (req, res) => {
//   res.send({
//     message: "New Item is Added",
//     data: {
//       name: req.body.name,
//       address: req.body.address,
//       age: req.body.age,
//       role: req.body.role,
//       salary: req.body.salary
//     }
//   });
// });

app.put("/edit", (req, res) => {
  res.send({
    message: "New Item is Added",
    data: {
      name: req.body.name,
      address: req.body.address,
      age: req.body.age
    }
  });
});

// console.log(PORT);

// app.get("/hello", (req, res) => {
//   res.send("Hello You're my NomadenFeels");
// });

// app.post("/sarahgushef", (req, res) => {
//   res.send("Ini post sarahgushef");
// });

// // app.get("/ketiga", (req, res) => {
// //   const datas = [1, 2, 3, 4, 5];
// //   res.send({ data: datas });
// // });

app.listen(PORT, () => {
  console.log(`This app listening on Port: ${PORT}`);
});
