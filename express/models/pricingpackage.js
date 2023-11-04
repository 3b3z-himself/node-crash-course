const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tourismPackagesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    days: {
        type: [JSON],
        required: true
    },
    price: {
        type: Number,
        required: true
    }

}, { timestamps: true});

const package = mongoose.model('Package', tourismPackagesSchema);

module.exports = package;
