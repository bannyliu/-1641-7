import React, { Component } from 'react'

class UserSonUser extends Component {

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
            <div className="User_Sonuser">
                <div className="SonUser_header">
                    <div className="SonUser_pic">
                        <img src="/images/User/userpic.jpg" alt="" />
                        <span><i>铜卡</i>会员</span>
                    </div>
                    <div className="SonUser_name">
                        <p>卡拉永远OK</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserSonUser
