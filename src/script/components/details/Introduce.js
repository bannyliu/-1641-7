import React, {Component} from 'react'

class DetailsIntroduce extends Component {

  getIntroduceTxt(list){
    if (list && list.lenght>0) {
      var commentNodes = list.map(function (comment){
          return (
            <div>
              <h1>{comment.author}</h1>
            </div>
          );
      });
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
