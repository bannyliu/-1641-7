import {Component} from 'react'
import Scroller from '../../../component_dev/scroller/src'
class Nav extends Component{

  getNavList(list){
    return list.map((value,index)=>{
      return(
          <li onClick={this.props.getIndex.bind(this,index)}><a>{value.name}</a></li>
      )
    })
  }
  render(){
    return(
        <Scroller extraClass="nav" scrollX="true" scrollY="false">
          <ul>
          {this.getNavList(this.props.NavList)}
          </ul>
        </Scroller>

    )
  }

}
export default Nav
