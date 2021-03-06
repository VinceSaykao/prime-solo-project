import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';


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
import CloseIcon from '@mui/icons-material/Close';


// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

import Swal from 'sweetalert2';

import './TimesheetForm.scss';

export default function TimesheetForm() {

    const history = useHistory();
    const dispatch = useDispatch();


    const [clientName, setClientName] = useState('');
    const [mileage, setMileage] = useState('');
    const [notes, setNotes] = useState('');
    const [date, setDate] = React.useState(new Date());
    const [timeIn, setTimeIn] = React.useState(new Date());
    const [timeOut, setTimeOut] = React.useState(new Date());
    
    // when submit is pressed, will post all input values
    function handleSubmit() {

        if (clientName != ('') && date != ('') && mileage != ('') && notes != ('') && timeIn != ('') && timeOut != ('')) {
            return Swal.fire({
                title: 'Add Timesheet?',
                text: 'You are submitting a timesheet',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: 'green',
                cancelButtonColor: 'red',
                confirmButtonText: 'Yes, add them!',
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch({ type: 'ADD_TIMESHEET', payload: { date: date, client_name: clientName, in: timeIn, out: timeOut, mileage: mileage, notes: notes } })
                    // clears input value after submit is pressed
                    history.push('/timesheet');

                }
            })

        } else {
            return Swal.fire({
                icon: 'error',
                title: 'Must Have Inputs',
                text: 'Check to see if you are missing any inputs',
            })
        }

    }

    // handles the values of dates
    const handleChange = (newValue) => {
        setDate(newValue);

    };

    // clicking exit pushes you to timesheet
    const handleClick = () => {
        history.push('timesheet')
    }


    return (

        <> <Helmet>
            <style>{`body { height: 100%; background-color: #544e88; 
    
            }`}

            </style>
        </Helmet>
            <CloseIcon
                id='form-exit'
                onClick={handleClick}
            />

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

                        <TextField
                            label='Mileage'
                            id="standard-basic"
                            variant="outlined"
                            value={mileage}
                            onChange={evt => setMileage(evt.target.value)}
                        />

                        <TextField
                            id="outlined-multiline-static"
                            value={notes}
                            label="Notes"
                            placeholder="Notes"
                            multiline
                            rows={4}
                            defaultValue="Default Value"
                            onChange={evt => setNotes(evt.target.value)}
                        />








                    </Stack>
                </LocalizationProvider>
            </div>
            {/* <Button
            variant='outlined'
                // id='submit-form'
                onClick={handleSubmit}
            // onClick={handleClick}
            >
                Submit
            </Button> */}

        </>
    )
}; // end of TimesheetForm