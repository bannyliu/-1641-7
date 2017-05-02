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
import User from './components/User'
import Category from './components/Category'
import Discovery from './components/Discovery'
import Search from './components/UJPSearch'
import SearchList from './components/SearchList'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Index} >
      <IndexRoute component={Index} />
    </Route>
    <Route path="/list/:type" component={List} />
    <Route path="/details/:type" component={Details} />
    <Route path="/hotlist" component={HotList} />
    <Route path="/login" component={Login} />
    <Route path="/personal" component={Personal} />
    <Route path="/agreement" component={Agreement} />
    <Route path="/user" component={User} />
    <Route path="/category" component={Category} />
    <Route path="/discovery" component={Discovery} />
    <Route path="/search" component={Search} />
    <Route path="/searchlist/:type" component={SearchList} />
  </Router>
),document.getElementById('root'))
