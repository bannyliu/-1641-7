import React,{Component} from 'react';
class  Header extends Component{
  getSearch(){
    let a = document.querySelector('.m-mask')
    a.style.display="block"
  }
  render(){
    return(
      <div className="m-header">
        <div className="header_logo"><img src="/images/logo.png" /></div>
        <div className="header_right">
            <a className="header_seacrch" onClick={this.getSearch}><img src="/images/search.png" /></a>
            <a className="header_user"><img src="/images/user.png" /></a>
            <a className="header_cart"><img src="/images/cart.png" /></a>
        </div>
      </div>
    )
  }
}

export default Header
