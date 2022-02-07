const mongoose = require('mongoose')

const stockSchema = new mongoose.Schema({
    Symbol: { 
        type: String,
        required: true
    },
    FullName: { 
        type: String,
        required: true
    },
    Date: { 
        type: Number,
        required: true,
        default: Date.now
    },
    Sub:{ 
        type: Number,
        require: true
    },
    Pol:{ 
        type: Number,
        require: true
    },
    Source:{ 
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Stock', stockSchema)

