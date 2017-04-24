<<<<<<< HEAD

require('../style/app.scss')
import React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD
<<<<<<< HEAD
import {Router,Route,hashHistory,IndexRoute,IndexRedirect} from 'react-router'
import Index from './components/index'
import List from './components/List'
import HotList from './components/HotList'
import Details from './components/details'
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Index} />
    </Route>
    <Route path="/list/:type" component={List} ></Route>
    <Route path="/details/:type" component={Details} ></Route>
    <Route path="/hotlist/:type" component={HotList} ></Route>
  </Router>
),document.getElementById('root'))
=======
require('../style/app.scss')
import React from 'react'

import ReactDOM from 'react-dom'

import List from './components/List'

// import HotList from './components/HotList'

ReactDOM.render(
  (<List />
  ),
  document.getElementById('root')
)
>>>>>>> origin/20170419-baixiaomei
=======

import {Router,Route,hasHistory,IndexRoute,IndexRedirect} from 'react-router'
import Details from './components/Details'

ReactDOM.render((

  <Details />
  
), document.getElementById('root'))
>>>>>>> origin/TzzWorks
=======
import {Router,Route,hashHistory,IndexRoute,IndexRedirect,browserHistory} from 'react-router'
import Login from './components/login_register/login'
import Agreement from './components/login_register/agreement'
import Personal from './components/login_register/personal'
ReactDOM.render(( <div ><Personal / ></div>
), document.getElementById('root'))
>>>>>>> origin/Saber
