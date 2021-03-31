import React from 'react';
//for class components
import style from './UserSearch.module.css';
import {Link} from 'react-router-dom';

function UserSearch() {
    // const ([setState, useEffect]) / set nameProduct
    return (
        <div className={style.UserSearch}>   
      
            <li className={style['Nav-UserSearch']}> 
                <li className={style['Nav-S']}>
                Search Panel
                </li>

                <li className={style['Nav-Li']}> 
                                     
                        <Link className={style['Nav-Product']} to={`/products/${'nameProduct'}`}> 
                          
                            
                            <select className={style['select']} type="text" name="nameProduct">
                                                        <option value="{nameProduct}">{'nameProduct'}</option>
                                                    
                                                
                                </select>
                        </Link>
                </li>

                <li className={style['Nav-Li2']}> 
                        <Link className={style['Nav-Product']} to={`/products/${'nameProduct'}`}> 
                        <input className={style['select']} type="text" name="searchProduct" placeholder="search..."/>
                        <button type="submit" className={style['Nav-Search']}>Go</button>
                     </Link>
                </li>
            </li>
        </div>
    );
}



export default UserSearch;