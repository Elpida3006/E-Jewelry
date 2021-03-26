import React , {Component} from 'react';
import Layout from '../../components/Layout/Layout';
import style from './Register.module.css';
import {Link} from 'react-router-dom';
class  Register extends Component {
    constructor(props){
        super(props);
         this.state = {
            email: '',
            fullname: '',
            password: '',
            rePassword: '',
        };
    }

 changeValue = (e, type) => {
    const newState = {};
    newState[type] = e.target.value;
    this.setState(newState);
    // e.preventDeafault();
    // const value = e.target.value;
    // console.log(value);
};
//Forms


  render(){
  const  {
        email,
        fullname,
        password,
        rePassword
    } = this.state;

    return (

        <Layout>
          
            <div className={style.Register}>
                <h1>Register</h1>
                {/* {{#if errorMesage}}
          <p class="message">{{errorMesage}}</p>
          {{/if}} */}
            <form >
              <p className={style.InfoP}>Already registered?
                  <Link className={style.Info} to="/user/login">Login now</Link> and have some fun!
              </p>
              <label className={style['Label']}  htmlFor="email">Email</label>
              <input value={email} onChange = {e =>  this.changeValue(e, 'email')}  type="email" name="email" placeholder="Email..."/>
        
              <label className={style['Label']} htmlFor="fullname">Fullname</label>
              <input value={fullname} onChange = {e =>  this.changeValue(e, 'fullname')} type="text" name="fullname" placeholder="Full name..."/>
        
              <label className={style['Label']} htmlFor="password">Password</label>
              <input value={password} onChange = {e =>  this.changeValue(e, 'password')} type="password" name="password" placeholder="Password"/>   
        
              <label className={style['Label']} htmlFor="rePassword">Re-Password</label>
              <input value={rePassword} onChange = {e =>  this.changeValue(e, 'rePassword')} type="password" name="rePassword" placeholder="Re-password"/>
           
              <button className={style['RegisterBtn']}>
              <Link className={style.Button} to="/user/register">Register</Link>
              </button>
            
              </form>
            </div> 
          
       
            </Layout>
           
        );
  }


}

export default Register; 
