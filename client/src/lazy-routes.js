import React , {Suspense} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route} from 'react-router-dom';
import {lazy} from 'react';

const App = lazy(() => import('./containers/App'));
const Cover = lazy(() => import('./containers/Cover'));
const Home = lazy(() => import('./containers/Home'));
const Register = lazy(() => import('./page-components/Register/Register'));
const Login = lazy(() => import('./page-components/Login/Login'));
const About = lazy(() => import('./page-components/About/About'));
const Contact = lazy(() => import('./page-components/Contact/Contact'));
const Create = lazy(() => import('./page-components/Create/Create'));

const Products = lazy(() => import('./containers/Products'));
// const Gold = lazy(() => import('./components/Products/Gold/Gold'));
// const Leather = lazy(() => import('./components/Products/Leather/Leather'));

//Lazy-Loading


function Routes () {
    return (
        <Router>
        <Suspense fallback={<h2>Please wait.....</h2>}>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/Cover"   component={Cover} />
            <Route path="/Home"  component={Home} />
            <Route path="/About"  component={About} />
            <Route path="/Contact"  component={Contact} />
            <Route path="/user/register"  component={Register} />
            <Route path="/user/login"  component={Login} />
            <Route path="/Create/Silver"  component={Create} />
            <Route path="/Create/Gold"  component={Create} />
            <Route path="/Create/Leather-Accessory"  component={Create} />
            <Route path="/products/silver"  component={Home} />
            <Route path="/products/gold"  component={Home} />
            <Route path="/products/leather-Accessory"  component={Home} />

            </Switch>
        </Suspense>
        </Router>
    );
}
export default Routes;