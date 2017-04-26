import React,{Component} from 'react'
import Header from './common/Header'
import TabBar from './common/TabBar'
import Menu from './common/Menu'
import UJPCategory from './category/UJPCategory'

class Category extends Component{
    render(){
      return(
        <div className="m-category">

              <Header />
              <UJPCategory />
              <TabBar />
              <Menu />

        </div>

      )
    }
}
export default Category
