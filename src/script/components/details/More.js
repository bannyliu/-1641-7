import React, {Component} from 'react'

class DetailsMore extends Component {

    getTitleMore(list){
        return(
            <a href="#javascript">
                <div className="more_A">
                    <div className="more_pic">
                        <img src={list.logo} alt="" />
                    </div>
                    <div className="more_title">
                        <div className="more_title_name">{list.name}</div>
                        <div className="more_title_explain">
                            <span><i></i>{list.country}</span>
                            <em>{list.position}</em>
                        </div>
                    </div>
                    <span className="more_R"></span>
                </div>
                <div className="more_many">查看在售商品{list.goods_count}件</div>
            </a>
        )
    }

    render() {
        return (
            <div className="UpinDtails_section_more">
                {this.getTitleMore(this.props.MoreList)}
            </div>
    )
  }
}

export default DetailsMore
