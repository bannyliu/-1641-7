import {Component} from 'react'
import {Link} from 'react-router'
class TimeCut extends Component{
  getTimeCut(value){
      return (
        <a>
          <img src={value.goods_thumbnail} />
          <div className="seckill-price"><span>¥{value.seckill_price}</span></div>
          <div className="info">
              <div><img src="/images/seckill-text.png"/></div>
              <div className="time_block">
                <span>09</span>:
                <span>54</span>:
                <span>09</span>
              </div>
          </div>
        </a>
      )
  }
  render(){
    return(
      <div className="m-timeCut">
        <div className="col">
          {this.getTimeCut(this.props.timeCut)}
        </div>
      </div>
    )
  }
}
export default TimeCut
