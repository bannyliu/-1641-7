import React, {Component} from 'react'

class Header extends Component{
  render() {
    return (
      <div className="yo-header header">
        <h2 className="title">title</h2>
        <span className="yo-ico">&#xf07d; 返回</span>
        <span className="affirm yo-ico">&#xf07e;</span>
      </div>
    )
  }

}
export default Header
