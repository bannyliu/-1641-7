import {Component} from 'react'

class Menu extends Component {
  constructor(props){
    super(props)
    this.state={
      Discovery:[]
    }
  }

  getDiscoveryData(list){
    return list.map((value,index)=>{
      return(
        <div className="item" onClick={this.hide.bind(this,index)}>
          <div className="t">{value.name}<i></i></div>
          <ul className={`hide hide${index}`} >
          {this.getDiscoveryItems(this.state.Discovery[index].sub_cate_list)}
          </ul>
        </div>
      )
    })
  }
  getDiscoveryItems(list){
    return list.map((value,index)=>{
      return(
        <li><a>{value.name}</a></li>
      )
    })
  }
  hide(index){
      let a = document.querySelector(`.hide${index}`)
      let b = document.querySelector('.item .hide')
      console.log(b)
      a.style.display="block"
  }
  clearSearch(){
    let a = document.querySelector('.m-mask')
    a.style.display="none"
  }
  render(){
    return(
      <div className="m-mask">
        <div className="mask_shade"></div>
        <div className="search_box">
            <div className="md-content">
              <div className="search-t">
                  <div className="input-box">
                      <div className="go-search-box">
                          <input type="text" disabled="disabled" className="go-search" placeholder="请输入搜索内容" />
                          <i></i>
                      </div>
                  </div>
                  <div className="clear-search" onClick={this.clearSearch}>取消</div>
              </div>
              <div className="category-list">
                  {this.getDiscoveryData(this.state.Discovery)}
                  <div className="item">
                    <div className="t">品牌<i></i></div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
  componentDidMount(){
    fetch('/json/v4/tags/discovery')
    .then((response)=>response.json())
    .then((res)=>{
      console.log(res.data)
      this.setState({
        Discovery:res.data
      })
    })
  }
}

export  default Menu
