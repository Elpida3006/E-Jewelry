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
const Create = lazy(() => import('./page-components/Create/Create'));

const Silver = lazy(() => import('./components/Products/Silver/Silver'));
const Gold = lazy(() => import('./components/Products/Gold/Gold'));
const Leather = lazy(() => import('./components/Products/Leather/Leather'));



function Routes () {
    return (
        <Router>
        <Suspense fallback={<h2>Please wait.....</h2>}>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/Cover"   component={Cover} />
            <Route path="/Home"  component={Home} />
            <Route path="/About"  component={About} />
            <Route path="/user/register"  component={Register} />
            <Route path="/user/login"  component={Login} />
            <Route path="/Create/Silver"  component={Create} />
            <Route path="/Create/Gold"  component={Create} />
            <Route path="/Create/Leather-Accessory"  component={Create} />
            <Route path="/Products/Silver"  component={Silver} />
            <Route path="/Products/Gold"  component={Gold} />
            <Route path="/Products/Leather-Accessory"  component={Leather} />

            </Switch>
        </Suspense>
        </Router>
    );
}
export default Routes;