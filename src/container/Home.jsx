import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Home } from '../component';

class HomeContaniner extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                { year: 1998, value: 650 },
                { year: 1988, value: 700 },
                { year: 1978, value: 650 },
                { year: 1968, value: 600 },
                { year: 1958, value: 680 },
                { year: 1948, value: 986 }
            ],
            cols: {
                year: { range: [0, 1] },
                value: { min: 100 }
            }
        }
    }
    render() {
        return (
            <Home
                {...this}
                {...this.props}
                {...this.state}
            ></Home>
        )
    }
}

HomeContaniner.propTypes = {
    data: PropTypes.array,
    cols: PropTypes.object
}

export default HomeContaniner;
