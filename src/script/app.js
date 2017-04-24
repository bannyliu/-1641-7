require('../style/app.scss')
import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,IndexRoute,IndexRedirect,browserHistory} from 'react-router'
import Login from './components/login_register/login'
import Agreement from './components/login_register/agreement'
import Personal from './components/login_register/personal'
ReactDOM.render(( <div ><Personal / ></div>
), document.getElementById('root'))
