import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './TimesheetForm.css';

export default function TimesheetForm() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [clientName, setClientName] = useState('');
    const [date, setDate] = useState('');
    const [timeIn, setTimeIn] = useState('');
    const [timeOut, setTimeOut] = useState('');
    const [mileage, setMileage] = useState('');
    const [notes, setNotes] = useState('');

    // when submit is pressed, will post all input values
    function handleSubmit() {

        console.log('clicked submit')
        dispatch({ type: 'ADD_TIMESHEET', payload: { date: date, client_name: clientName, in: timeIn, out: timeOut, mileage: mileage, notes: notes } })
        // empty the input fields
        setClientName('');
        setDate('');
        setTimeIn('');
        setTimeOut('');
        setMileage('');
        setNotes('');

        history.push('/timesheet');
    }

    return (
        <div
            id='timesheet-form'
        >
            <h1
                id='timesheet-form-header'
            ><span id='header-form'>TimeSheet Form</span></h1>
            <div id='form-inputs'>

                <p
                    id='name-label'
                >Client Name</p>
                <input
                    id='form-name'
                    value={clientName}
                    onChange={evt => setClientName(evt.target.value)}
                />

                <p
                    id='date-label'
                >Date</p>
                <input
                    id='form-date'
                    placeholder="Date"
                    value={date}
                    onChange={evt => setDate(evt.target.value)}
                />

                <p
                    id='date-in'
                >In</p>
                <input
                    id='form-in'
                    placeholder="Time In"
                    value={timeIn}
                    onChange={evt => setTimeIn(evt.target.value)}
                />

                <p
                    id='date-out'
                >Out</p>
                <input
                    id='form-out'
                    placeholder="Time Out"
                    value={timeOut}
                    onChange={evt => setTimeOut(evt.target.value)}
                />

                <p
                    id='date-out'
                >Out</p>
                <input
                    id='form-mileage'
                    placeholder="Mileage"
                    value={mileage}
                    onChange={evt => setMileage(evt.target.value)}
                />
                <input
                    id='form-notes'
                    placeholder="Notes"
                    value={notes}
                    onChange={evt => setNotes(evt.target.value)}
                />

            </div>
            <button
                id='submit-form'
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    )
}; // end of TimesheetForm