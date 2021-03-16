import React from 'react';
import Layout from '../../components/Layout/Layout';
import style from './Login.module.css';
import {Link} from 'react-router-dom';

function Login() {

return (

<Layout>
<div className={style.Login}>
        <h1>Login</h1>
        {/* {{#if errorMesage}}
  <p class="message">{{errorMesage}}</p>
  {{/if}} */}
       <p className={style.InfoP}>Don't have account?
          <Link className={style.Info} to="/user/register">Register now</Link> and fix that!
      </p>
      <label htmlFor="email">Email</label>
    <input type="email" name="email" placeholder="Email..."/>
 
    <label htmlFor="password">Password</label>
    <input type="password" name="password" placeholder="Password"/>   
   
   
    <button>
    <Link className={style.Button} to="/user/login">Login</Link>
        </button>
    
   
    </div> 
    </Layout>
   
);

}

export default Login; 
