import React,{Component} from 'react'
// import Header from '../common/Header'

class UpinList extends Component{
    constructor(props){
      super(props)
      this.state={
        bannerPic:'',
        movieList:[]
      }
    }
    getList(list){
      return list.map((value,index)=>{
        return(
          <li>
              <a href="" className="track">
                <img src={value.thumbnail} className="lazyload" width="187.5" height="187.5" />
              </a>
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

        )
      })
    }

    render(){
      return (
        <div className="u-list">
            <section>
                <div className="brandList">
                    <img src={this.state.bannerPic} />
                    console.log(this.state.bannerPic)
                </div>

                <div className="goodList">
                    <ul>
                        {this.getList(this.state.movieList)}
                    </ul>
                </div>

            </section>
        </div>
      )
    }

    componentDidMount(){
      // fetch("./mock/list.json")
      // let type="this.props.params.type"
      // fetch(`/api/v4/tags/${type}`)
      // let domain = 'http://localhost:7001'

//http://m.ujipin.com/api/v4/tags/d7ee6e65bbef457a9012ba7ccd0e4201?page=1
      fetch('/api/v4/tags/3fa2ea1ebc0049a7863217863b831ef7?page=1')
      // fetch('/api/v4/tags/3fa2ea1ebc0049a7863217863b831ef7?page=2')
      .then((response)=>(response.json()))
      .then((res)=>{
        this.setState({
          bannerPic:res.data.top_image,
          movieList:res.data.goods_list
        })
      })
    }


}
export default UpinList
