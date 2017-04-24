import React,{Component} from 'react'
import Header from './common/Header'

import UpinList from './list/upinList'

class List extends Component{
  render(){
    return (
      <div className="u-list">
          <Header />
          <UpinList />
      </div>
    )
  }
}
export default List
