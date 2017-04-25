import React, {Component} from 'react';
import {Link} from 'react-router';

class Login extends Component {
    render() {
      console.log(this)
        return (
          <div className="m_login">
              <div className="Arrow" onClick={this.props.router.goBack}>
                <img src="http://m.ujipin.com/media/images/icon17.png"/>
              </div>
              <div className="login-items">
                  <div className="items">
                      <span className="iocn">
                        <em></em>
                      </span>
                      <input name="mobile" type="tel" className="mobile" placeholder="请输入手机号"/>
                  </div>
                  <div className="items">
                      <span className="iocn-phone">
                        <em></em>
                      </span>
                      <input name="password" type="text" className="passW" placeholder="请输入验证码"/>
                      <div className="getcode">验 证</div>
                  </div>
                  <div className="sr-hide">输入有误</div>
                  <input className="login-btn" type="submit" value="手机快捷登录"/>
                  <div className="tips-phone">
                    <p>未注册的手机号，登录时将自动注册，登录即表示您同意</p>
                    <p><Link to={"/Agreement"}>《优集品用户协议》</Link></p>
                  </div>
                  <div className="login-id">
                    <Link to={"/Personal"}><span>使用帐号登录</span></Link>
                    <em></em>
                  </div>
              </div>
          </div>
        )
    }
}

export default Login
