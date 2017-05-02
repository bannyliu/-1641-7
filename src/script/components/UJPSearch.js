import {Component} from 'react'
import Suggest from '../../component_dev/suggest/src'
import List from '../../component_dev/list/src'
import Header from './common/Header'
import Search from './common/Search'
class UJPSearch extends Component{
  render(){
    return(
      <div>
        <Header />
        <Search />
      </div>
    )
  }
}
export default UJPSearch
