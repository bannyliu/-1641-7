import React,{Component} from 'react'

import MultiList from '../../../component_dev/multilist/src';

import SmallList from './smallList'

import Loading, {loading} from '../../../component_dev/loading/src'

import {Link} from 'react-router'
class LimitList extends Component{
    constructor(props){
      super(props)
        this.state={
          currentIndex : 0,
          activity:[],
          goods:[{}]
        }
    }
    check_title_index( index ){
        return index === this.state.currentIndex ? "active" : ""
    }
    getTitle(list){
      return list.map((value,index)=>{
        return(
          <div onClick={() => { this.setState({ currentIndex : index }) } } className={ this.check_title_index( index ) }  tag_id={value.tag_id} load="true">
            <p className="mt10">{value.start_str}</p>
            <p>{value.slogan}</p>
          </div>
        )
      })
    }
  render(){
    return(
      <div className="u-content">
          <div className="seckill_nav">
            {this.getTitle(this.state.activity)}
          </div>
          <div className="over_time">
            距本场结束
            <div className="time">11:09:49</div>
          </div>
          <SmallList goods = { this.state.goods}/>
          <div className="loading"></div>
      </div>
    )
  }
  //http://m.ujipin.com/api/v4/feature/554350239d6241508fab51624867e490?tag_id=4f8f3f35c1484c1d8ba0b1dda9be6f1e&offset=0&count=10&offset=0&count=10
//  http://m.ujipin.com/api/v4/feature/88a0a8895d3747228b10a353c3f905af?tag_id=null&offset=0&count=10&offset=0&count=10
componentDidMount(){
  // let type = this.props.type;
  fetch(`/json/v4/feature/88a0a8895d3747228b10a353c3f905af?tag_id=null&offset=0&count=10&offset=0&count=10`)
  .then((response)=>(response.json()))
  .then((res)=>{
    this.setState({
      activity:res.data.activity_list,
      goods:res.data.goods_list
    })
    //加载完毕后loading图片消失
      loading.hide()
  })
}
}
export default LimitList
