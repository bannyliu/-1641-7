import {Component} from 'react'
import Scroller from '../../../component_dev/scroller/src'
import Top from './Top'
import Goods from './Goods'
import SlideGoods from '../indexBoard/BoardChilds/SlideGoods'
class Item extends Component{
  constructor(props){
    super(props)
    this.state={
      ItemList:[],
    }
  }
  render(){
    return(
        <div className="item">
          <Scroller>
            <Top TopList={this.state.ItemList.hot_sub_cate_list}/>
            <div className="correlation">相关专题</div>
            <SlideGoods SlideGoods={this.state.ItemList.related_tag_list}/>
            <div className="correlation">热品推荐</div>
            <Goods Goods={this.state.ItemList.goods_list}/>
          </Scroller>
        </div>
    )
  }
  componentDidMount(){
    fetch(`/jj/category${this.props.Index}`)
      .then((response)=>response.json())
      .then((res)=>{
        this.setState({
          NavList:res.data.top_cates,
          ItemList:res.data,

        })
      })
  }
}
export default Item
