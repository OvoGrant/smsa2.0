const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },

    holdings:{
        type: Array,
        default: []
    }
})

module.exports = mongoose.model('user',UserSchema)