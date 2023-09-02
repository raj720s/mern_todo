const express = require('express')
const taskModel = require('../models/task.model')
const taskRouter = express.Router()

taskRouter
  .route('/')
  .post(async (req, res) => {
    try {
      const task = await new taskModel(req.body).save()
      res.send(task)
    } catch (error) {
      res.send(error)
    }
  })
  .get(async (req, res) => {
    try {
      const allTask = await taskModel.find({})
      res.send(allTask)
    } catch (error) {
      res.send(error)
    }
  })

taskRouter
  .route('/:id')
  .get(async (req, res) => {
    try {
      const task = await taskModel.findOne({
        _id: req.params.id,
      })
      res.send(task)
    } catch (error) {
      res.send(error)
    }
  })
  .delete(async (req, res) => {
    try {
      const task = await taskModel.findByIdAndDelete(req.params.id)
      res.send({msg: 'task gone'})
    } catch (error) {
      res.send(error)
    }
  })
  .put(async (req, res) => {
    console.log(req.params)
    try {
      const task = await taskModel.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        req.body
      )
      res.send(task)
    } catch (error) {
      res.send(error)
    }
  })

module.exports = taskRouter
