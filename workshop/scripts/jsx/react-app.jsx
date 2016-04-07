import React from 'react';
import ReactDOM from 'react-dom';
import TimeShiit from './TimeShiit.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rows: [ ] };
        this.state.rows.push(this.newRow());
    }
    newRow(){
        return {
            id: this.state.rows.length,
            days: { Mon: 0, Tis: 0, Ons: 0, Tor: 0, Fre: 0 }
        };
    }
    addRow(){
        this.state.rows.push(this.newRow());
        this.setState(this.state);
    }
    handleChange(delta, rowId, dayId) {
        const row = this.state.rows[rowId]; 
        row.days[dayId] += delta;
        this.setState(this.state);
    }
    render() {
        const props = { 
            rows: this.state.rows,
            onchange: (diff,row, day) => this.handleChange(diff,row, day),
            addrow: () => this.addRow()
        };        
        return (
            <TimeShiit {...props} />
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('mount-node')
);