const taskModel = require("../models/TaskModel");
require("../db")
const { v4: uuidv4 } = require('uuid');

function create(newTask) {
  newTask.id = uuidv4();
  return taskModel.create(newTask);
}

function read() {
  return taskModel.find();
}

function update(_id, newData) {
  return taskModel.findByIdAndUpdate(_id, newData, { new: true, runValidators:true });
}

function del(_id) {
  return taskModel.findByIdAndDelete(_id);
}


module.exports = {
  create,
  read,
  delete: del,
  update,
};
