import React , {Component} from 'react';
import Layout from '../../components/Layout/Layout';
import style from './Login.module.css';
import {Link} from 'react-router-dom';
import * as service from '../../services/userService';
import {UserContext} from '../../global-context/UserContexts';

//Forms
class  Login extends Component {
  constructor(props){
      super(props);
       this.state = {
          email: '',
          password: '',
          // isLogged: false,
          // isAdmin: false,
          // user: null
         
      };
  }
  static contextType = UserContext;
  //declararative method for context consumer
onSubmitHandler = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    //validation if-else
    // console.log(this.context);
    service.postLogin(email, password)
    .then(userCredential => {
      // console.log(userCredential.email);
      // console.log(userCredential.fullname);
      // console.log(userCredential._id);
      //authCookieHeader from BE - res.header - token
      // logIn(userCredential);
     this.context.logIn(userCredential);

      console.log('Client isLogin');
      console.log(  this.context);
      //to fix: not chane context
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

export default Login; 
