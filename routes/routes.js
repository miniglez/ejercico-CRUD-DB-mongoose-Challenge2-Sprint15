const express = require("express")
const router = express.Router()
const Task = require("../models/taskModel.js")

router.post("/create", async (req, res) => {
    try{
        const newTask = {
            title: req.body.title,
            completed: "not completed",
        }
        const task = await Task.create(newTask)
        res.status(201).json(task)
    } 
    catch
    (error) {
        console.log(error)
        res.status(500).json({message: "There was a problem to create a task"})
    }
})

router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(201).json(tasks)
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message: "There was a problem to take all the task"})
    }
})

router.get("/id/:_id", async (req, res) => {
    try {
        const id = req.params._id;
        const task = await Task.findById(id);
        res.status(201).json(task)
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message: "There was a problem to take the task by id"})
    }
})

router.put("/markAsCompleted/:_id", async (req, res) => {
    try {
        const id = req.params._id;
        const task = await Task.findById(id);
        task.completed = "completed"
        const taskUpdated = await Task.findById(id).updateOne(task)
        res.status(201).json(task)
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message: "There was a problem to take the task by id"})
    }
})

router.put("/id/:_id", async (req, res) => {
    try {
        const id = req.params._id;
        const newTitle = req.body.title;
        const task = await Task.findById(id);
        task.title = newTitle;
        const taskUpdated = await Task.findById(id).updateOne(task)
        res.status(201).json(task)
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message: "There was a problem to take the task by id"})
    }
})

router.delete("/id/:_id", async (req, res) => {
    try {
        const id = req.params._id;
        const task = await Task.findById(id).deleteOne()
        res.status(201).json(task)
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message: "There was a problem to take the task by id"})
    }
})

module.exports = router