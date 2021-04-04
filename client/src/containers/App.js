import React , {Component} from 'react';
import style from './App.module.css';
import {UserContext} from '../global-context/UserContexts';
import {checkToken, getCookie} from '../services/userService';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        isLogged: null,
        isAdmin: null,
            user: null
        };
    }
    logIn = (user) => { 
                console.log(`its a context email: ${user.email}`);    
                        (user.email === 'special@gmail.com') ?  (this.setState({isAdmin: true, isLogged: true, user})) : this.setState({isLogged: true, user});
                    }
    
    logOut = () => { 
                        document.cookie = '';
                        this.setState({isLogged: false, user: null});
                    
                    }
componentDidMount() {
    const token = getCookie('auth_cookie');
console.log(token);
    if (!token) {
        console.log('Your token is expired');
        this.logOut();
        return;
    }
    checkToken(token)
    .then(res => 
        {
            this.logIn({
                email: res.user.email,
            id: res.user._id  
            });
        });
}
  render() {
    const { isLogged, isAdmin, user} = this.state;

    return ( 
        <UserContext.Provider value={{
            isLogged, isAdmin, user, logIn: this.logIn, logOut: this.logOut
          }}>
        <body className={style.BackgroundCover}>  
                <div className={style.App} >
                 {this.props.children}
              </div> 
        </body>
        </UserContext.Provider>
      

    );
}

}

export default App;