import React, {Component} from 'react'

class DetailsFooter extends Component {

    isEmptyObject(e) {
       var t;
       for (t in e)
           return !1;
           return !0
     }
     getFooter(list){
        //  console.log(list)
         if (!this.isEmptyObject(list)) {
             return (
                 <span className="price_red"> ¥ {list}</span>
             )
         }
    }

    render() {
        return (
            <div>
                <p className="price_now">
                    <span className="price_tit">总价 </span>
                    {this.getFooter(this.props.FooterList)}
                </p>
                <div className="Buy">立即购买</div>
            </div>
        )
    }
}

export default DetailsFooter
