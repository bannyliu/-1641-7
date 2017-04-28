import React,{Component} from 'react'
import Nav from './Nav'
import Item from './Item'
import Carousel from '../../../component_dev/carousel/src'

class UJPCategory extends  Component{
  constructor(props){
    super(props)
    this.state={
      NavList:[],
      ItemList:[],
      Index:0
    }
  }
  getCategoryNav(){

  }

  getIndex(index){
    this.setState({
      Index:index
    })
  }
  render(){
    return(
      <div className="category">
        <Nav NavList={this.state.NavList} getIndex={this.getIndex.bind(this)}/>
        <Carousel autoplay={false}>
            <Item className="item" Index="1" ItemList={this.state.ItemList}/>
            <Item className="item" Index="2" ItemList={this.state.ItemList}/>
            <Item className="item" Index="3" ItemList={this.state.ItemList}/>
            <Item className="item" Index="4" ItemList={this.state.ItemList}/>
            <Item className="item" Index="5" ItemList={this.state.ItemList}/>
            <Item className="item" Index="0" ItemList={this.state.ItemList}/>
        </Carousel>
      </div>
    )
  }
componentWillUpdate(){
    fetch(`/jj/category${this.state.Index}`)
      .then((response)=>response.json())
      .then((res)=>{
        this.setState({
          NavList:res.data.top_cates,
          ItemList:res.data,

        })
      })
  }
  componentDidMount(){
    fetch(`/jj/category${this.state.Index}`)
      .then((response)=>response.json())
      .then((res)=>{
        this.setState({
          NavList:res.data.top_cates,
          ItemList:res.data,

        })
      })
  }
}
export default UJPCategory
