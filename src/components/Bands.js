import React from 'react'
import Band from './Band'

export default class Bands extends React.Component {
    
    renderBands = () => {
        return this.props.bands.map(band => <Band deleteBand={this.props.deleteBand} key={band.id} band={band} />)
      }

    render() {

        return (
            <div>
                {this.renderBands()}
            </div>
        )
    }


}