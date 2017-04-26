
import React, {Component} from 'react'
import Carousel from '../../../component_dev/carousel/src'
// es6
console.log(Carousel);

class DetailsBanner extends Component {

    getBanner(list){
        console.log(list)
        // <li className="item"><img className="img" src= /></li>

    }

    // <li className="item"><img className="img" src="//img1.qunarzz.com/qs/1610/a6/01d1ad00e4b9e102.jpg" /></li>
    // <li className="item"><img className="img" src="//img1.qunarzz.com/qs/1610/a6/01d1ad00e4b9e102.jpg" /></li>
    // <li className="item"><img className="img" src="//img1.qunarzz.com/qs/1610/a6/01d1ad00e4b9e102.jpg" /></li>
    // <img src="http://img1.ujipin.com/0da35e377d05d4eb415beab3be4903dc?UCloudPublicKey=ucloudjiawoyong@ujipin.cn14466281690001077321672&Expires=1493609368&Signature=m9Zby4ipTrHQBX0Nt2d2J/UxH50=&format=PNG" alt=""/>
  render() {
    return (
      <div className="UpinDtails_section_banner">
        <Carousel>
            {this.getBanner(this.props.BannerList)}
        </Carousel>
      </div>
    )
  }
}

export default DetailsBanner
