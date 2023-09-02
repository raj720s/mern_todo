const mongoose = require('mongoose')

const connect = async () => {
  try {
    const conn_param = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    await mongoose.connect('mongodb+srv://raj:raj@cluster0.z99it5p.mongodb.net/?retryWrites=true&w=majority', conn_param).then(console.log('connected to db'))
  } catch (error) {
    console.log('db conn error', error)
  }
}

module.exports = connect
