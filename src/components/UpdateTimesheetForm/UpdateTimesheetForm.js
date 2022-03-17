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

    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
    const [newDate, setNewDate] = React.useState(new Date('2014-08-18T21:11:54'));


    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleNewChange = (newDateValue) => {
        setNewDate(newDateValue);
    };

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>

                    <MobileDatePicker
                        label="Date mobile"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                        label="Time"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                        label="Time"
                        value={newDate}
                        onChange={handleNewChange}
                        renderInput={(params) => <TextField {...params} />}
                    />

                </Stack>
            </LocalizationProvider>

            
        </div>
    )

}; // end of UpdateTimesheetForm