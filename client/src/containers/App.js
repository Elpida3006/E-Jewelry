import React , {Component} from 'react';
import style from './App.module.css';
// import Footer from '../components/Footer/Footer';
// import Header from '../components/Header/Header';
// import Layout from '../components/Layout/Layout';
import {UserContext} from '../global-context/UserContexts';


// import {Link} from 'react-router-dom';
class App extends Component {
constructor(props){
    super(props);
    this.state = {
      isLogged: false,
       isAdmin: false,
        user: null
    };
  }
    logIn = (user) => { 
                console.log(`its a context email: ${user.email}`);    
                        (user.email === 'special@gmail.com') ?  (this.setState({isAdmin: true, isLogged: true, user})) : this.setState({isLogged: true, user});
                    }
    
    logOut = () => { 
                        this.setState({isLogged: false, user: null});
                    
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