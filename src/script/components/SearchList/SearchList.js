import {Component} from 'react'
import {Link} from 'react-router'
import Loading, {loading} from '../../../component_dev/loading/src'
import List from '../../../component_dev/list/src'
import Suggest from '../../../component_dev/suggest/src'

class SearchDown extends Component {
  constructor(props){
    super(props)
    this.state={
      goodList:[{}],
      page:1
    }
  }
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
  getTitle(type){
    return(
      <div className="title">搜索"<span>{type}</span>"结果</div>
    )
  }
  getSort(Arr){
    let arr =[]
    let arr1 =[]
    Arr.sort()
    for(let value in Arr)
    {
      arr.push(Arr[value].goods_price)
      arr1.push(value)
    }

  }
  bubbleSort(array){
    /*给每个未确定的位置做循环*/
    for(var unfix=array.length-1; unfix>0; unfix--){
      /*给进度做个记录，比到未确定位置*/
      for(var i=0; i<unfix;i++){
        if(array[i]>array[i+1]){
          var temp = array[i];
          array.splice(i,1,array[i+1]);
          array.splice(i+1,1,temp);
        }
      }
    }

  }
  render(){
    return(
      <div className="searchList">
        <div className="search-box">
          {this.getTitle(this.props.type)}
          <div className="retrieval">
            <Link  onclick={this.getSort(this.state.goodList)} activeClassName="active"><span>人气排序</span></Link>
            <Link activeClassName="active"><span>价格排序</span></Link>
          </div>
        </div>
        <div className="goods-list">
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
                  fetch(`/api/v4/search/goods?page=${++this.state.page}&q=${type}`)
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
      </div>
    )
  }
  componentDidMount(){
    let type = this.props.type
    fetch(`/api/v4/search/goods?page=1&q=${type}`)
     .then((response)=>response.json())
     .then((res)=>{
       this.setState({
         goodList:res.data.goods_list,
         page:1
       })
       loading.hide()
     })
  }
}
export default SearchDown
