import {Component} from 'react'
import {Link} from 'react-router'


class Search extends Component {
  constructor(props){
    super(props)
    this.state={
      hotwords:[],
      typeWord:''
    }
  }
  getItem(list){
    return list.map((value,index)=>{
      return(
        <li><Link to={`/searchlist/${value}`}>{value}</Link></li>
      )
    })

  }
  onSaveEvent(){
    var input = this.refs.nameInput;
    var inputValue = input.value;
    this.setState({
      typeWord:inputValue
    })
  }
  render(){
    return(
      <div className="m-search m-mask">
        <div className="search_box">
            <div className="md-content">
              <div className="search-t">
                  <div className="input-box">
                      <div className="go-search-box">
                          <input type="text" ref="nameInput" className="go-search" placeholder="请输入搜索内容" onKeyUp={this.onSaveEvent.bind(this)}/>
                          <i></i>
                      </div>
                  </div>
                  <div className="clear-search" ><Link to={`/searchlist/${this.state.typeWord}`}>确定</Link></div>
              </div>

            </div>
        </div>
        <div className="return-list">
          <p className="all_search">大家都在搜</p>
          <ul>
            {this.getItem(this.state.hotwords)}
          </ul>

        </div>
      </div>
    )
  }
  componentDidMount(){
    fetch('/api/v4/search/hotwords')
     .then((response)=>response.json())
     .then((res)=>{
       this.setState({
         hotwords:res.data.content
       })
     })
  }
}
export default Search
