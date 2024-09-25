const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const TaskSchema = new mongoose.Schema({
    title: String,
    completed: String,
}, {timestamps: true});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;