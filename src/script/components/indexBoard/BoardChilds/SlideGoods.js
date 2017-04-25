import {Component} from 'react'
import {Link} from 'react-router'
import Scroller from '../../../../component_dev/scroller/src'
class SlideGoods extends Component{

  getSlideGoods(list){
    return list.map((value,index)=>{
      return(
        <div className="slideGoods">
          <div className="slide_images">
              <Link to={`/list/${value.feature_id
}`}>
                  <img src={value.cover} />
              </Link>
              <div className="triangle-up"></div>
          </div>

          <div className="swiper_wrapper">
            <Scroller scrollX={true} scrollY={false}>
              <div className="swiper_goods">

                {this.getSlideGoodsItems(this.props.SlideGoods[index].goods_list)}

              </div>
            </Scroller>
          </div>
        </div>
      )
    })
  }


  getSlideGoodsItems(list){
    return list.map((value,index)=>{
        return (
        <div className="swiper_goods_items">
          <Link to={`/details/${value.goods_id}`}>
            <span className="pro-img"><img src={value.thumbnail
  }/></span>
            <span className="pro-title">{value.goods_name}</span>
            <span className="pro-price">
              ¥{value.goods_price}
              <span className="old_price">{value.market_price}</span>
            </span>
          </Link>
        </div>
      )
    })
  }
  render(){
    return(
      <div className="m-slide">
        {this.getSlideGoods(this.props.SlideGoods)}
      </div>
    )
  }

}
export default SlideGoods
