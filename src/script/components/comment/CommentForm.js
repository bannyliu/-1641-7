import  React from 'react'
export default class CommentForm extends React.Component{
  submitHandler(){
    let author = this.refs.author.value
    let content = this.refs.content.value
    this.props.onFormHandler([{author:author,content:content,time:'5分钟前'}])
    this.refs.author.value=''
    this.refs.content.value=''
  }
  render(){
    return(
      <div className="form">
        <label>
          作者：<input ref="author" type="text" />
        </label>
        <label>
          内容：<input ref="content" type="text" />
        </label>
        <label>
          <input  onClick={this.submitHandler.bind(this)}    type="button" value="提交"/>
        </label>
      </div>
    )
  }
}
