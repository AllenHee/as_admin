import React from 'react';
import PropTypes from 'prop-types';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';

const Home = (props) => {
    const { data, cols } = props;

    return (
        <div>
            <h1 className="common-title">Home Page</h1>
            <Chart data={data} height={300} width={600} cols={cols} forceFit>
                <Axis name="year" />
                <Axis name="value" />
                <Tooltip
                    crosshairs={{
                        type: "y"
                    }}
                />
                <Geom type="line" position="year*value" size={2} />
                <Geom
                    type="point"
                    position="year*value"
                    size={4}
                    shape={"circle"}
                    style={{
                        stroke: "#fff",
                        lineWidth: 1
                    }}
                />
            </Chart>
            <Chart data={data} height={300} width={600} cols={cols} forceFit>
                <Axis name="year" />
                <Axis name="value" />
                <Tooltip
                    crosshairs={{
                        type: "y"
                    }}
                />
                <Geom type="line" position="year*value" size={2} />
                <Geom
                    type="point"
                    position="year*value"
                    size={4}
                    shape={"circle"}
                    style={{
                        stroke: "#fff",
                        lineWidth: 1
                    }}
                />
            </Chart>
        </div>
    )
}

Home.propTypes = {
    data: PropTypes.array,
    cols: PropTypes.object
}

export default Home;