const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname: String,
    lastname: String,
    avatar: String,
    email: String,
    address: String,
    //province: [ProvinceSchema],
    //canton: [CantonSchema],
    //district: [DistrictSchema],
    password: String,
    dni: String,
    sex: String,
    birth_date: Date,
    timestamp: { type: Date, default: Date.now },
    //dealership: [DealershipSchema]
});
 
const User = mongoose.model('User', UserSchema);
 
module.exports = User;