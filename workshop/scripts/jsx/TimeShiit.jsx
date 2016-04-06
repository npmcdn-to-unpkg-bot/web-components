import React from 'react';

const TimeShiit = ({rows, onchange, addrow}) => {
    const timeRows = rows.map( (row, idx) => {
        const props = {row, onchange};
        const key = `row-${row.id}`;
        return (<TimeRow key={key} {...props} /> )
    });
    return (
        <div>
            <h3>TimeShiit - React</h3>            
            { timeRows }
            <button onClick={addrow}>Add Row</button>
        </div>
    )
}

const TimeRow = ({row, onchange}) => {
    const days = Object.keys(row.days);
    const timeFields = days.map( day => {
        const id = `field-${row.id}-${day}`;
        const props = { onchange, rowId: row.id, day, value: row.days[day] };
        return <TimeField key={id} {...props} /> 
    }) 
    const sum = days.map(day => row.days[day]).reduce((p,n) => p + n, 0);
    return (
      <div>
        { timeFields }
        <div>
            <strong>SUMMA: {sum}</strong>
        </div>
      </div>
    );
}

const TimeField = ({onchange, rowId, day, value}) => {
    const change = (event) => {
        var newVal = event.target.value;
        var delta = newVal - value; 
        onchange(delta, rowId, day);
    }
    return <input type="number" onChange={change} value={value} title={day} />;
}

export default TimeShiit;