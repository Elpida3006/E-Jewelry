import logo from './logo1.png';
import './App.css';

function App() {

    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        Welcome in Our E - Jewelry Shop { /* <code>src/App.js</code> and save to reload. */ } <
        /p> <
        p > Let 's Start</p> <
        a className = "App-link"
        href = "/"
        target = "_blank"
        rel = "noopener noreferrer" >
        Home <
        /a> < /
        header > <
        /div>
    );
}

export default App;