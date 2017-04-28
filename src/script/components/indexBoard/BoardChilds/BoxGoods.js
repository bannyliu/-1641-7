import {Component} from 'react'
import {Link} from 'react-router'
import Scroller from '../../../../component_dev/scroller/src'
class BoxGoods extends Component{
  isEmptyObject(e) {  // 判断对象中有没有数据的方法
      var t;
      for (t in e)
          return !1;
      return !0
  }
  getGoodsList(list){
  if(!this.isEmptyObject(list)){
    return list.map((value,index)=>{
      // console.log(list)
      return(
        <div className="box_goods">
          <div className="goods_title"><Scroller.LazyImage height="50" src={value.cover} / ></div>
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
  }
  getGoodsItems(list){
  if(!this.isEmptyObject(list)){
    return list.map((value,index)=>{
      return (
        <li>
          <Link to={`/details/${value.goods_id}`}><Scroller.LazyImage height="188" src={value.thumbnail} /></Link>
          <div className="goods_list_iofo">
            <div className="selling_point">{value.selling_point
}</div>
            <div className="g-name">{value.goods_name}</div>
            <div className="g-price">¥ {value.goods_price
}<span className="g-market">{value.market_price
}</span></div>
            <div className={`g-mark ${value.mark? '':'hide'}`}><Scroller.LazyImage height="53" src={value.mark
} /></div>
          </div>
        </li>
      )
    })

  }
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
