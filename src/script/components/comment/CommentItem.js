import React from 'react'

export default class CommentItem extends React.Component{
  render(){
    return(
      <div className="m-comment">
        <h1>{this.props.content}</h1>
        <p><span>{this.props.author}</span><span>{this.props.time}</span></p>
      </div>
    )
  }
}
