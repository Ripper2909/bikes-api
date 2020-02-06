const mongoose = require('mongoose');

// Schema
const bikeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 200
    },
    brand: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 150
    },
    accessories: {
        type: [String],
        required: true,
        enum: ['front basket', 'back basket', 'rear view mirror', 'flowers', 'premium tires', 'bell', 'bag', 'pump']
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    releaseDate: {
        type: Date,
        default: Date.now()
    },
    isElectric: {
        type: Boolean,
        default: false
    }
});

//Model
const Bike = mongoose.model('Bike', bikeSchema);

//Export
module.exports = Bike;