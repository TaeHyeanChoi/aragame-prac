import React, {Component} from 'react';
import queryString from 'query-string';

class Login extends Component {

    render() {

        const query = queryString.parse(this.props.location.search);

        return (
            <div>
                <h1>Signup</h1>
                
                <form action="http://localhost:9000/api/auth/signup" method="POST">
                    <input type="text" name="username" />
                    <input type="password" name="password" />
                    <button type="submit">회원가입</button>
                </form>

                <h1>Login</h1>

                <form action="http://localhost:9000/api/auth/login" method="POST">
                    <input type="text" name="username" />
                    <input type="password" name="password" />
                    <button type="submit">로그인</button>
                </form>

                {query.succeed1==="succeed" && <div>회원가입 성공</div>}
                {query.succeed1==="fail" && <div>회원가입 실패</div>}
                {query.succeed2==="succeed" && <div>로그인 성공</div>}
                {query.succeed2==="fail" && <div>로그인 실패</div>}
                
            </div>
        )
    }
}

export default Login;