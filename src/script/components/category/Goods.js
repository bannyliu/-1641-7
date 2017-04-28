import {Component} from 'react'
import {Link} from 'react-router'
import Scroller from '../../../component_dev/scroller/src'
class Goods extends Component{
  isEmptyObject(e) {  // 判断对象中有没有数据的方法
      var t;
      for (t in e)
          return !1;
      return !0
  }
  getGoodsItems(list){
  if(!this.isEmptyObject(list)){
    return list.map((value,index)=>{
      return (
        <li className="goods_list_down">
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
        <div className="m-Goods">
          <ul className="goodsItems">
            {this.getGoodsItems(this.props.Goods)}
          </ul>
        </div>
    )
  }
}
export default Goods
