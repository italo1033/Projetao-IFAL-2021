const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    phone : {
        type : String,
        required: true
    },
    cpf : {
        type : String,
        required: true,
        unique: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    birthDate : {
        type : Date,
        trim: true,
        default: Date.now
    },
    password : {
        type: String,
        required: true
    },
})

const User = mongoose.model('user', schema);

export default User;