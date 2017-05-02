import React,{Component} from 'react'
import Loading, {loading} from '../../../component_dev/loading/src'
import List from '../../../component_dev/list/src'
class SmallList extends Component{
  constructor(props){
    super(props)
    this.state={
      goods:this.props.goods
    }
  }


  render(){
    return(
      <div className="seckill_box">
          <ul>
          <List
            ref="list"
            dataSource={this.state.goods}
            renderItem={(value,i)=>{
              return(
                <li>
                  <div className="img">
                      <a href="/v4/goods/33075">
                          <img src={value.thumbnail} />
                      </a>
                  </div>
                  <div className="g-info">
                    <div className="name">
                        <a href="/v4/goods/33075">{value.goods_name}</a>
                    </div>
                    <div className="price">
                        秒杀价:
                        <em className="now">{value.goods_price}</em>
                        <em className="old">{value.market_price}</em>
                    </div>
                  </div>
                  <div className={value.goods_count==0 ? "":'buy_btn'}>
                    <a href="/v4/goods/33075" >抢购中</a>
                  </div>
                </li>
              )
            }}
            useLoadMore={true}
              onLoad={()=>{

                  fetch(`/json/v4/feature/554350239d6241508fab51624867e490?tag_id=${localStorage.getItem("tag_id")}&offset=${this.props.index++}&count=10`)
                  .then((response)=>response.json())
                  .then((res)=>{
                    // console.log(res.data.goods_list)
                    if (this.props.index++ <=3 ) {
                      // console.log(this.state.goods)
                      this.setState({
                        goods:this.state.goods.concat(res.data.goods_list)

                      })
                      console.log(this.state.goods)
                      this.refs.list.stopLoading(true);
                    } else {
                      this.refs.list.stopLoading(true);
                      this.refs.list.resetLoadStatus(false);
                    }
                  })
                }}
          ></List>
          </ul>
      </div>
    )
  }

}
export default SmallList
