import {Component} from 'react'
class Top extends Component{
  isEmptyObject(e) {  // 判断对象中有没有数据的方法
      var t;
      for (t in e)
          return !1;
      return !0
  }
  getTopList(list){
    if(!this.isEmptyObject(list)){
      return list.map((value,index)=>{
        return(
          <li className="top_list">
          <a>
          <img src={value.thumbnail
          } />
          </a>
          <p>{value.name}</p>
          </li>
        )
      })
    }
  }
  render(){
    return(
        <div className="top">
          <ul  className="topItem">
            {this.getTopList(this.props.TopList)}
          </ul>
        </div>
    )
  }
}
export default Top
