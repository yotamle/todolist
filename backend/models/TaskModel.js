const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    minlength: 2,
    trim: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", taskSchema);
