import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function UpdateTimesheetForm() {

    const dispatch = useDispatch();

    const timesheetReducer = useSelector(store => store.timesheetReducer);

    const [clientName, setClientName] = useState(timesheetReducer.client_name);
    const [date, setDate] = useState(timesheetReducer.date);
    const [timeIn, setTimeIn] = useState(timesheetReducer.in);
    const [timeOut, setTimeOut] = useState(timesheetReducer.out);
    const [mileage, setMileage] = useState(timesheetReducer.mileage);
    const [notes, setNotes] = useState(timesheetReducer.notes);

    // when submit is pressed, will post all input values
    function handleSubmit() {

        console.log('clicked submit')
        dispatch ({type: 'UPDATE_TIMESHEET', payload: {date: date, client_name: clientName, in: timeIn, out: timeOut, mileage: mileage, notes: notes}})
        // empty the input fields
        setClientName('');
        setDate('');
        setTimeIn('');
        setTimeOut('');
        setMileage('');
        setNotes('');

        // history.push('/timesheet');
    }

    console.log(timesheetReducer)
    return (
        <div>
            <p>TimeSheet Form</p>
            <input
                placeholder="Client Name"
                value={clientName}
                onChange={evt => setClientName(evt.target.value)}
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
            <button
            onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    )

}; // end of UpdateTimesheetForm