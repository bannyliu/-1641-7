import React,{Component} from 'react'
import Header from './common/Header'
import TabBar from './common/TabBar'
import Menu from './common/Menu'
import UJPUser from './user/UJPUser'

class User extends Component{
    render(){
      return(
        <div className="m-user">

              <Header />
              <UJPUser />
              <TabBar />
              <Menu />

        </div>

      )
    }
}
export default User
