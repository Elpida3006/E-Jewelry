import React from 'react';
import style from './Layout.module.css';
import Menu from '../Menu/Menu';

function Layout() {
    return (
        <div className={style.Layout}>
            <Menu/>
           <main>
            {/* changed pages */}
           </main>
        </div>
    );
}



export default Layout;