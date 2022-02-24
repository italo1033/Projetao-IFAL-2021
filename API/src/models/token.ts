const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    status : {
        type : String,
        required: true
    },
    token : {
        type : String,
        required: true
    },
    refreshToken : {
        type : String,
        required: true
    }
})

const Token = mongoose.model('token', schema);

export default Token;