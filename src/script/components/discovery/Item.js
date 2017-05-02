import React,{Component} from 'react'

class Item extends  Component{

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

    return (
    <div className="item">
        {this.getfunction(this.props.goods)}
    </div>
    )
  }

}
export default Item
