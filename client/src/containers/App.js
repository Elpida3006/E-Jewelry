import React  from 'react';

import style from './App.module.css';
// import Footer from '../components/Footer/Footer';
// import Header from '../components/Header/Header';
// import Layout from '../components/Layout/Layout';
import Cover from './Cover';

// import {Link} from 'react-router-dom';
function App() {

    return ( 
        <body className={style.BackgroundCover}>  
          <div className={style.App} >
          <Cover/>
              </div> 
              </body>
      
// {/*    
//              <Header/> */}
//              {/* <Register/> */}
         
//             {/* <Footer/> */}

        // </div>
    );
}



export default App;