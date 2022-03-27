import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import './ClientDetailsItemDelete.scss';

import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import * as React from 'react';
import Button from '@mui/material/Button';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';




const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ClientDetailsItemsDelete({ timesheet }) {

    const [open, setOpen] = React.useState(false);

    const dispatch = useDispatch();
    const history = useHistory();



    const handleDelete = () => {
        dispatch({ type: 'DELETE_CLIENT_TIMESHEET', payload: timesheet.id })
        setOpen(true);
    }; // end of handleDelete


    const ButtonDelete = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#f0f0f0',
        borderColor: '#fff',
        color: '#683aff',
    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };




    return (

        <>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert id='alert-delete' onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    You Successfully Deleted!
                </Alert>
            </Snackbar>

            <div className='client-delete-icon'>
                <ButtonDelete variant="contained" onClick={handleDelete}>

                    <DeleteIcon
                        fontSize='large'
                    />
                </ButtonDelete>
            </div>
        </>
    )


}; // ClientDetailsItems