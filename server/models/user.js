const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    username: String,
    password: String,
    bestscore: Number,
    numberofplays: Number
})

// Create new User
User.statics.create = function(username, password) {
    const user = new this({
        username,
        password
    })
    return user.save()
}

// Find one user by using username
User.statics.findOneByUsername = function(username) {
    return this.findOne({
        username
    }).exec()
}

// Verify the password of the User
User.methods.verify = function (password) {
    return this.password === password
}

module.exports = mongoose.model('User', User);

