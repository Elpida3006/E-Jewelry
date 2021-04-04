
import React , {Component} from 'react';
import style from './Header.module.css';
import {Link} from 'react-router-dom';
import {UserContext} from '../../global-context/UserContexts';


class Header extends Component {
        static contextType = UserContext;

        logOut = () => {this.context.logOut();};

        render(){
        const {
            isLogged,  isAdmin
        } = this.context;

            return (

        <navigation className={style['Nav-Link']}>
                
            
                
                <ul className={style['Ul-Tab']}>
            
                    <li className={style['Nav-Cover']}>
                        <Link className={style['Li']} to="/Cover">E-Jewerly</Link>  
                    </li>

                     {isLogged ? 
                     <>
                        { isAdmin ? 
                               <> <li className={style['Nav-Li']}>
                                <Link className={style['Li']} to="/Admin">Admin </Link>
                                </li> </>
                            :  <> <li className={style['Nav-Li']}>
                                <Link className={style['Li']} to="/user/logout" onClick={this.logOut}> Logout</Link>
                                </li>  
                                <li className={style['Nav-Li']}>
                                <Link className={style['Li']} to="/user/profile/:id"> Profile</Link>
                                </li>  
                                </>
                            }
                    </>
                     : <>
                     <li className={style['Nav-Li']}>
                        <Link className={style['Li']} to="/user/login">Login</Link>
                    </li>
            
                    <li className={style['Nav-Li']}>
                    <Link className={style['Li']} to="/user/register"> Register</Link>
                    </li>  
                    </>
                    }
                   
                    

                    <li className={style['Nav-Li']}>
                        <Link className={style['Li']} to="/About">About </Link>
                    </li>
                
                    
                    <li className={style['Nav-Li']}>
                        <Link className={style['Li']} to="/Contact">Contact Us</Link>
                    </li>
            {/* isGuest */}
                   
            
                  
                </ul>
                
                
            
            </navigation>
            );
        }

}
export default Header;

