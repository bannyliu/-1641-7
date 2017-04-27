import React,{Component} from 'react'

class SmallList extends Component{

  render(){
    return(
      <div className="seckill_box">
          <ul>
            <li>
              <div className="img">
                  <a href="/v4/goods/33075">
                      <img src={this.props.thumbnail} />
                  </a>
              </div>
              <div className="g-info">
                <div className="name">
                    <a href="/v4/goods/33075">{this.props.goods_name}</a>
                </div>
                <div className="price">
                    秒杀价:
                    <em className="now">{this.props.goods_price}</em>
                    <em className="old">{this.props.market_price}</em>
                </div>
              </div>
              <div className={this.props.goods_count==0 ? "":'buy_btn'
      }>
                <a href="/v4/goods/33075" >抢购中</a>
              </div>
            </li>
          </ul>
      </div>
    )
  }
}
export default SmallList
