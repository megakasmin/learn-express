const { todo: todos } = require("../../models");
const { get } = require("../../config");

module.exports = {
  getAll: (req, res) => {
    get()
      .collection("todos")
      .find({})
      .toArray()
      .then(result => {
        res.send({ message: "Get all datas", data: result });
      })
      .catch(error => {
        console.log(error);
      });
  },
  getById: (req, res) => {
    get()
      .collection("todos")
      .findOne({ name: req.params.name })
      .then(result => {
        res.send({ message: "get One Data", data: result });
      })
      .catch(error => {
        console.log(error);
      });
  },
  deleteOne: (req, res) => {},
  addOne: (req, res) => {
    get()
      .collection("todos")
      .insertOne(req.body)
      .then(result => {
        res.send({ message: "Data successfully added", data: result });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
