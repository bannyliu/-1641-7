import React,{Component} from 'react'
import SDiscovery from './sDiscovery'
class UJPDiscovery extends  Component{
  constructor(props){
    super(props)
    this.state={
      theme:[{}],
      feature:[{}],
      currentIndex:0
    }
  }
  check_title_index( index ){
      return index === this.state.currentIndex ? "active" : ""
  }

  getNav(list){
    console.log(list)
    return list.map((value,index)=>{
      return(
        <li onClick={() => { this.setState({ currentIndex : index }) } } className={ this.check_title_index( index ) }>
          <a>{value.name}</a>
        </li>
      )
    })


  }
  render(){
    return(
      <div className="section">
          <div className="nav-list">
            <ul className="name">
              {this.getNav(this.state.theme)}
            </ul>
          </div>
          <div className="content">
              <SDiscovery goods = { this.state.feature}/>
          </div>
      </div>
    )
  }

  //https://api.ujipin.com/v5/feature/discovery?count=30&theme_id=6&offset=0
  componentDidMount(){
    fetch('/json/v5/feature/discovery?count=30&theme_id=6&offset=0')
    .then((response)=>response.json())
    .then((res)=>{
      console.log(res.data)
      this.setState({
        theme:res.data.theme_list,
        feature:res.data.feature_list

      })
    })
  }
}
export default UJPDiscovery
