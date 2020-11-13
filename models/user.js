const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    //You dont have to add any other information.
    email: {
        type: String,
        required: true,
        unique: true
    }
});

//This is going to add our schema a username, a field for passwords
// its going to make sure that those passwords are unique, it will also
// give us aditional functions.
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);