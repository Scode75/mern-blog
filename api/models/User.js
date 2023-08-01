const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    fullname: {type: String, required: true, min: 50},
    username: {type: String, required: true, min: 4, unique: true},
    password: {type: String, required: true}
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;
// module.exports = mongoose.model("User", UserSchema);