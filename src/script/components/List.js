import React,{Component} from 'react'
import Header from './common/Header'

import UpinList from './list/upinList'

class List extends Component{
  render(){
    return (
      <div className="u-list">
          <Header />
          <UpinList type={this.props.params.type} />
      </div>
    )
  }
}
export default List
