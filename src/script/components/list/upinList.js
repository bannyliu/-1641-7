import React,{Component} from 'react'
import {Link} from 'react-router'
import Loading, {loading} from '../../../component_dev/loading/src'
import List from '../../../component_dev/list/src'
import Scroller from '../../../component_dev/scroller/src'
class UpinList extends Component{
    constructor(props){
      super(props)
      this.state={
        bannerPic:'',
        goodList:[{}],
        page:1
      }
    }

    //图片没有加载完显示的加载
    componentWillMount() {
      console.log(this.props.type)
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
    render(){
      return (
        <div className="u-list">
            <section>
              <Scroller scrollX={false} scrollY={true} extraClass="yo-scroller-b">
                <div className="brandList">
                    <img src={this.state.bannerPic} />
                </div>
                <div className="goodList">
                  <ul>
                    <List
                      ref="list"
                      dataSource={this.state.goodList}
                      renderItem={(value,i)=>{
                        if(!this.isEmptyObject(value)){
                          return(
                            <li>
                                <Link to={`/details/${value.goods_id
}`} className="track">
                                  <img src={value.thumbnail} className="lazyload" width="187.5" height="187.5" />
                                </Link>
                                <div className="goodList_info">
                                    <div className="selling_point">{value.selling_point}</div>
                                    <div className="g-name">{value.goods_name}</div>
                                    <div className="g-price">
                                      {value.goods_price}
                                        <span className="g-market">{value.market_price}</span>
                                    </div>
                                    <div className={value.product_stock_total==0 ? "no_stock":'hide'
                            }>已售罄</div>
                                </div>
                            </li>
                          );
                        }
                      }}
                      useLoadMore={true}
                        onLoad={()=>{
                            let type = this.props.type
                            fetch(`/json/v4/tags/${type}?page=${++this.state.page}`)
                            .then((response)=>response.json())
                            .then((res)=>{
                              if (this.state.page <= 2 ) {
                                this.setState({
                                  goodList:this.state.goodList.concat(res.data.goods_list)
                                })
                                this.refs.list.stopLoading(true);
                              } else {
                                this.refs.list.stopLoading(true);
                                this.refs.list.resetLoadStatus(false);
                              }
                            })
                          }}
                        >
                    </List>
                  </ul>
                </div>
              </Scroller>
            </section>
        </div>
      )
    }

    componentDidMount(){
      // fetch("./mock/list.json")
      // let type="this.props.params.type"
      // fetch(`/api/v4/tags/${type}`)
      // let domain = 'http://localhost:7001'
      let type = this.props.type;
      fetch(`/json/v4/tags/${type}?page=1`)
      .then((response)=>(response.json()))
      .then((res)=>{
        this.setState({
          bannerPic:res.data.top_image,
          goodList:res.data.goods_list
        })
        //加载完毕后loading图片消失
          loading.hide()
      })
    }
}
export default UpinList
