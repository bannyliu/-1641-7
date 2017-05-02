import {Component} from 'react'
import Header from './common/Header'
import SearchDown from './SearchList/SearchList'
class SearchList extends Component {

  render(){
    console.log(this)
    return(
      <div className="m-SearchList">
        <Header />
        <SearchDown type={this.props.params.type}/>
      </div>
    )
  }
}
export default SearchList
