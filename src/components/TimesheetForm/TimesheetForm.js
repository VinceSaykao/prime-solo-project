import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


import MobileDatePicker from '@mui/lab/MobileDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import './TimesheetForm.scss';

export default function TimesheetForm() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [clientName, setClientName] = useState('');
    const [date, setDate] = useState();
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


    const handleChange = (newValue) => {
        setDate(newValue);
    };

    return (
        <div id='TimeSheetForm'>
        <LocalizationProvider dateAdapter={AdapterDateFns}>

<Stack spacing={3}>

            <TextField
                label='Client Name'
                id="outlined-basic"
                variant="outlined"
                value={clientName}
                onChange={evt => setClientName(evt.target.value)}
            />


            <MobileDatePicker
                label="Date"
                inputFormat="MM/dd/yyyy"
                value={date}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
            />

            <TextField
                label='In'
                id="outlined-basic"
                variant="outlined"
                value={timeIn}
                onChange={evt => setTimeIn(evt.target.value)}
            />
            <TextField
                label='Out'
                id="outlined-basic"
                variant="outlined"
                value={timeOut}
                onChange={evt => setTimeOut(evt.target.value)}
            />
            <TextField
                label='Mileage'
                id="outlined-basic"
                variant="outlined"
                value={mileage}
                onChange={evt => setMileage(evt.target.value)}
            />
            <TextField
                label='Notes'
                id="outlined-basic"
                variant="outlined"
                value={notes}
                onChange={evt => setNotes(evt.target.value)}
            />



            <button
                id='submit-form'
                onClick={handleSubmit}
            >
                Submit
            </button>


            </Stack>
        </LocalizationProvider>
        </div>
    )
}; // end of TimesheetForm