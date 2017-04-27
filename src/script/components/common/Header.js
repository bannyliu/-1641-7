import React,{Component} from 'react';
import {Link} from 'react-router';
class  Header extends Component{
  getSearch(){
    let a = document.querySelector('.m-mask')
    a.style.display="block"
  }
  render(){
    return(
      <div className="m-header">
        <div className="header_logo"><Link to={'/'}><img src="/images/logo.png" /></Link></div>
        <div className="header_right">
            <a className="header_seacrch" onClick={this.getSearch}><img src="/images/search.png" /></a>
            <Link to={"/login"} className="header_user"><img src="/images/user.png" /></Link>
            <a className="header_cart"><img src="/images/cart.png" /></a>
        </div>
      </div>
    )
  }
}

export default Header
