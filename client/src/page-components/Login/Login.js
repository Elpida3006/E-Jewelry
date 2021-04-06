import React , {Component} from 'react';
import Layout from '../../components/Layout/Layout';
import style from './Login.module.css';
import {Link} from 'react-router-dom';
import * as service from '../../services/userService';
// import {UserContext} from '../../global-context/UserContexts';
// import {AdminPass} from '../../credentials';
//Forms
class  Login extends Component {
  constructor(props){
      super(props);
       this.state = {
          email: '',
          password: '',
          // isLogged: null,
          // isAdmin: null,
          // user: null
         
      };
  }
      // logIn = (user) => { 
      //           console.log(`its a context email: ${user.email}`);    
      //                   (user.email === 'special@gmail.com') ?  (this.setState({isAdmin: true, isLogged: true, user})) : this.setState({isLogged: true, user});
      //                   console.log(this.context);
      //               }
    
      // logOut = () => { 
      //                     document.cookie = 'auth-cookie= ; expires = Thu, 01 Jan 1970 00:00:00 HMT';
      //                     this.setState({isLogged: false, user: null});
      // }     
      
  // static contextType = UserContext;
  //declararative method for context consumer
onSubmitHandler = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    //validation if-else
    console.log(`login context ${this.context}`);
    service.postLogin(email, password)
          .then(userCredential => {
            console.log(userCredential);
            // console.log(userCredential.fullname);
            // console.log(userCredential._id);
            //authCookieHeader from BE - res.header - token
            // logIn(userCredential);
          // (userCredential.email === AdminPass.pass) ?  (this.setState({isAdmin: true, isLogged: true, userCredential})) : this.setState({isLogged: true, userCredential});

          // console.log(this.state.isLogged);
          // console.log(this.state.isAdmin);

            console.log('Client isLogin');
       
            //to fix: not change context
            this.props.history.push('/Home');
        })
        .catch(err =>  {
            console.log('Client isNot Login');
        });
  }

changeValue = (e, type) => {
     // e.preventDeafault();
  //    console.log(e);
  const newState = {};
  newState[type] = e.target.value;
  this.setState(newState);
  console.log(newState);

};
//Forms


render(){
      const  {
            email,
            password,
          // isAdmin,
          // isLogged
        } = this.state;

  return (

  <Layout>

        <div className={style.Login}>
              <h1>Login</h1>
              {/* {{#if errorMesage}}
        <p class="message">{{errorMesage}}</p>
        {{/if}} */}
        <form onSubmit={this.onSubmitHandler}>
        <p className={style.InfoP}>Don't have account?
                <Link className={style.Info} to="/user/register">Register now</Link> and fix that!
            </p>
            <label className={style['Label']} htmlFor="email">Email</label>
            <input value={email} onChange = {e =>  this.changeValue(e, 'email')}  type="email" name="email" placeholder="Email..."/>
      
          <label className={style['Label']} htmlFor="password">Password</label>
          <input value={password} onChange = {e =>  this.changeValue(e, 'password')} type="password" name="password" placeholder="Password"/>   
        
        
          <button type="submit" className={style['LoginBtn']}>
         Login
              </button>
        </form>
            
          
        
          </div> 
     </Layout>
   
);
}
}
// Login.contextType = UserContext;
export default Login; 
