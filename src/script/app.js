require('../style/app.scss')
import React from 'react'
import ReactDOM from 'react-dom'

import {Router,Route,hasHistory,IndexRoute,IndexRedirect} from 'react-router'
import Details from './components/Details'

ReactDOM.render((

  <Details />
  
), document.getElementById('root'))
