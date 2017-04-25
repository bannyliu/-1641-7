
import React, {Component} from 'react'

class DetailsCareful extends Component {

    getCarefulTitle(list){
        // console.log(list)
        if (list && list.length>0) {
            return list.map((value,index)=>{
                return(
                    <li>· {value}</li>
                )
            })
        }
    }

    // <li>· 此商品将由品牌商直接为您配送，预计下单后 48 小时内发货。</li>
    // <li>· 凡包含此款商品的订单，均不支持货到付款。</li>
    render() {
        return (
            <div className="UpinDtails_section_careful">
                <div className="careful_title">注意事项</div>
                <ul>
                    {this.getCarefulTitle(this.props.CarefulList)}
                </ul>
            </div>
        )
    }
}

export default DetailsCareful
