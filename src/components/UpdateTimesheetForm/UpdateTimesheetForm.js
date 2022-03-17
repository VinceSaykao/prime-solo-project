import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


// import { MobileDatePicker } from '@mui/lab';
// import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
// import { MuiPickersUtilsProvider } from "@material-ui/pickers";
// import DateFnsUtils from '@date-io/date-fns';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';


export default function UpdateTimesheetForm() {


    const timesheetFormUpdateReducer = useSelector(store => store.timesheetFormUpdateReducer);
    const history = useHistory();
    const dispatch = useDispatch();

    const [clientName, setClientName] = useState(timesheetFormUpdateReducer.client_name);
    const [date, setDate] = useState(timesheetFormUpdateReducer.date); //timesheetFormUpdateReducer.date
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
        dispatch({ type: 'UPDATE_TIMESHEET', payload: updateInfo })
        // empty the input fields
        setClientName('');
        setDate('');
        setTimeIn('');
        setTimeOut('');
        setMileage('');
        setNotes('');

        history.push('/timesheet');
    }

    // const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
    // const [newDate, setNewDate] = React.useState(new Date('2014-08-18T21:11:54'));

    //     const [timeIn, setTimeIn] = React.useState(new Date('2014-08-18T21:11:54'));
    // const [timeOut, setTimeOut] = React.useState(new Date('2014-08-18T21:11:54'));


    // const handleChange = (newValue) => {
    //     setTimeIn(newValue);
    // };

    // const handleNewChange = (newDateValue) => {
    //     setTimeOut(newDateValue);
    // };



    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                    {/* <TextField
                        id="outlined-basic"
                        label="Client Name"
                        variant="outlined"
                        value={clientName}
                    /> */}

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
                    
                    





                    {/* <MobileDatePicker
                        label="Date mobile"
                        inputFormat="MM/dd/yyyy"
                        value={date}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                        label="Time"
                        value={timeIn}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                        label="Time"
                        value={timeOut}
                        onChange={handleNewChange}
                        renderInput={(params) => <TextField {...params} />}
                    /> */}

                    {/* <TextField
                        id="outlined-basic"
                        label="Mileage"
                        variant="outlined" 
                        value={mileage}
                        />

                    <TextField
                        id="outlined-basic"
                        label="Notes"
                        variant="outlined" 
                        value={notes}
                        /> */}


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

}; // end of UpdateTimesheetForm