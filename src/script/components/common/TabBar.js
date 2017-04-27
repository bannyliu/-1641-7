import react,{Component} from 'react'
import {Link} from 'react-router'

class TabBar extends Component{
  render(){
    return(
      <div className="m-tabbar">
          <div><Link to="/" activeClassName="active"><i className="yo-ico" >&#xe6b8;</i><span>首页</span></Link></div>
          <div><Link to="/discovery" activeClassName="active"><i className="yo-ico">&#xe7f4;</i><span>发现</span></Link></div>
          <div><Link to="/category" activeClassName="active"><i className="yo-ico">&#xe67c;</i><span>分类</span></Link></div>
          <div><Link to="/user" activeClassName="active"><i className="yo-ico">&#xe78b;</i><span>我的</span></Link></div>
      </div>
    )
  }
}
export default TabBar
