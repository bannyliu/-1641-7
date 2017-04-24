import React, {Component} from 'react'

class Login extends Component {
    render() {
        return (
          <div className="m_login">
              <div className="Arrow">
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
                    <p><a href="/Agreement">《优集品用户协议》</a></p>
                  </div>
                  <div className="login-id">
                    <span>使用帐号登录</span>
                    <em></em>
                  </div>
              </div>
          </div>
        )
    }
}

export default Login
