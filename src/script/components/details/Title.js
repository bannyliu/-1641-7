import React, {Component} from 'react'

class DetailsTitle extends Component {

    getTitleName(list){
        return(
            <div>
                <div className="UpinDtails_section_title_name">
                    <div>{list.goods_name}</div>
                </div>
                <div className="UpinDtails_section_title_price">
                    <span className="price_now">{list.goods_price}</span>
                    <span className="price_origin">{list.market_price}</span>
                    <span className="sales">已售 {list.sold_number} 件</span>
                </div>
            </div>
        )
    }
    

  render() {
    return (
        <div className="UpinDtails_section_title">
            {this.getTitleName(this.props.TitleList)}
            <div className="UpinDtails_section_title_discount">
                <div className="discount">
                    <a href="#javascript">
                        <span className="discount_span1">
                            <i className="upassIconLeft"></i>
                            <i className="upassIcon">限时优惠</i>
                            <i className="upassIconRight"></i>
                        </span>
                        <span className="discount_span2">精选推荐 限时特惠</span>
                    </a>
                </div>
            </div>
            <div className="UpinDtails_section_title_promise">
                <span className="promise_a"><i></i>品牌商发货</span>
                <span className="promise_b"><i></i>正品保障</span>
                <span className="promise_c"><i></i>满额包邮</span>
                <div className="promise_d"></div>
            </div>
        </div>
    )
  }

}

export default DetailsTitle
