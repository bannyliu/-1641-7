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
    // isEmptyObject(e) {  // 判断对象中有没有数据的方法
    //     var t;
    //     for (t in e)
    //         return !1;
    //     return !0
    // }
    //if (!this.isEmptyObject(list)) {  // 当传入的 list 对象中不为空时

    // console.log(list.)
    // var arr = []
    // for(let value in list){   // 遍历 list 内的值
    //   arr.push(value)         // 把遍历的结果插入到新数组中
    // }

    // return list.map((value,index)=>{
    // getTitlePromise(list){
    //             return (
    //                 <div className="UpinDtails_section_title_promise">
    //                     <span className="promise_a"><i></i>品牌商发货</span>
    //                     <span className="promise_b"><i></i>正品保障</span>
    //                     <span className="promise_c"><i></i>满额包邮</span>
    //                     <div className="promise_d"></div>
    //                 </div>
    //             )
    //     }
    // }
    // })

    // if( list && list.length > 0){
    //     console.log(list.services)
    //     return list.map((value,index)=>{
    //         return (
    //             <div className="UpinDtails_section_title_promise">
    //                 <span className="promise_a"><i></i>{value.desc}</span>
    //                 <div className="promise_d"></div>
    //             </div>
    //         )
    //     })
    // }


    // <div className="UpinDtails_section_title_promise">
    //     <span className="promise_a"><i></i>品牌商发货</span>
    //     <span className="promise_b"><i></i>正品保障</span>
    //     <span className="promise_c"><i></i>满额包邮</span>
    //     <div className="promise_d"></div>
    // </div>

    // {this.getTitlePromise(this.props.TitleList)}

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
