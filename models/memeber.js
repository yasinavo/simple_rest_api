const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"

    },
    coordinates: {
        type: [Number],
        index:"2dsphere"
    }
});


// create member schema and model
const MemberSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    rank:{
        type:String
    },
    active:{
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});





const Member = mongoose.model('member',MemberSchema);

module.exports =  Member;
