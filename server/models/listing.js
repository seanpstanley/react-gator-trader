const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const listingSchema = new Schema( {
    firstname: {type: String, required: true},
    lastName: {type: String, required: true},
    bookTitle: {type:String, required: true},
    ISBN: {type:String},
    edition: {type: String},
    Author: {type: String},
    condition: {type: String},
    views: {type: Number},
    price: {type: Number}
} , {
    timestamps: true
})

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;
