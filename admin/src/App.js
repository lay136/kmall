import React, { Component,Fragment } from 'react'
import './App.css'
import { getUsername } from 'util'

import { 
    BrowserRouter as Router, 
    // HashRouter as Router, 
    Route, 
    Link,
    Switch,
    Redirect
} from "react-router-dom"


import Home from 'pages/home/index.js';
import Login from 'pages/login/index.js';
import User from 'pages/user';
import Category from 'pages/category';
import Product from 'pages/product';
import Ad from 'pages/ad';

import Err from 'common/err';


//容器组件(自定义路由)
class App extends Component {
    render() {
        //判断是否登录，没有登录跳转到登录页面
        const HomeRoute = ({component:Component,...rest})=>(
            <Route 
                {...rest} 
                render={(props)=>{
                    return getUsername() ? <Component {...props} /> : <Redirect to="/login" />
                }}
            />
        )
        //已经登录的，自动跳转到登录页面
        const LoginRoute = ({component:Component,...rest})=>(
            <Route 
                {...rest} 
                render={(props)=>{
                    return getUsername() ? <Redirect to="/" /> : <Component {...props} /> 
                }}
            />
        )
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <HomeRoute exact path="/" exact component={ Home } />
                        <HomeRoute path="/user" component={ User } />
                        <HomeRoute  path="/category" component={ Category }  />
                        <HomeRoute  path="/product" component={ Product }  />
                        <HomeRoute  path="/ad" component={Ad}  />
                        <LoginRoute path="/login" component={ Login } />
                        <Route component={ Err } />
                    </Switch>
                </div>
            </Router>
        )          
    }
}


export default App



