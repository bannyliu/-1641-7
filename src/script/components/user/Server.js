
import React, { Component } from 'react'

class UserServer extends Component {

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
            <div className="User_Server">
                <div className="Server_Pass">
                    <div className="Server_Pass_title">
                        <span className="title_pic"></span>
                        <div className="title_name">U-PASS 专区</div>
                    </div>
                    <div className="Server_Pass_member">
                        <div className="member_name">会员专享</div>
                        <div className="member_details">点击进入</div>
                        <span className="member_Arrow"></span>
                    </div>
                    <div className="Server_Pass_code">
                        <div className="code_name">我的消费码</div>
                        <div className="code_details">暂无可用消费码</div>
                        <span className="code_Arrow"></span>
                    </div>
                </div>
                <div className="Server_Order">
                    <div className="Order_title">
                        <div className="Order_title_name">我的订单</div>
                        <div className="Order_title_details">查看全部订单</div>
                        <span className="Order_title_Arrow"></span>
                        <i></i>
                    </div>
                    <div className="Order_particular">
                        <div className="payment">
                            <span className="pay"></span>
                            <span className="payName">待支付</span>
                        </div>
                        <div className="receipt">
                            <span className="deliver"></span>
                            <span className="deliverName">待收货</span>
                        </div>
                        <div className="comment">
                            <span className="edit"></span>
                            <span className="editName">带评论</span>
                        </div>
                        <div className="service">
                            <span className="refund"></span>
                            <span className="refundName">售后/退款</span>
                        </div>
                    </div>
                </div>
                <div className="Server_Function">
                    <div className="Function_invitation">
                        <div className="Function_invitation_name">邀请好友 共享特惠</div>
                        <div className="Function_invitation_details">立得 120 元</div>
                        <span className="Function_invitation_Arrow"></span>
                        <i></i>
                    </div>
                    <div className="Function_balance">
                        <div className="Function_balance_name">我的余额</div>
                        <div className="Function_balance_details"><span>¥ <em>0.00</em> </span></div>
                        <span className="Function_balance_Arrow"></span>
                        <i></i>
                    </div>
                    <div className="Function_collection">
                        <div className="Function_collection_name">我的收藏</div>
                        <span className="Function_collection_Arrow"></span>
                        <i></i>
                    </div>
                    <div className="Function_footprint">
                        <div className="Function_footprint_name">我的足迹</div>
                        <span className="Function_footprint_Arrow"></span>
                        <i></i>
                    </div>
                    <div className="Function_customer">
                        <div className="Function_customer_name">联系客服</div>
                        <div className="Function_customer_details">工作时间：09:00 至 22:00</div>
                        <span className="Function_customer_Arrow"></span>
                        <i></i>
                    </div>
                    <div className="Function_address">
                        <div className="Function_address_name">地址管理</div>
                        <span className="Function_address_Arrow"></span>
                        <i></i>
                    </div>
                    <div className="Function_setup">
                        <div className="Function_setup_name">设置</div>
                        <span className="Function_setup_Arrow"></span>
                        <i></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserServer
