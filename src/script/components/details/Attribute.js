import React, {Component} from 'react'

class DetailsAttribute extends Component {

    getAttribute(str) {
        if (str && str.attributes) {
            //return str.map((value,index)=>{
                for(let value in str){
                return(
                    <div className="attribute_title">商品属性</div>
                    <div className="attribute_notes">
                        <table>

                        <tr>
                        <td className="active">{value}</td>
                        <td className="con">{str[value]}</td>
                        </tr>

                        </table>
                    </div>

                )
                }
            //})
        }
    }

    // <tr>
    //     <td className="active">材质</td>
    //     <td className="con">陶瓷</td>
    // </tr>
    // <tr>
    //     <td className="active">尺寸</td>
    //     <td className="con">饭碗：直径11.7cm 高6.3cm 汤碗：直径19.2cm 高7.3cm 小汤勺：长13cm 味碟：直径8.5cm 高2.5cm 平盘：直径20cm 高2.6cm 深盘：直径21.7cm 高4.5cm</td>
    // </tr>
    // <tr>
    //     <td className="active">套装内容</td>
    //     <td className="con">饭碗×4、味碟×4、小汤勺×4、平盘×2、深盘×2、汤碗×1</td>
    // </tr>

    render() {
        return (
            <div className="UpinDtails_section_attribute">
                {this.getAttribute(this.props.AttributeList.toArray)}
            </div>
        )
    }
}

export default DetailsAttribute
