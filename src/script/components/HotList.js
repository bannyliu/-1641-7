import React,{Component} from 'react'
import Header from './common/Header'

import LimitList from './hotlist/limitList'

class HotList extends Component{
  render(){
    return (
      <div className="u-hotlist">
          <Header />
          <LimitList />
      </div>
    )
  }
}
export default HotList
