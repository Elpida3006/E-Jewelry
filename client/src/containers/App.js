// import React from 'react';
// import style from './App.module.css';
// import {UserContext} from '../global-context/UserContexts';
// import {checkToken, getCookie} from '../services/userService';
// import {useState, useEffect} from 'react';

// const  App = (props) => {

//         const [user, setUser] = useState(null);
       
    
//  const logIn = (user) => { 
//                 console.log(`its a context email: ${user.email}`);    
              
//                         (user.email === 'special@gmail.com') ?  (setUser({isAdmin: true, isLogged: true, ...user})) : setUser({isLogged: true, ...user});
//                     };
    
// const logOut = () => { 
//                         document.cookie = 'auth-cookie= ; expires = Thu, 01 Jan 1970 00:00:00 HMT';
//                         setUser({isLogged: false});
                    
//                     };

//     useEffect (() => {
//         const token = getCookie('auth_cookie');
//             console.log(token);
//         if (!token) {
//             console.log('Your token is expired');
//             logOut();
//             return;
//         }
//         checkToken(token)
//         .then(res => 
//             {
//                 logIn({
//                     email: res.user.email,
//                 id: res.user._id  
//                 });
//             })
//             .catch(e => {
//                 this.logOut();
//             });

//     }, []);
  

//         return ( 
//             <UserContext.Provider value={{
//                 // isLogged, isAdmin, user, logIn: this.logIn, logOut: this.logOut
//             }}>
//             <body className={style.BackgroundCover}>  
//                     <div className={style.App} >
//                     {this.props.children}
//                 </div> 
//             </body>
//             </UserContext.Provider>
        

//         );
    
// };


// export default App;

import React , {Component} from 'react';
import style from './App.module.css';
import {UserContext} from '../global-context/UserContexts';
import {checkToken, getCookie} from '../services/userService';

// class App extends Component {
//     constructor(props){
//         super(props);

//         this.state = {
//         isLogged: null,
//         isAdmin: null,
//             user: null
//         };
//     }
//     logIn = (user) => { 
//                 console.log(`its a context email: ${user.email}`);    
//                         (user.email === 'special@gmail.com') ?  (this.setState({isAdmin: true, isLogged: true, user})) : this.setState({isLogged: true, user});
//                     }
    
//     logOut = () => { 
//                         document.cookie = 'auth-cookie= ; expires = Thu, 01 Jan 1970 00:00:00 HMT';
//                         this.setState({isLogged: false, user: null});
                    
//                     }
//     componentDidMount() {
//         const token = getCookie('auth_cookie');
//             console.log(token);
//         if (!token) {
//             console.log('Your token is expired');
//             this.logOut();
//             return;
//         }
//         checkToken(token)
//         .then(res => 
//             {
//                 this.logIn({
//                     email: res.user.email,
//                 id: res.user._id  
//                 });
//             })
//             .catch(e => {
//                 this.logOut();
//             });

//     }
//     render() {
//         const { isLogged, isAdmin, user} = this.state;

//         return ( 
//             <UserContext.Provider value={{
//                 isLogged, isAdmin, user, logIn: this.logIn, logOut: this.logOut
//             }}>
//             <body className={style.BackgroundCover}>  
//                     <div className={style.App} >
//                     {this.props.children}
//                 </div> 
//             </body>
//             </UserContext.Provider>
        

//         );
//     }

//     }


class App extends Component {
        render() {
           
    
            return ( 
                <body className={style.BackgroundCover}>  
                <div className={style.App} >
                {this.props.children}
            </div> 
        </body>
            );
        };
    };
export default App;