import React,{Component} from 'react'
import {Link} from 'react-router'
import Carousel from '../../../../component_dev/carousel/src/index'
class Banner extends Component{
  getBannerList(list){
    return list.map((value,index)=>{
      return(
        <li className="item"><Link to={`/list/${value.redirect_content
}`}><img src={value.cover}  className="img"/></Link></li>
      )
    })
  }
  abc(list){
    return list.length>0?list.map((value,index)=>{
      return(
          <li className="item"><img className="img" src={value.cover} /></li>
      )
    }):[<div />]
  }
  render(){
    return(
      <Carousel extraClass="yo-carousel-a">
         {this.abc(this.props.bannerList)}
      </Carousel>
    )
  }
}
export default Banner
