import React from 'react';

class TimeShiit extends React.Component {
    render() {
        return (
            <div>
                <h3>TimeShiit - React</h3>
                <h4>{this.props.msg}</h4>
                {this.props.children}
            </div>
        )
    }
}

export default TimeShiit;