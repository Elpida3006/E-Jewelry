// import { adminEmail } from 'secret';
import React from 'react';


export const UserContext = React.createContext({
                    isAdmin: false,
                    isLogged: false,
                    user: null,
                    logIn: () => { },
                    logOut: () => { }
    //                 logIn  : (user) => { 
    //                     // (user.email === 'special@gmail.com') ?  (this.setState({isAdmin: true, isLogged: true, user})) : this.setState({isLogged: true, user});
    //                 },
    
    // logOut  :() => { 
    //                     this.setState({isLogged: false, user: null});
                    
    //                 }
                });

