import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import './ClientDetailsItem.scss';




import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TablePagination from '@mui/material/TablePagination';
import EditIcon from '@mui/icons-material/Edit';
import { Icon } from '@mui/material';

export default function ClientDetailsItems({ timesheet }) {

    const dispatch = useDispatch();
    const history = useHistory();


    const handleEdit = () => {
        dispatch({ type: 'SET_CLIENT_UPDATE_TIMESHEET', payload: timesheet })
        history.push('/updateClientTimesheetForm');
    }; // end of handleEdit





    const ButtonEdit = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 30,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#f0f0f0',
        borderColor: '#fff',
        color: '#683aff',
    });



    return (

        <div className='edit-client'>


            <ButtonEdit
                fontSize='large'
            >

                <EditIcon
                    onClick={handleEdit}
                    fontSize='large'

                />
            </ButtonEdit>




        </div>
    )


}; // ClientDetailsItems