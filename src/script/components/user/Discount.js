
import React, { Component } from 'react'

class UserDiscount extends Component {

    isEmptyObject(e) {  // 判断对象中有没有数据的方法
        var t;
        for (t in e)
            return !1;
        return !0
    }
    getAttribute(list) {

    }
    // if (!this.isEmptyObject(list)) {  // 当传入的 list 对象中不为空时
    //     var arr = []
    //     for(let value in list){   // 遍历 list 内的值
    //         arr.push(value)         // 把遍历的结果插入到新数组中
    //     }
    //     return  arr.map((value,index)=>{   // 遍历新数组
    //         return(
    //             <tr>
    //             <td className="active">{value}</td>
    //             <td className="con">{list[value]}</td>
    //             </tr>)
    //         })
    //     }

    // { this.getAttribute(this.props.AttributeList.toArray) }
    render() {
        return (
            <div className="User_Discount">
                <div className="Discount_name">
                    <ul>
                        <li><a href="#javascript"><span>1</span>优惠券</a></li>
                        <li><a href="#javascript"><span>0</span>优币</a></li>
                        <li><a href="#javascript" className="noR"><i></i>签到</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default UserDiscount
