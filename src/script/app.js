<<<<<<< HEAD

require('../style/app.scss')
import React from 'react'
import ReactDOM from 'react-dom'
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
