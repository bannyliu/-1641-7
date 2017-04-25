import React, {Component} from 'react'

class DetailsAttribute extends Component {

    isEmptyObject(e) {
        var t;
        for (t in e)
        return !1;
        return !0
    }
    getAttribute(list) {
        if (!this.isEmptyObject(list)) {
            let arr = []
            for(let value in list){
              arr.push(value)
            }
          return  arr.map((value,index)=>{
              return(
                <tr>
                  <td className="active">{value}</td>
                  <td className="con">{list[value]}</td>
                </tr>)
              })
        }
    }
    render() {
        return (
            <div>
                  <div className="attribute_title">商品属性</div>
                  <div className="attribute_notes">
                      <table>
                        {this.getAttribute(this.props.AttributeList)}
                      </table>
                  </div>
            </div>
        )
    }
}

export default DetailsAttribute
