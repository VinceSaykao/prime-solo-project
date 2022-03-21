import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


import MobileDatePicker from '@mui/lab/MobileDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import MobileTimePicker from '@mui/lab/MobileTimePicker';
import { Helmet } from 'react-helmet';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Alert from '@mui/material/Alert';

import Swal from 'sweetalert2';

import './TimesheetForm.scss';

export default function TimesheetForm() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [clientName, setClientName] = useState('');
    const [date, setDate] = useState(date);
    // const [timeIn, setTimeIn] = useState();
    // const [timeOut, setTimeOut] = useState('');
    const [mileage, setMileage] = useState('');
    const [notes, setNotes] = useState('');

    const [timeIn, setTimeIn] = React.useState(new Date());
    const [timeOut, setTimeOut] = React.useState(new Date());
    // when submit is pressed, will post all input values
    function handleSubmit() {

        if (clientName != ('') && date != ('') && mileage != ('') && notes != ('') && timeIn != ('') && timeOut != ('')) {
            return Swal.fire({
                title: 'Add Timesheet?',
                text: 'You Won\'t Be Able To Revert This',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: 'green',
                cancelButtonColor: 'red',
                confirmButtonText: 'Yes, add them!',
            })
                && dispatch({ type: 'ADD_TIMESHEET', payload: { date: date, client_name: clientName, in: timeIn, out: timeOut, mileage: mileage, notes: notes } })
                // clears input value after submit is pressed
                && history.push('/timesheet');

        } else {
            return Swal.fire({
                icon: 'error',
                title: 'Must Have Inputs',
                text: 'Check to see if you are missing any inputs',
            })
        }
        
    }





    //     console.log('clicked submit')
    //     dispatch({ type: 'ADD_TIMESHEET', payload: { date: date, client_name: clientName, in: timeIn, out: timeOut, mileage: mileage, notes: notes } })
    //     // empty the input fields
    //     setClientName('');
    //     setDate('');
    //     setTimeIn('');
    //     setTimeOut('');
    //     setMileage('');
    //     setNotes('');
    //     // setOpen(true);
    //     history.push('/timesheet');
    // }


    const handleChange = (newValue) => {
        setDate(newValue);

    };




    return (

        <> <Helmet>
            <style>{`body { height: 1000px; background-image: url("https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG9jZWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"); 
                 background-size: cover; background-position:-50px 0px; background-repeat: no-repeat; 
                 }`}

            </style>
        </Helmet>

            <div id='TimeSheetForm'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>

                    <Stack spacing={5}>

                        <TextField
                            label='Client Name'
                            id="standard-basic"
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

                        <MobileTimePicker
                            label="Time In"
                            value={timeIn}
                            onChange={(newValue) => {
                                setTimeIn(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />

                        <MobileTimePicker
                            label="Time Out"
                            value={timeOut}
                            onChange={(newValue2) => {
                                setTimeOut(newValue2);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />


                        {/* <TextField
                label='In'
                id="outlined-basic"
                variant="outlined"
                value={timeIn}
                onChange={evt => setTimeIn(evt.target.value)}
            /> */}
                        {/* <TextField
                        label='Out'
                        id="outlined-basic"
                        variant="outlined"
                        value={timeOut}
                        onChange={evt => setTimeOut(evt.target.value)}
                    /> */}
                        <TextField
                            label='Mileage'
                            id="standard-basic"
                            variant="outlined"
                            value={mileage}
                            onChange={evt => setMileage(evt.target.value)}
                        />
                        {/* <TextField
                            label='Notes'
                            id="standard-basic"
                            variant="outlined"
                            value={notes}
                            onChange={evt => setNotes(evt.target.value)}
                        /> */}


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








                    </Stack>
                </LocalizationProvider>
            </div>
            <button
                id='submit-form'
                onClick={handleSubmit}
            // onClick={handleClick}
            >
                Submit
            </button>

        </>
    )
}; // end of TimesheetForm