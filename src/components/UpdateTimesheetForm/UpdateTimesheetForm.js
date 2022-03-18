import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './UpdateTimesheetForm.scss';


import { Helmet } from 'react-helmet';


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
import TextareaAutosize from '@mui/material/TextareaAutosize';


export default function UpdateTimesheetForm() {


    const timesheetFormUpdateReducer = useSelector(store => store.timesheetFormUpdateReducer);
    const history = useHistory();
    const dispatch = useDispatch();

    const [clientName, setClientName] = useState(timesheetFormUpdateReducer.client_name);
    const [date, setDate] = useState(timesheetFormUpdateReducer.to_char); //timesheetFormUpdateReducer.date
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


    const handleChange = (newValue) => {
        setDate(newValue);
    };

    // const handleNewChange = (newDateValue) => {
    //     setTimeOut(newDateValue);
    // };



    console.log('this is the date', timesheetFormUpdateReducer)


    return (
        <div>
            <Helmet>
                <style>{`body { height: 2000px; background-image: url("https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG9jZWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"); 
                 background-size: cover; background-position:-50px 0px; background-repeat: no-repeat; 
                 }`}

                </style>
            </Helmet>
            <div id='timesheet-form'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>

                    <Stack spacing={5}>

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
                        <TextareaAutosize
                            aria-label="empty textarea"
                            maxRows={4}
                            placeholder="Notes"
                            style={{ width: 344, height: 120 }}
                            label='Notes'
                            id="note-form"
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
        </div>

    )

}; // end of UpdateTimesheetForm