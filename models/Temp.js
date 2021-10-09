const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tempSchema = new Schema({
    tempId: String,
    tempPassword: String
})

mongoose.model('tempModel', tempSchema)