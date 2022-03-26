import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';




import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function ClientDetailsItems({ timesheetItem }) {

    const dispatch = useDispatch();
    const history = useHistory();


    const handleEdit = () => {
        dispatch({ type: 'SET_CLIENT_UPDATE_TIMESHEET', payload: timesheetItem })
        history.push('/updateClientTimesheetForm');
        // updateclienttimesheetform
    }; // end of handleEdit

    const handleDelete = () => {
        dispatch({ type: 'DELETE_CLIENT_TIMESHEET', payload: timesheetItem.id })
    }; // end of handleDelete




    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#78e194',
            color: '#000000',
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 18,
        },
    }));

    const ColorButton = styled(Button)(({ theme }) => ({
        color: '#ffffff',
        backgroundColor: '#a18de1',
        '&:hover': {
            backgroundColor: '#bdb4d8',
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


    return (

        <div>
            {timesheetItem.to_char}
    
            <StyledTableCell component="th" scope="row">
            {timesheetItem.notes}
            </StyledTableCell>
            <StyledTableCell
                align="center"
            >
                <ColorButton
                    variant="contained"
                >
                    View Enterprise Questionnaire
                </ColorButton>
            </StyledTableCell>

















            {/* <div id='timesheet-item-list'>
                {timesheetItem.to_char} {timesheetItem.client_name} {timesheetItem.notes}
                <br></br>

                <button
                    onClick={handleEdit}
                >Edit</button>




                <button
                    onClick={handleDelete}
                >Delete</button>
            </div> */}

        </div>
    )


}; // ClientDetailsItems