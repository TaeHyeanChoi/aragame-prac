const jwt = require('jsonwebtoken');
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
            return res.redirect("http://143.248.234.13:3000/login?succeed1=fail")
        }
        const newUser = new User();
        newUser.username = username;
        newUser.password = newUser.generateHash(password);
        newUser.bestscore = 0;
        newUser.numberofplays = 0;
        

        // save it
        newUser.save((err) => {
            if (err) throw err;
            res.redirect("http://143.248.234.13:3000/login?succeed1=succeed")
        })
    })
}

exports.login = (req, res) => {
    const {username, password} = req.body
    const secret = req.app.get('jwt-secret');

    // Check the User info
    User.findOne({username: username}, (err, user) => {
        if (err) throw err;

        if (!user) {
            return res.redirect("http://143.248.234.13:3000/login?succeed2=fail")
        }

        if (user.validPassword(password)) {
            // generate JWT
            jwt.sign({
                _id: user._id,
                username: user.username
            }, secret, {
                expiresIn: '7d',
                issuer: 'aragame.com',
                subject: 'userInfo'
            }, (err, token) => {
                if (err) throw err;
                res.redirect("http://143.248.234.13:3000/login?succeed2=succeed&token="+token)
            })
        }


    })
}

exports.check = (req, res) => {
    const token = req.headers['x-access-token'] || req.query.token;
    
    // there is not token,
    if(!token) {
        return res.status(403).json({
            success: false,
            message: 'not logged in'
        })
    }

    // decode the token
    jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
        if (err) {
            res.status(403).json({
                success: false,
                message: err.message
            })
        } else {
            res.json({
                success: true,
                info: decoded
            })
        }
    })
}