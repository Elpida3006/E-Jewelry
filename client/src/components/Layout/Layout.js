// import React from 'react';
// import style from './Layout.module.css';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
//HOC
//declarate context here or in App.js
// function Layout (props){


//     return (
     
//               <div className={style.Layout}>
//               <Header/>
//                 {props.children}
//               <Footer/>
//               </div> 
//     );
    
// }



// export default Layout;
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import React , {Component} from 'react';
import style from './Layout.module.css';
import {UserContext} from '../../global-context/UserContexts';
import {checkToken, getCookie} from '../../services/userService';

class Layout extends Component {
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
                    (user.email === 'nadq123@abv.bg') ?  (this.setState({isAdmin: true, isLogged: true, user})) : this.setState({isLogged: true, user});
                    console.log(this.state.isLogged);
                    }
    
    logOut = () => { 
                        document.cookie = 'auth-cookie= ; expires = Thu, 01 Jan 1970 00:00:00 HMT';
                        return   this.setState({isLogged: false, user: null});
                    
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
        .then(user => 
            {
              console.log(user);
                this.logIn(
                  user
                );
            })
            .catch(e => {
                this.logOut();
            });

    }
    render() {
        const { isLogged, isAdmin, user} = this.state;

        return ( 
            <UserContext.Provider value={{
                isLogged, isAdmin, user, logIn: this.logIn, logOut: this.logOut
            }}>
           
            
              <div className={style.Layout}>
              <Header/>
                {this.props.children}
               <Footer/>
              </div> 
            
             
     
            </UserContext.Provider>
        

        );
    }

    }
    export default Layout;