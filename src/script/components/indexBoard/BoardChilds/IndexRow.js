import React,{Component} from 'react'
import {Link} from 'react-router'
class Row extends Component{
  getRowList(list){
    return list.map((value,index)=>{
      return(
        <div className="row"><div><Link to={`/list/${value.feature_id
}`}><img src={value.cover}  /></Link></div></div>
      )
    })
  }
  render(){
    return(
      <div className="m-row">
      {this.getRowList(this.props.rowList)}
      </div>
    )
  }
}
export default Row
