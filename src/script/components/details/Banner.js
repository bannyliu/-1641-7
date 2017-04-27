
import React, {Component} from 'react'
import Carousel from '../../../component_dev/carousel/src'

class DetailsBanner extends Component {

    getBanner(arr){
        return arr.length>0 ? arr.map((value, index)=>{
            return(
                <li className="item"><img className="img" src={value} /></li>
            )
         }) : [<div/>]
    }
  render() {
    return (
      <div className="UpinDtails_section_banner">
          <Carousel autoplay={false} extraClass={'yo-carousel-a'}>
            {this.getBanner(this.props.BannerList)}
          </Carousel>
      </div>
    )
  }
}
export default DetailsBanner
