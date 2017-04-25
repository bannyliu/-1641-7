
import React, {Component} from 'react'

class DetailsFooter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            FooterList : {}
        }
    }

    isEmptyObject(e) {
       var t;
       for (t in e)
           return !1;
           return !0
     }

    render() {
        if (!this.isEmptyObject(this.state.FooterList)) {
            return (
                <div className="UpinDtails_footer" >
                    <p className="price_now">
                        <span className="price_tit">总价 </span>
                        <span className="price_red"> ¥ {this.state.FooterList}</span>
                    </p>
                    <div className="Buy">立即购买</div>
                </div>
            )
        }else{
            return null
        }
    }

    componentDidMount() {
        fetch('/pp/v4/goods/21887')
        .then((response) => response.json())
        .then((res) => {
            // console.log(res.data.attributes)
            this.setState({
                FooterList : res.data.goods_price
            })
        })
    }
}

export default DetailsFooter
