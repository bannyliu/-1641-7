import React,{Component} from 'react'

import UserSonUser from './SonUser'
import UserDiscount from './Discount'
import UserServer from './Server'

import Scroller from '../../../component_dev/scroller/src'

class UJPUser extends  Component{
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         SonUserList :[],
    //         DiscountList : [],
    //         ServerList : []
    //     }
    // }

  render(){
    return(
        <div className="User">

            <UserSonUser />

            <UserDiscount />

            <UserServer />

        </div>
    )
  }

  // componentDidMount() {
  //     let type = this.props.type
  //     fetch(`/json/v4/goods/${type}`)
  //     .then((response) => response.json())
  //     .then((res) => {
  //         // console.log(res.data.attributes)
  //         this.setState({
  //             BannerList : res.data.splash,
  //             TitleList: res.data,
  //             StyleList: res.data,
  //             MoreList: res.data.brand,
  //             AttributeList: res.data.attributes,
  //             IntroduceList: res.data.story.slices,
  //             CarefulList: res.data.tips,
  //             FooterList : res.data.goods_price
  //         })
  //     })
  // }

}
export default UJPUser
