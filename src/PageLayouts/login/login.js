import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import FontAwesome from 'react-fontawesome'

const responseGoogle = (response) => {
    console.log(response);
}

class Login extends React.Component {


    render() {
        return <div>
            <GoogleLogin
                clientId={'763009107746-djupr31f04g6mrdvi2o25f2l7p1eb7n6.apps.googleusercontent.com'}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                offline={false}
            >
                <FontAwesome
                name='google'
                />
                <span> Login with Google</span>
            </GoogleLogin>
        </div>
    }
}


export default Login;

