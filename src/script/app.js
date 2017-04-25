require('../style/app.scss')
import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,IndexRoute,IndexRedirect,browserHistory} from 'react-router'
import Index from './components/index'
import List from './components/List'
import HotList from './components/HotList'
import Details from './components/details'
import Login from './components/login_register/login'
import Personal from './components/login_register/personal'
import Agreement from './components/login_register/agreement'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Index} >
    </Route>
    <Route path="/list/:type" component={List} />
    <Route path="/details/:type" component={Details} />
    <Route path="/hotlist" component={HotList} />
    <Route path="/login" component={Login} />
    <Route path="/personal" component={Personal} />
    <Route path="/agreement" component={Agreement} />

  </Router>
),document.getElementById('root'))
