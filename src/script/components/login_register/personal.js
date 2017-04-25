import React, {Component} from 'react'

class Personal extends Component {
    render() {
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
                    <input name="mobile" type="tel" className="mobile" placeholder="请输入账号"/>
                </div>
                <div className="items">
                    <span className="iocn-pho">
                      <em></em>
                    </span>
                    <input name="password" type="text" className="passW" placeholder="请输入密码"/>
                </div>
                <div className="sr-hide">输入有误</div>
                <input className="login-bt" type="submit" value="登 录"/>
                <div className="list_title">
                    <i className="l"></i>社交帐号登录<i className="r"></i>
                </div>
                <div className="third-qq">
                    <div className="third-btn">
                        <a></a>
                    </div>
                </div>


              </div>
          </div>

        )
    }
}

export default Personal
