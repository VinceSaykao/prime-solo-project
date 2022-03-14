import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function TimesheetForm() {

    const [clientName, setClientName] = useState('');
    const [date, setDate] = useState('');
    const [timeIn, setTimeIn] = useState('');
    const [timeOut, setTimeOut] = useState('');
    const [mileage, setMileage] = useState('');
    const [notes, setNotes] = useState('');
    return (
        <div>

            <p>Hello World</p>
            <input
                placeholder="Client Name"
                value={clientName}
                onChange={evt => setClientNAme(evt.target.value)}
            />
            <input
                placeholder="Date"
                value={date}
                onChange={evt => setDate(evt.target.value)}
            />
            <input
                placeholder="Time In"
                value={timeIn}
                onChange={evt => setTimeIn(evt.target.value)}
            />
            <input
                placeholder="Time Out"
                value={timeOut}
                onChange={evt => setTimeOut(evt.target.value)}
            />
            <input
                placeholder="Mileage"
                value={mileage}
                onChange={evt => setMileage(evt.target.value)}
            />
            <input
                placeholder="Notes"
                value={notes}
                onChange={evt => setNotes(evt.target.value)}
            />
            <button>
                Submit
            </button>

        </div>
    )
}; // end of TimesheetForm