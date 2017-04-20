
import React from 'react'

import CommentItem from './CommentItem'

export default class CommentList extends React.Component {
  // constructor(props){
  //   super(props)
  //
  //   this.state = {
  //     data: []
  //   }
  // }

  render() {
    // this.state.data.push({
    //   author: this.props.author,
    //   content: this.props.content,
    //   time: this.props.time
    // })

    let comments = this.props.data.map((value, index)=>(
      <CommentItem author={value.author} time={value.time} content={value.content}/>
    ))

    return (
      <div>
        {comments}
      </div>
    )
  }

  // componentDidMount() {
  //   fetch('/mock/comment.json')
  //     .then((response)=>response.json())
  //     .then((result)=>{
  //       this.setState({
  //         data: this.state.data.concat(result)
  //       })
  //     })
  // }
}
