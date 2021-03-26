const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    nameProduct: {
        type: String,
        required: true,
        // unique: true,

    },
    price: {
        type: Number,
        required: true,
        // unique: false,
        // validate: /^d+/
    },
    imageUrl: {
        type: String,
        required: true,
        // unique: false,
        // validate: /^http|https/


    },
    description: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true,
        // unique: false,

    },
    category: {
        type: String,
        required: true,
    },
    like: {
        type: Number
    },
    buyers: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],

    createdAt: {
        type: Date,
        required: true
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        // required: true


    },
  
});


module.exports = mongoose.model('Product', productSchema)