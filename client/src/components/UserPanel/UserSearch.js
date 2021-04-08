import React from 'react';
import style from './UserSearch.module.css';
// import {Link, Redirect} from 'react-router-dom';
// import * as service from '../../services/productService';

function UserSearch({history}) {



    return (
   

        <div className={style.UserSearch}>   
      
            <li className={style['Nav-UserSearch']}> 
                <li className={style['Nav-S']}>
                Search Panel
                </li>
    
                            {/* <select className={style['select']} type="text" name="like">
                                
                                                        <option value="a-z">like a-z</option>
                                                        <option value="z-a">like z-a</option>

                  
                                </select> */}
                                {/* <button type="submit" className={style['Nav-Search']}>Go</button> */}

                        {/* </Link> */}
                {/* </li> */}

                {/* <li className={style['Nav-Li2']}> 
                        <Link className={style['Nav-Product']} to={`/products/${'nameProduct'}`}> 
                        <input className={style['select']} type="text" name="searchProduct" placeholder="search..."/>
                        <button type="submit" className={style['Nav-Search']}>Go</button>
                     </Link>
                </li> */}
            </li>
        </div>
    );
}



export default UserSearch;