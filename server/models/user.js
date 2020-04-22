const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema( {
    // imageUrl: {type:String},
    // firstname: {type: String, required: true},
    // lastName: {type: String, required: true},
    // Course:{type: String, required:true},
    // bookTitle: {type:String, required: true},
    // ISBN: {type:String, required: true},
    // edition: {type: String, required: true},
    // Author: {type: String, required: true},
    // condition: {type: String, required: true},
    // views: {type: Number},
    // price: {type: Number},
    // method: {type: String, require:true}

    username: {type:String},
    email: {type: String},
    password: {type: String},
    affiliation: {type: String},
    phoneNumber: {type: Number}

} , {
    timestamps: true
})

const User = mongoose.model('User', userSchema);
module.exports = User;