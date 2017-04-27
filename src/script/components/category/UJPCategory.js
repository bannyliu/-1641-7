import React,{Component} from 'react'
import Carousel from '../../../component_dev/carousel/src'

class UJPCategory extends  Component{
  constructor(props){
    super(props)
    this.state={
      categoryList:[]
    }
  }
  getCategory(){

  }
  render(){
    return(
      <div className="category">
        <nav>

        </nav>
        <Carousel autoplay={false}>
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
        </Carousel>
      </div>
    )
  }
  componentDidMount(){
    fetch('/jj/category')
      .then((response)=>response.json())
      .then((res)=>{
        console.log(res)

      })

  }
}
export default UJPCategory
