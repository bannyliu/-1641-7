import React from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
export default class CommentBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data:[]
    }
  }
  formHandler(d) {
    this.setState({
      data:this.state.data.concat(d)
    })
  }
  render() {
    return (
      <div>
        <CommentList data={this.state.data} />
        <CommentForm onFormHandler={this.formHandler.bind(this)} />
      </div>
    )
  }
  componentDidMount(){
    fetch('/mock/comment.json')
      .then((res)=>res.json())
      .then((result)=>{
        this.setState({
              data: this.state.data.concat(result)
              })
      })
  }
}
