import React from 'react';
import Layout from '../../components/Layout/Layout';
import style from './Register.module.css';
import {Link} from 'react-router-dom';

function Register() {

return (

<Layout>
<div className={style.Register}>
        <h1>Register</h1>
        {/* {{#if errorMesage}}
  <p class="message">{{errorMesage}}</p>
  {{/if}} */}
       <p className={style.InfoP}>Already registered?
          <Link className={style.Info} to="/user/login">Login now</Link> and have some fun!
      </p>
      <label htmlFor="email">Email</label>
    <input type="email" name="email" placeholder="Email..."/>
    <label htmlFor="fullname">Fullname</label>
    <input type="text" name="fullname" placeholder="Full name..."/>
    <label htmlFor="password">Password</label>
    <input type="password" name="password" placeholder="Password"/>   
    <label htmlFor="password">Re-Password</label>
    <input type="password" name="rePassword" placeholder="Re-password"/>
   
    <button>
    <Link className={style.Button} to="/user/register">Register</Link>
        </button>
    
   
    </div> 
    </Layout>
   
);

}

export default Register; 
