const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true,
    },
    archived: {
        type: Boolean,
        required: true,
        default: true
    }
})

module.exports = mongoose.model('Note', noteSchema)