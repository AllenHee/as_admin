import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { App } from '../component'

class Appcontainer extends Component {
    render() {
        return (
            <App
                {...this}
                {...this.props}
                {...this.state}
            ></App>
        )
    }
}

// function mapStateToProps(state) {
//     return {

//     }
// }

// export default connect(mapStateToProps)(Appcontainer);
export default Appcontainer;