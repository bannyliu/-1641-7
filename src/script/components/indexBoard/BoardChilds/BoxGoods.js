import {Component} from 'react'
import {Link} from 'react-router'
class BoxGoods extends Component{
  getGoodsList(list){
    return list.map((value,index)=>{
      // console.log(list)
      return(
        <div className="box_goods">
          <div className="goods_title"><img src={value.cover} / ></div>
          <div className="goods_list">
            <ul>
              {this.getGoodsItems(this.props.BoxGoods[index].goods_list)}
              <li className="last_more">
                <a>
                  <div className="goods-list-last">
                      <div className="text-box">
                        <div className="title">{value.name}</div>
                        <div className="num">还有{value.goods_amount}件生活好物</div>
                        <div className="icon"></div>
                      </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )
    })
  }
  getGoodsItems(list){
    return list.map((value,index)=>{
      return (
        <li>
          <Link to={`/details/${value.goods_id}`}><img src={value.thumbnail} /></Link>
          <div className="goods_list_iofo">
            <div className="selling_point">{value.selling_point
}</div>
            <div className="g-name">{value.goods_name}</div>
            <div className="g-price">¥ {value.goods_price
}<span className="g-market">{value.market_price
}</span></div>
            <div className={`g-mark ${value.mark? '':'hide'}`}><img src={value.mark
} /></div>
          </div>
        </li>
      )
    })
  }
  render(){
    return(
      <div className="m-boxGoods">
        {this.getGoodsList(this.props.BoxGoods)}
      </div>
    )
  }
}
export default BoxGoods
