import React , {Component} from 'react';

import style from './App.module.css';
// import Footer from '../components/Footer/Footer';
// import Header from '../components/Header/Header';
// import Layout from '../components/Layout/Layout';
import Cover from './Cover';

// import {Link} from 'react-router-dom';
// function App() {

//     return ( 
//         <div className={style.App} >
   
//              {/* <Header/> */}
//              {/* <Register/> */}
//             <Cover/>
//             {/* <Footer/> */}

//         </div>
//     );
// }

class App extends Component {
    constructor(props) {
      super(props);
}
render() {
    return ( 
        <div className={style.App} >
   
             {/* <Header/> */}
             {/* <Register/> */}
            <Cover/>
            {/* <Footer/> */}

        </div>
    );
}
   
}

export default App;