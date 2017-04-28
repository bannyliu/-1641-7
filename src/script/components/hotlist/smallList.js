import React,{Component} from 'react'

class SmallList extends Component{

  getIdfunction(list){
    return list.map((value,i)=>{
      return(
            <ul>
              <li>
                <div className="img">
                    <a href="/v4/goods/33075">
                        <img src={value.thumbnail} />
                    </a>
                </div>
                <div className="g-info">
                  <div className="name">
                      <a href="/v4/goods/33075">{value.goods_name}</a>
                  </div>
                  <div className="price">
                      秒杀价:
                      <em className="now">{value.goods_price}</em>
                      <em className="old">{value.market_price}</em>
                  </div>
                </div>
                <div className={value.goods_count==0 ? "":'buy_btn'}>
                  <a href="/v4/goods/33075" >抢购中</a>
                </div>
              </li>
            </ul>
      )
    })
  }

  render(){
    return(
      <div className="seckill_box">
        {this.getIdfunction(this.props.goods)}
        <div className="loading"></div>
      </div>
    )
  }
}
export default SmallList
