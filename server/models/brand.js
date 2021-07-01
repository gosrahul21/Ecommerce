const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    name:{
        type:String,
        default:"Anonymous"
    }
});


module.exports = mongoose.model('Brand' ,brandSchema);