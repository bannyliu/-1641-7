import react,{Component} from 'react'

class TabBar extends Component{
  render(){
    return(
      <div className="m-tabbar">
          <div className="active"><i className="yo-ico">&#xe6b8;</i><span>首页</span></div>
          <div><i className="yo-ico">&#xe7f4;</i><span>发现</span></div>
          <div><i className="yo-ico">&#xe67c;</i><span>分类</span></div>
          <div><i className="yo-ico">&#xe78b;</i><span>我的</span></div>
      </div>
    )
  }
}
export default TabBar
