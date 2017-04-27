import React,{Component} from 'react'

class SDiscovery extends  Component{

  getfunction(list){
    return list.map((value,i)=>{
      return(
        <dl>
          <p className="theme">{value.theme}</p>
          <dt>
            <img src={value.cover}/>
          </dt>
          <dd className="title">
            <p>{value.title}</p>
          </dd>
          <dd className="intro">
            <p>{value.intro}</p>
          </dd>
        </dl>
      )
    })
  }

  render(){
    console.log(this.props.goods)
    return (
    <div className="dis-content">
        {this.getfunction(this.props.goods)}
    </div>
    )
  }

}
export default SDiscovery
