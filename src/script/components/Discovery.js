import React,{Component} from 'react'
import Header from './common/Header'
import TabBar from './common/TabBar'
import Menu from './common/Menu'
import UJPDiscovery from './discovery/UJPDiscovery'

class Discovery extends Component{
    render(){
      return(
        <div className="m-discovery">

              <Header />
              <UJPDiscovery />
              <TabBar />
              <Menu />
        </div>

      )
    }
}
export default Discovery
