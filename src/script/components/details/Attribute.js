
import React, { Component } from 'react'

class DetailsAttribute extends Component {

    isEmptyObject(e) {  // 判断对象中有没有数据的方法
        var t;
        for (t in e)
            return !1;
        return !0
    }
    getAttribute(list) {
        if (!this.isEmptyObject(list)) {  // 当传入的 list 对象中不为空时
            var arr = []
            for(let value in list){   // 遍历 list 内的值
              arr.push(value)         // 把遍历的结果插入到新数组中
            }
          return  arr.map((value,index)=>{   // 遍历新数组
              return(
                <tr>
                  <td className="active">{value}</td>
                  <td className="con">{list[value]}</td>
                </tr>)
              })
        }
    }

    // { this.getAttribute(this.props.AttributeList.toArray) }
    render() {
        return (
            <div className = "UpinDtails_section_attribute" >
                <div>
                    <div className="attribute_title">商品属性</div>
                    <div className="attribute_notes">
                        <table>
                            {this.getAttribute(this.props.AttributeList)}
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailsAttribute
