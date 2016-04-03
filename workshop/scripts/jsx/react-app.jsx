import React from 'react';
import ReactDOM from 'react-dom';
import TimeShiit from './TimeShiit';

class App extends React.Component {
    render() {
        return (
            <TimeShiit msg="pass data in props">
                <p>...or markup as children</p>
            </TimeShiit>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('mount-node')
);