import React , {Component} from 'react';
import Layout from '../../components/Layout/Layout';
import style from './Login.module.css';
import {Link} from 'react-router-dom';
import * as service from '../../services/userService';
// import 'bulma/css/bulma.css';
// import {AdminPass} from '../../credentials';
//Forms
class  Login extends Component {
  constructor(props){
      super(props);
       this.state = {
          email: '',
          password: '',
          errorMesage: '',
          successMessage:''
         
      };
  }

onSubmitHandler = (e) => {
    e.preventDefault();
    const {email, password} = this.state;

    console.log(`login context ${this.context}`);
    service.postLogin(email, password)
          .then(userCredential => {
            console.log(userCredential);
         

            console.log('Client isLogin');
            

          
            this.props.history.push('/Home');
        })
        .catch(err =>  {
          this.props.history.push('/user/login');
          const newState = {};
      
                    let  errorMesage = 'Wrong Email or password';
                    newState['errorMesage'] = errorMesage;
                    this.setState(newState);
        });
  }

changeValue = (e, type) => {

  const newState = {};
  newState[type] = e.target.value;
 
   if( type  === 'password') {
     let pass = e.target.value;
    if((pass.length) < 4) {
        let  errorMesage = 'Password have to be min 4 characters';
       newState['errorMesage'] = errorMesage;
    } else if ((pass.length) > 4){
        let successMessage = `Password: ${e.target.value}  is Correct!`;
        newState['successMessage'] = successMessage;
    }
}
 if( type  === 'email') {
  const regEx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;  
  if(!regEx.test(e.target.value)) {
      let  errorMesage = 'Invalid email';
     newState['errorMesage'] = errorMesage;
  } else if (regEx.test(e.target.value)){
      let successMessage = `Email: ${e.target.value}  is Correct!`;
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
            password,
            errorMesage,
            successMessage
        } = this.state;
        

  return (

  <Layout>

        <div className={style.Login}>
              <h1>Login</h1>
    
        
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
        <p className={style.InfoP}>Don't have account?
                <Link className={style.Info} to="/user/register">Register now</Link> and fix that!
            </p>
            <label className={style['Label']} htmlFor="email">Email</label>
            <input className={style['Input-Login']} value={email} onChange = {e =>  this.changeValue(e, 'email')}  type="email" name="email" placeholder="Email..."/>
      
          <label className={style['Label']} htmlFor="password">Password</label>
          <input className={style['Input-Login']} value={password} onChange = {e =>  this.changeValue(e, 'password')} type="password" name="password" placeholder="Password"/>   
        
        
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
