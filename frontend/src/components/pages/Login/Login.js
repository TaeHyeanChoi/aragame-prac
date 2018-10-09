import React, {Component} from 'react';

class Login extends Component {

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form action="http://143.248.234.13:9000/api/auth/signup" method="POST">
                    <input type="text" name="username" />
                    <input type="password" name="password" />
                    <button type="submit">회원가입</button>
                </form>
            </div>
        )
    }
}

export default Login;