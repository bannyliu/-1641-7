
import React, {Component} from 'react'

class DetailsComment extends Component {
  render() {
    return (
        <div className="UpinDtails_section_comment">
            <div className="comment_title">
                用户评价
                <span>(4)</span>
            </div>
            <ul>
                <li>
                    <div className="comment_name">2***m</div>
                    <div className="comment_txt">用一段时间了，简约风格，质量很好，瓷质厚实，喜欢。</div>
                </li>
            </ul>
            <div className="comment_more">查看全部评价</div>
        </div>
    )
  }
}

export default DetailsComment
