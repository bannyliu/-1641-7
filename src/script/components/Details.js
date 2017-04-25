import React,{Component} from 'react'

import UpinDtails from './details/UpinDetails'
import DetailsFooter from './details/Footer'


class Details extends Component{
    render(){
        return(
            <div className="u_Details">
                <div className="UpinDtails_F" >
                    <div className="UpinDtails_header" >
                        详情页头部
                    </div>

                    <UpinDtails />

                    <DetailsFooter />
                </div >
            </div>
        )
    }
}
export default Details
