import React,{Component} from 'react'
class Nav extends Component {
  // getNavList(list){
  //   return list.map((value,index)=>{
  //     return(
  //       <div><a><img src={value.tab_icon} /></a></div>
  //     )
  //   })
  // }
  render(){
    return(
      <div className="m-nav">
        <div><a><img src="http://img1.ujipin.com/f2e2d7ed6fb0ecad92dd0da9acb61930?UCloudPublicKey=ucloudjiawoyong@ujipin.cn14466281690001077321672&Expires=1493433265&Signature=LaOXV1DiPlugR5uu85NNC9pKyxA=&format=" /></a></div>
        <div><a><img src="http://img1.ujipin.com/dbaa12ace19582d2a18e0db690981b6e?UCloudPublicKey=ucloudjiawoyong@ujipin.cn14466281690001077321672&Expires=1493433265&Signature=3UaeenCK4yidMa32PdZsKwzCCMs=&format=" /></a></div>
        <div><a><img src="http://img1.ujipin.com/ad07fdc65c8bf95f256e1c78e725cea9?UCloudPublicKey=ucloudjiawoyong@ujipin.cn14466281690001077321672&Expires=1493433265&Signature=ze22glj8Uef+aOFlbabcfemBhc8=&format=" /></a></div>
      </div>
    )
  }
}
export default Nav
