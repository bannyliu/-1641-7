import React,{Component} from 'react'
import Item from './item'
import Scroller from '../../../component_dev/scroller/src'
import Carousel from '../../../component_dev/carousel/src'
class UJPDiscovery extends  Component{
  constructor(props){
    super(props)
    this.state={
      theme:[{}],
      feature:[{}],
      Index:0
    }
  }
  //改变样式
  check_title_index( index ){
      return index === this.state.Index ? "active" : ""
  }
  //获取index
  getIndex(index){
    this.setState({
      Index:index
    })
  }

  getNav(list){
    return list.map((value,index)=>{
      return(
        <li getIndex={this.getIndex.bind(this)}
         onClick={() => {
           fetch(`/json/v5/feature/discovery?count=30&theme_id=${index}&offset=0`)
           .then((response)=>response.json())
           .then((res)=>{
           this.setState({
              Index : index,
              theme:res.data.theme_list,
              feature:res.data.feature_list
            })
         })
         }}
        className={ this.check_title_index( index ) }
        >
          <a>{value.name}</a>
        </li>
      )
    })
  }
  render(){
    return(
      <div className="section">
          <div className="nav-list" >
            <Scroller  scrollX="true" scrollY="false">
              <ul className="name">
              {this.getNav(this.state.theme)}
              </ul>
            </Scroller>
          </div>
          <div className="content">
            <Carousel autoplay={false}>
                <Item className="item" Index="1" goods={this.state.feature}/>
                <Item className="item" Index="2" goods={this.state.feature}/>
                <Item className="item" Index="3" goods={this.state.feature}/>
                <Item className="item" Index="4" goods={this.state.feature}/>
                <Item className="item" Index="5" goods={this.state.feature}/>
                <Item className="item" Index="0" goods={this.state.feature}/>
            </Carousel>
          </div>
      </div>
    )
  }

  componentWillUpdate(){
    console.log(this.state.Index)
      fetch(`/json/v5/feature/discovery?count=30&theme_id=${this.state.Index}&offset=0`)
        .then((response)=>response.json())
        .then((res)=>{
          this.setState({
            theme:res.data.theme_list,
            feature:res.data.feature_list
          })
        })
    }
  //https://api.ujipin.com/v5/feature/discovery?count=30&theme_id=6&offset=0
  componentDidMount(){
    fetch(`/json/v5/feature/discovery?count=30&theme_id=6&offset=0`)
    .then((response)=>response.json())
    .then((res)=>{
      this.setState({
        theme:res.data.theme_list,
        feature:res.data.feature_list
      })
    })
  }
}
export default UJPDiscovery
