const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    // Just specify email. Not passport and username. The below plugin does it for me.
    email: {
        type: String,
        required: true,
        unique: true
    }
});

/* Also makes sure that the usernames are unique and not doublicated,
   it also adds some additional helpful functions */
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);