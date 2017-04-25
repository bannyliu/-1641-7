
import React, {Component} from 'react'

class DetailsIntroduce extends Component {

  getIntroduceTxt(list){
    //   console.log(list)
    if (list && list.length>0) {     // 格式，方法
       return list.map((value,index)=>{
          return (
                <div>
                    <p className="txtFirst">{value.content}</p>
                    <p className="txtSecond"><img src={value.image} alt=""/></p>
                </div>
          )
      })
    }
  }
  // console.log(this.props.IntroduceList.slices)


  render() {
    return (
        <div className="UpinDtails_section_introduce">
            <div className="introduce_title">商品详情</div>
            <div className="introduce_txt">
                {this.getIntroduceTxt(this.props.IntroduceList)}
            </div>
        </div>
    )
  }
}

export default DetailsIntroduce
