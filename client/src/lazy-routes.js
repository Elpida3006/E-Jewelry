import React , {Suspense} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route} from 'react-router-dom';
import {lazy} from 'react';

const App = lazy(() => import('./containers/App'));
const Home = lazy(() => import('./containers/Home'));
const Register = lazy(() => import('./page-components/Register/Register'));
const Login = lazy(() => import('./page-components/Login/Login'));
const About = lazy(() => import('./page-components/About/About'));

function Routes () {
    return (
        <Router>
        <Suspense fallback={<h2>Please wait.....</h2>}>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/Cover"  component={App} />
            <Route path="/Home"  component={Home} />
            <Route path="/About"  component={About} />
            <Route path="/user/register"  component={Register} />
            <Route path="/user/login"  component={Login} />
            </Switch>
        </Suspense>
        </Router>
    );
}
export default Routes;