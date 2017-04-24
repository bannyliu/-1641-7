import React,{Component} from 'react'

import MultiList from '../../../component_dev/multilist/src';

class LimitList extends Component{

  render(){
    return(
      <div className="u-content">
          <div className="seckill_nav">
            <div className="act" tag_id="dedddd2a43ee4305a6a7a1b3c842d701" load="true">
              <p className="mt10">10:00</p>
              <p>抢购中</p>
            </div>
            <div  tag_id="4f8f3f35c1484c1d8ba0b1dda9be6f1e" load="true">
              <p className="mt10">14:00</p>
              <p>即将开始</p>
            </div>
            <div  tag_id="e104e1981a554139bab1d0996cd95ce0" load="true">
              <p className="mt10">20:00</p>
              <p>即将开始</p>
            </div>
          </div>
          <div className="over_time">
            距本场结束
            <div className="time">11:09:49</div>
          </div>
          <div className="seckill_box">
              <ul>
                <li></li>
              </ul>
          </div>
          <div className="loading"></div>
      </div>
    )
  }



}
export default LimitList
