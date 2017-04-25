
import React, {Component} from 'react'

class DetailsComment extends Component {
  render() {
    return (
        <div className="UpinDtails_section_comment">
            <div className="comment_title">
                用户评价
                <span></span>
            </div>
            <ul>
                <li>
                    <div className="comment_name"></div>
                    <div className="comment_txt">该商品暂时还没有评论！</div>
                </li>
            </ul>
            <div className="comment_more">查看全部评价</div>
        </div>
    )
  }
}

export default DetailsComment
