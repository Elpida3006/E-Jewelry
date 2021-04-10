import React , {Component} from 'react';
import Layout from '../../components/Layout/Layout';
import style from './Register.module.css';
import {Link} from 'react-router-dom';
import * as service from '../../services/userService';
// import 'bulma/css/bulma.css';

class  Register extends Component {
    constructor(props){
        super(props);
         this.state = {
            email: '',
            fullname: '',
            password: '',
            rePassword: '',
            errorMesage: '',
            successMessage:''
        };
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        const {email, fullname, password, rePassword} = this.state;
        //validation
        service.postRegister(email, fullname, password, rePassword)
        .then(userCredential => {
            console.log('Client Register');
            this.props.history.push('/user/login');
        })
        .catch(err =>  {
            console.log('Client Not Register');
        });
    
      }

 changeValue = (e, type) => {
  

    const newState = {};
    newState[type] = e.target.value;
       if( type  === 'fullname') {
               if(e.target.value.length < 4) {
                   let  errorMesage = 'Fullname have to be min 4 characters!';
                  newState['errorMesage'] = errorMesage;
               } else {
                   let successMessage = 'It is Correct!';
                   newState['successMessage'] = successMessage;
               }
           }

       else if( type  === 'password') {
            if(e.target.value.length < 4) {
                let  errorMesage = 'Password have to be min 4 characters';
               newState['errorMesage'] = errorMesage;
            } else {
                let successMessage = 'It is Correct!';
                newState['successMessage'] = successMessage;
            }
        }

        else if( type  === 'rePassword') {
            if(e.target.value.length !== newState['password']) {
                let  errorMesage = 'Password do not match!';
               newState['errorMesage'] = errorMesage;
            } else {
                let successMessage = 'It is Correct!';
                newState['successMessage'] = successMessage;
            }
        }

        else if( type  === 'email') {
          
            if(!/\S+@\S+\.\S+/.test(e.target.value)) {
                let  errorMesage = 'Invalid email';
               newState['errorMesage'] = errorMesage;
            } else {
                let successMessage = 'It is Correct!';
                newState['successMessage'] = successMessage;
            }
        }

    this.setState(newState);
    console.log(newState);
 
};
//Forms


  render(){
  const  {
        email,
        fullname,
        password,
        rePassword,
        errorMesage,
        successMessage
    } = this.state;

    return (

        <Layout>
          
            <div className={style.Register}>
                <h1>Register</h1>
           
              <div className={style['Notification']}>
              {  errorMesage ?
              <>
                {/* <div className="notification is-danger"> */}
                <div className={style['Isdanger']}>
          <p className={style['Isdanger']}>{errorMesage}</p>
          </div> </> :<> </>}
          {successMessage ? <>
          {/* <div className="notification is-success"> */}
          <div className={style['Issuccess']}>
            <p className={style['Issuccess']}>{successMessage}</p>
          </div></> :<></>
         
         }
              </div>
           
            <form onSubmit={this.onSubmitHandler}>
              <p className={style.InfoP}>Already registered?
                  <Link className={style.Info} to="/user/login">Login now</Link> and have some fun!
              </p>
              <label className={style['Label']}  htmlFor="email">Email</label>
              <input className={style['Input']} value={email} onChange = {e =>  this.changeValue(e, 'email')}  type="email" name="email" placeholder="Email..."/>
        
              <label className={style['Label']} htmlFor="fullname">Fullname</label>
              <input className={style['Input']} value={fullname} onChange = {e =>  this.changeValue(e, 'fullname')} type="text" name="fullname" placeholder="Full name..."/>
        
              <label className={style['Label']} htmlFor="password">Password</label>
              <input className={style['Input']} value={password} onChange = {e =>  this.changeValue(e, 'password')} type="password" name="password" placeholder="Password"/>   
        
              <label className={style['Label']} htmlFor="rePassword">Re-Password</label>
              <input className={style['Input']} value={rePassword} onChange = {e =>  this.changeValue(e, 'rePassword')} type="password" name="rePassword" placeholder="Re-password"/>
           
              <button type="submit" className={style['RegisterBtn']}>
             Register
              </button>
            
              </form>
            </div> 
          
       
            </Layout>
           
        );
  }


}

export default Register; 
