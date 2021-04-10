import React from 'react';
import style from './FinalizeMessage.module.css';
import Layout from '../../components/Layout/Layout';
import {} from 'react-router-dom';
import background from '../../static/gold-jewelry-background-vector-2075787.jpg';
import {Link} from 'react-router-dom';
import {logoutUser} from '../../services/userService';

function FinalizeMessage({match}) {
 const   logOut = () => {
       
        logoutUser();
        return this.context.logOut({ });

   
};   
    return(
        <body style={{backgroundImage: `url(${background})` , minHeight: '900px'}} >       
<Layout>
<div className={style.FinalizeMessage}>
    <h2 className={style.Font}>Thank you for shopping with us!</h2>
    <br/>
    <br/>
    <p className={style.Paragraph}>You have finalized your order. Please expect our representative to contact you for confirmation and to specify the place and date of delivery. if you want to return to the store, please  <Link className={style.Info} to="/Home"> click here</Link> or  <Link className={style['Li']} to="/user/logout" onClick={logOut}> Buy and Good Luck ;)</Link> </p>

</div>
</Layout>
</body>
    );
}

export default FinalizeMessage;