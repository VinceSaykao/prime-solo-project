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






    // const EditIcon = styled(Icon)(({ theme }) => ({
    //     color: '#fff',
    //     backgroundColor: '#a18de1',
    //     '&:hover': {
    //         backgroundColor: '#bdb4d8',
    //     },
    // }));



    return (

        <div className='edit-client'>

            <EditIcon
                onClick={handleEdit}
            />



        </div>
    )


}; // ClientDetailsItems