const express = require('express')
const app = express()
const cors = require('cors')
const connect = require('./db.config')
const taskRouter = require('./routes/task.routes')
const $port = 3500

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/task', taskRouter)

app.listen($port, () => {
  console.log('server running on the 3500')
  connect()
})
