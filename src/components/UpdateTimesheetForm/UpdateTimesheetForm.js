import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function UpdateTimesheetForm() {

    
    const timesheetFormUpdateReducer = useSelector(store => store.timesheetFormUpdateReducer);
    const history = useHistory();
    const dispatch = useDispatch();
    
    const [clientName, setClientName] = useState(timesheetFormUpdateReducer.client_name);
    const [date, setDate] = useState(timesheetFormUpdateReducer.date);
    const [timeIn, setTimeIn] = useState(timesheetFormUpdateReducer.in);
    const [timeOut, setTimeOut] = useState(timesheetFormUpdateReducer.out);
    const [mileage, setMileage] = useState(timesheetFormUpdateReducer.mileage);
    const [notes, setNotes] = useState(timesheetFormUpdateReducer.notes);

    // when submit is pressed, will post all input values
    function handleSubmit() {

        console.log('clicked submit')

        const updateInfo = {
            id: timesheetFormUpdateReducer.id,
            date: date,
            client_name: clientName,
            in: timeIn,
            out: timeOut,
            mileage: mileage,
            notes: notes
        }
        dispatch ({type: 'UPDATE_TIMESHEET', payload: updateInfo})
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