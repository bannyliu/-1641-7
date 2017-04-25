import React,{Component} from 'react'

import UpinDtails from './details/UpinDetails'

class Details extends Component{
    render(){
        return(
            <div className="u_Details">
                <UpinDtails type={this.props.params.type} />
            </div>
        )
    }
}
export default Details
