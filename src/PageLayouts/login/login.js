import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import FontAwesome from 'react-fontawesome'


class Login extends React.Component {


    responseGoogle = (response) => {
        localStorage.setItem('loggedUser', JSON.stringify(response));
        this.setState({
            loggedUser: response
        });
    }

    logoutUser = () => {
        localStorage.removeItem('loggedUser');
        this.setState({
            loggedUser: null
        });
    }

    render() {
        let user = localStorage.getItem('loggedUser');
        if( user === null ) {
            return (

                <div className="google-login">
                    <GoogleLogin
                        clientId={'763009107746-djupr31f04g6mrdvi2o25f2l7p1eb7n6.apps.googleusercontent.com'}
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        offline={false}
                    >
                        <FontAwesome
                            name='google'
                        />
                        <span> Zaloguj się z Google</span>
                    </GoogleLogin>
                </div>
            )
        }else{
            user = JSON.parse( user );
            return (
                <a href="javascript:void(0)" onClick={ ()=> this.logoutUser() }>Witaj {user.profileObj.name} > Wyloguj</a>
            )

        }
    }
}
export default Login;

