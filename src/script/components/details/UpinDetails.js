
import React, { Component } from 'react'
// Header
import DetailsBanner from './Banner'
import DetailsTitle from './Title'
import DetailsStyle from './Style'
import DetailsMore from './More'
import DetailsAttribute from './Attribute'
import DetailsIntroduce from './Introduce'
import DetailsCareful from './Careful'
import DetailsComment from './Comment'
import DetailsHot from './Hot'
import DetailsFooter from './Footer'
//Footer

class UpinDtails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            TitleList: {},
            StyleList: {},
            MoreList: {},
            AttributeList: {},
            IntroduceList: {},
            CarefulList: [],
            FooterList : {}
        }
    }
    // <DetailsFooter FooterList = { this.state.FooterList }/>

    render() {
        return (
            <div className="UpinDtails_container" >
                <div className="UpinDtails_F" >
                    <div className="UpinDtails_header" >
                        详情页头部
                    </div>

                    <div className="UpinDtails_section" >
                        <DetailsBanner />
                        <DetailsTitle TitleList = { this.state.TitleList }/>
                        <DetailsStyle StyleList = { this.state.StyleList }/>
                        <DetailsMore MoreList = { this.state.MoreList }/>
                        <DetailsAttribute AttributeList = { this.state.AttributeList }/>
                        <DetailsIntroduce IntroduceList = { this.state.IntroduceList }/>
                        <DetailsCareful CarefulList = { this.state.CarefulList }/>
                        <DetailsComment />
                        <DetailsHot />
                    </div>
                    <div className="UpinDtails_footer" >
                        <DetailsFooter FooterList = { this.state.FooterList }/>
                    </div>
                </div >
            </div>
        )
    }

    componentDidMount() {
        fetch('/pp/v4/goods/31355')
        .then((response) => response.json())
        .then((res) => {
            // console.log(res.data.attributes)
            this.setState({
                TitleList: res.data,
                StyleList: res.data,
                MoreList: res.data.brand,
                AttributeList: res.data.attributes,
                IntroduceList: res.data.story.slices,
                CarefulList: res.data.tips,
                FooterList : res.data.goods_price
            })
        })
    }

}
export default UpinDtails
