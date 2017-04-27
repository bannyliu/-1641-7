import React,{Component} from 'react'

class UJPDiscovery extends  Component{
  constructor(props){
    super(props)
    this.state={
      theme:[{}],
      feature:[{}],
      currentIndex:0
    }
  }
  check_title_index( index ){
      return index === this.state.theme.theme_id ? "active" : ""
  }

  getNav(list){
    return list.map((value,index)=>{
      return(
        <li onClick={() => { this.setState({ currentIndex : index }) } } className={ this.check_title_index( index ) }>
          <a>{value.theme.name}</a>
        </li>
      )
    })


  }
  render(){
    return(
      <div className="section">
          <div className="nav-list">
            <ul className="name">
              {this.getNav(this.state.theme)}
            </ul>
          </div>
          <div className="dis-content">
              <dl>
                <p className="theme">生活时尚与文艺</p>
                <dt>
                  <img src="http://img1.ujipin.com/940e37b3818db65c2e2605aae8fee666?UCloudPublicKey=ucloudjiawoyong@ujipin.cn14466281690001077321672&Expires=1493817673&Signature=qPBNbgWTwXA3Jd1WoiAO2KoPTPI=&format=JPEG"/>
                </dt>
                <dd className="title">
                  <p>高颜值野餐攻略，春光正好我们去野餐吧！</p>
                </dd>
                <dd className="intro">
                  <p>没有野餐的春天是对好时光的辜负~</p>
                </dd>
              </dl>
          </div>
      </div>
    )
  }

  //https://api.ujipin.com/v5/feature/discovery?count=30&theme_id=6&offset=0
  componentDidMount(){
    fetch('/json/v5/feature/discovery?count=30&theme_id=6&offset=0')
    .then((response)=>response.json())
    .then((res)=>{
      console.log(res.data)
      this.setState({
        theme:res.data.theme_list,
        feature:res.data.feature_list

      })
    })
  }
}
export default UJPDiscovery
