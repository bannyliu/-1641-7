import React,{Component} from 'react'
import Loading, {loading} from '../../../component_dev/loading/src'
import List from '../../../component_dev/list/src'
import {Link} from 'react-router'
class LimitList extends Component{
    constructor(props){
      super(props)
        this.state={
          page:0,
          currentIndex : 0,
          activity:[],
          goods:[{}]
        }
    }
    //图片没有加载完显示的加载
    componentWillMount() {
      loading.show({
      // maskOffset: [0, ],
      text: '正在加载'
    });
    }

    isEmptyObject(e) {
      var t;
      for (t in e)
          return !1;
      return !0
    }


    check_title_index( index ){
        return index === this.state.currentIndex ? "active" : ""
    }
    getTitle(list){
      return list.map((value,index)=>{


        return(
          <div id={value.tag_id}
          onClick={() => {
            fetch(`/json/v4/feature/554350239d6241508fab51624867e490?tag_id=${value.tag_id}&offset=0&count=10&offset=0&count=10`)
            .then((response)=>(response.json()))
            .then((res)=>{
              // console.log(value.tag_id)
              localStorage.setItem("tag_id",value.tag_id);
               this.setState({
               page:0,
               currentIndex : index,
               activity:res.data.activity_list,
               goods:res.data.goods_list
               })
         })
         } }
           className={ this.check_title_index( index ) }   load="true">
            <p className="mt10">{value.start_str}</p>
            <p>{value.slogan}</p>
          </div>
        )
      })
    }


  render(){
    return(
      <div className="u-content">
          <div className="seckill_nav">
            {this.getTitle(this.state.activity)}
          </div>
          <div className="over_time">
            距本场结束
            <div className="time">11:09:49</div>
          </div>

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
                        console.log( ++ this.state.page)
                      fetch(`/json/v4/feature/554350239d6241508fab51624867e490?tag_id=${localStorage.getItem("tag_id")}&offset=${++ this.state.page}&count=10`)
                      .then((response)=>response.json())
                      .then((res)=>{
                        // console.log(res.data.goods_list)
                        if ( ++ this.state.page <= 4 ) {
                          // console.log(this.state.goods)
                          this.setState({
                            goods:this.state.goods.concat(res.data.goods_list)
                          })
                          // console.log(this.state.goods)
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
      </div>
    )
  }
//http://m.ujipin.com/api/v4/feature/tag_id=4f8f3f35c1484c1d8ba0b1dda9be6f1e&offset=0&count=10&offset=0&count=10
//http://m.ujipin.com/api/v4/feature/88a0a8895d3747228b10a353c3f905af?tag_id=null&offset=0&count=10&offset=0&count=10
//http://m.ujipin.com/api/v4/feature/a55b7394f49f4aac95f265439167e6a0?tag_id=null&offset=0&count=10&offset=0&count=10
componentDidMount(){
  fetch(`/json/v4/feature/88a0a8895d3747228b10a353c3f905af?tag_id=null&offset=0&count=10&offset=0&count=10`)
.then((response)=>(response.json()))
  .then((res)=>{
    this.setState({
      id:res.data.selected_tag,
      activity:res.data.activity_list,
      goods:res.data.goods_list
    })
    //加载完毕后loading图片消失
      loading.hide({
        text: '没有更多的数据啦'
      })
  })
}
}
export default LimitList
