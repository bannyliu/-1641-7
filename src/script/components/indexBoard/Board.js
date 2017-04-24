import React,{Component} from 'react'
import Banner from './BoardChilds/Banner'
import Nav from './BoardChilds/IndexNav'
import Row from './BoardChilds/IndexRow'
import TimeCut from './BoardChilds/IndexTimecut'
import SlideGoods from './BoardChilds/SlideGoods'
import BoxGoods from './BoardChilds/BoxGoods'
import Scroller from '../../../component_dev/scroller/src'
class Board extends Component{
  constructor(props){
    super(props)
    this.state={
      bannerList:[],
      navList:[],
      rowList:[],
      timeCut:[],
      SlideGoods:[],
      BoxGoods:[]
    }
  }
  render(){
    return(
      <div className="m-board">
          <Scroller scrollX={false} scrollY={true} extraClass="yo-scroller-a">
                <Banner bannerList={this.state.bannerList} />
                <Nav navList={this.state.navList}/>
                <Row rowList={this.state.rowList} />
                <TimeCut timeCut={this.state.timeCut} />
                <SlideGoods SlideGoods={this.state.SlideGoods} />
                <BoxGoods BoxGoods={this.state.BoxGoods} />
            </Scroller>
        </div>
    )
  }
  componentDidMount(){
    fetch('/json/v5/home')
      .then((response)=>response.json())
      .then((res)=>{
        this.setState({
          bannerList:res.data.splash_list,
          navList:res.data.activity_list[0].tab_list,
          rowList:[res.data.activity_list[1]],
          timeCut:res.data.activity_list[2],
          SlideGoods:[res.data.activity_list[3],res.data.activity_list[4]],
          BoxGoods:res.data.tag_list
        })
      })
  }
}

export default Board
