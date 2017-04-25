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
            console.log(list)

            // return list.map((value,index)=>{
            // for (var [key, value] of list) {
            //    console.log(key + value);
            // }
            // for(let value in str){
            //     return(
            //         <div>
            //             <div className="attribute_title">商品属性</div>
            //             <div className="attribute_notes">
            //                 <table>
            //
            //                      <tr>
            //                         <td className="active">{value}</td>
            //                         <td className="con">{value}</td>
            //                     </tr>
            //
            //                 </table>
            //             </div>
            //         </div>
            //     )
            // }
            // })
        }
    }
    render() {
        return (
            <div className="UpinDtails_section_attribute">
                {this.getAttribute(this.props.AttributeList)}
            </div>
        )
    }
}

export default DetailsAttribute
