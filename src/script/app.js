require('../style/app.scss')
import React from 'react'
import ReactDom from 'react-dom'

import CommentBox from './components/comment/CommentBox'

ReactDom.render(
  <CommentBox />,
  document.getElementById('root')
)
