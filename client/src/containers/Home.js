import React from 'react';
import style from './Home.module.css';
import logo from '../static/logo-home.jpg';
import Menu from '../components/Menu/Menu';
import Layout from '../components/Layout/Layout';
// let  server = 'http://localhost:3002/api/';
import Admin from '../components/Admin-Panel/Admin';

const isLogin= (props)=>{

};
const isAdmin= (props)=>{
    // isAdmin: true;
    //conditional rendering with state/props?
};
function Home() {

return (
<Layout>
<div className={style.Home} >
<div className={style.Static}>
    <div className={style.Menu}>
    <Menu/>
    </div>
      
    <div className={style.Image}>
        <img src = { logo } alt = "logo" />
    </div>
</div>

    <div className={style.Admin}>
   {isAdmin ? <Admin/> : null}
    </div>
  
{/* <Products/> */}
            {/* changed pages */}
    

</div>
</Layout>

);


}

export default Home;