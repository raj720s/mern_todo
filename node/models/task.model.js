const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
})

const taskModel = mongoose.model('task', taskSchema)

module.exports = taskModel
