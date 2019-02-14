import React from 'react';
import App from './container/app'
import ReactDOM from 'react-dom';
import Home from './container/Home/Home';
import Sort from './container/Sort/Sort';
import Find from './container/Find/Find';
import User from './container/User/User';
import Seven from './container/Sort/Seven'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Search from "./container/Find/Search";
ReactDOM.render(
    <Router>
        <Switch>
            <App>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/sort" exact={true} component={Sort}/>
                <Route path="/find" exact={true} component={Find}/>
                <Route path='/user' exact={true} component={User}/>
                <Route path='/sort/seven' exact={true} component={Seven}/>
                <Route path='/find/search' exact={true} component={Search}/>
            </App>

        </Switch>
    </Router>,document.querySelector('#root')
)