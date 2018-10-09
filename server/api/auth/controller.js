const User = require('../../models/user');

/*
POST /api/auth/signup
{
    username,
    password
}
*/

exports.signup = (req, res) => {
    const {username, password} = req.body

    User.findOne({username: username}, (err, user) => {
        if (err) throw err;

        // If there is same username
        if (user) {
            res.end("There is user with same username");
        }
        const newUser = new User();
        newUser.username = username;
        newUser.password = newUser.generateHash(password);
        newUser.bestscore = 0;
        newUser.numberofplays = 0;
        

        // save it
        newUser.save((err) => {
            if (err) throw err;
            res.end("Sign up is completed")
        })
    })
}