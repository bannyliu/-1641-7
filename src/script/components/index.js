import React,{Component} from 'react'
import Header from './common/Header'
import TabBar from './common/TabBar'
import Menu from './common/Menu'
import Board from './indexBoard/Board'

class Index extends Component{
    render(){
      return(
        <div className="m-index">

              <Header />
              <Board />
              <TabBar />
              <Menu />
              
        </div>

      )
    }
}
export default Index
