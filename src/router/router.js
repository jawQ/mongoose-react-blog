
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import App from '../App'
// import Login from '../components/login/login'
import asyncComponent from '../components/asyncComponent'

const App = asyncComponent(()=> import(/* webpackChunkName: "App" */ '../App'))
const Login = asyncComponent(()=> import(/* webpackChunkName: "Login" */ '../components/login/login'))
const Error = asyncComponent(()=> import(/* webpackChunkName: "Error" */ '../components/Error'))
const Test = asyncComponent(()=> import(/* webpackChunkName: "Test" */ '../components/test'))

const AppRouter = function () {
  return(
    <Router>
      <Switch>
        <Route exact path='/' render={()=> <Redirect to='/login' />}></Route>
        <Route exact path='/panel' component={App}></Route>
        {/* <Route path='/panel/test' component={Test}></Route> */}
        <Route path='/login' component={Login}></Route>
        <Route path='/404' component={Error}/>
        {/* <Route path='*' render={()=> <Redirect to='/404'/>}/> */}
      </Switch>
    </Router>
  )
}

export default AppRouter;