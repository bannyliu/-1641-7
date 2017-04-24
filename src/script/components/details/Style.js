import React, {Component} from 'react'

class DetailsStyle extends Component {

    getTitleStyle(list){
        return(
            <div>
                {list.default_selected_product}
            </div>
        )
    }

    render() {
        return (
            <div className="UpinDtails_section_style">
                {this.getTitleStyle(this.props.StyleList)}
                <span className="style_R"></span>
            </div>
        )
    }
}

export default DetailsStyle
