const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var phoneSchemaful = new Schema({
    total: {
        type: String,
        required: true,
    },
    shopping: {
        type: String,
        required: false
    }, 
    education: {
        type: String,
        required: false
    },
    browsing: {
        type: String,
        required: false
    },
    socialMedia: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date, 
        default: Date.now
    }
}, {
    timestamps: true
}); // this is to create a schema for mongodb to read
var phoneusage = mongoose.model('PhoneUsage', phoneSchemaful);

module.exports = phoneusage;