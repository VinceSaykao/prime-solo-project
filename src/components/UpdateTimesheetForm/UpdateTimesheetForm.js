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
import CloseIcon from '@mui/icons-material/Close';
import MobileTimePicker from '@mui/lab/MobileTimePicker';


import Swal from 'sweetalert2';


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
        if (clientName != ('') && date != ('') && mileage != ('') && notes != ('') && timeIn != ('') && timeOut != ('')) {
            return Swal.fire({
                title: 'Add Timesheet?',
                text: 'You are updating a timesheet',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: 'green',
                cancelButtonColor: 'red',
                confirmButtonText: 'Yes. Submit!',
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


    const handleChange = (newValue) => {
        setDate(newValue);
    };

    // const handleNewChange = (newDateValue) => {
    //     setTimeOut(newDateValue);
    // };



    console.log('this is the date', timesheetFormUpdateReducer)

    const handleClick = () => {
        history.push('/timesheet');
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

}; // end of UpdateTimesheetForm