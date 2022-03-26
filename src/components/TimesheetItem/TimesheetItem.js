import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './TimesheetItem.scss';

import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function TimesheetItem({ timesheetItem }) {

    const history = useHistory();
    const dispatch = useDispatch();


    const handleEdit = () => {
        console.log('this is id', timesheetItem.id)
        dispatch({ type: 'SET_UPDATE_TIMESHEET', payload: timesheetItem })
        history.push('/updateTimesheetForm');
    }; // end of handleEdit

    const handleDelete = () => {
        setOpen(true);
        console.log('clicked delete');
        dispatch({ type: 'DELETE_TIMESHEET', payload: timesheetItem.id })
    }; // end of handleDelete

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    console.log('fixing', timesheetItem);
    return (
        <div>
            
    
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert id='alert-delete' onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    You Successfully Deleted!
                </Alert>
            </Snackbar>


            <div id='timesheet-item-list'>
                {timesheetItem.to_char} {timesheetItem.client_name} 
                <br></br>
                <button
                    onClick={handleEdit}
                >Edit</button>
                <button
                    onClick={handleDelete}
                >Delete</button>
            </div>



        </div>
    )
}; // end of TimesheetItem