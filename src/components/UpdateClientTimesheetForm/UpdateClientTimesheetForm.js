//SET_CLIENT_UPDATE_TIMESHEET

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './UpdateClientTimesheetForm.scss';

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


export default function UpdateClientTimesheetForm() {


    const timesheetClientUpdateFormTimesheetReducer = useSelector(store => store.timesheetClientUpdateFormTimesheetReducer);
    const history = useHistory();
    const dispatch = useDispatch();

    const [clientName, setClientName] = useState(timesheetClientUpdateFormTimesheetReducer.client_name);
    const [date, setDate] = useState(timesheetClientUpdateFormTimesheetReducer.to_char); //timesheetFormUpdateReducer.date
    const [clientId, setClientId] = useState(timesheetClientUpdateFormTimesheetReducer.client_id);
    const [timeIn, setTimeIn] = useState(timesheetClientUpdateFormTimesheetReducer.in);
    const [timeOut, setTimeOut] = useState(timesheetClientUpdateFormTimesheetReducer.out);
    const [mileage, setMileage] = useState(timesheetClientUpdateFormTimesheetReducer.mileage);
    const [notes, setNotes] = useState(timesheetClientUpdateFormTimesheetReducer.notes);
    const [id, setId] = useState(timesheetClientUpdateFormTimesheetReducer.id);

    // when submit is pressed, will post all input values
    function handleSubmit() {

        console.log('clicked submit')


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
                    dispatch({ type: 'UPDATE_CLIENT_TIMESHEET', payload: { id: id, date: date, client_name: clientName, client_id: clientId, in: timeIn, out: timeOut, mileage: mileage, notes: notes } })
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

    console.log('GARRRRRGHHHHH update client timesheet form', timesheetClientUpdateFormTimesheetReducer)

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
            <button
                id='submit-form'
                onClick={handleSubmit}
            >
                Submit
            </button>

        </>
    )

}; // end of UpdateTimesheetForm